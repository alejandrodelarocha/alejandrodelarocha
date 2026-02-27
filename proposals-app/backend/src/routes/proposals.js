import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from '../db/pool.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROPOSALS_CONFIG = join(__dirname, '../../proposals.json');

export const seedFromJson = async () => {
  try {
    const { rows } = await pool.query('SELECT COUNT(*) FROM proposals');
    if (parseInt(rows[0].count) > 0) return;

    const proposals = JSON.parse(readFileSync(PROPOSALS_CONFIG, 'utf8'));
    for (const p of proposals) {
      await pool.query(
        `INSERT INTO proposals (name, icon, description, tags, url_path, status)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [p.name, p.icon, p.description, p.tags || [], p.url_path, p.status || 'sent']
      );
    }
    console.log(`✅ Seeded ${proposals.length} proposals from proposals.json`);
  } catch (err) {
    console.error('Seed error:', err.message);
  }
};

// GET all proposals (public, non-draft)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM proposals WHERE status != $1 ORDER BY created_at DESC',
      ['draft']
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// GET single proposal
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM proposals WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Proposal not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

// POST create proposal (admin only)
router.post('/', verifyToken, async (req, res) => {
  const {
    name, icon, description, tags, url_path, client_name, client_location,
    pitch_text, deliverables, investment, launch_price, monthly_fee, whatsapp_link, status
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO proposals (name, icon, description, tags, url_path, client_name,
       client_location, pitch_text, deliverables, investment, launch_price, monthly_fee,
       whatsapp_link, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
      [name, icon, description, tags, url_path, client_name, client_location, pitch_text,
       JSON.stringify(deliverables), JSON.stringify(investment), launch_price, monthly_fee, whatsapp_link, status || 'draft']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create proposal' });
  }
});

// PUT update proposal (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const {
    name, icon, description, tags, url_path, client_name, client_location,
    pitch_text, deliverables, investment, launch_price, monthly_fee, whatsapp_link, status
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE proposals SET name = $1, icon = $2, description = $3, tags = $4, url_path = $5,
       client_name = $6, client_location = $7, pitch_text = $8, deliverables = $9, investment = $10,
       launch_price = $11, monthly_fee = $12, whatsapp_link = $13, status = $14, updated_at = NOW()
       WHERE id = $15 RETURNING *`,
      [name, icon, description, tags, url_path, client_name, client_location, pitch_text,
       JSON.stringify(deliverables), JSON.stringify(investment), launch_price, monthly_fee, whatsapp_link, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Proposal not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update proposal' });
  }
});

// DELETE proposal (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM proposals WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Proposal not found' });
    }
    res.json({ message: 'Proposal deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete proposal' });
  }
});

export default router;
