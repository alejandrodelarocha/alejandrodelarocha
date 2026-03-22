import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import proposalRoutes, { seedFromJson } from './routes/proposals.js';
import scraperRoutes from './routes/scraper.js';
import generatorRoutes from './routes/generator.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

// Serve static files
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/landing-pages', express.static(path.join(__dirname, '../landing-pages')));

// Routes
app.use('/auth', authRoutes);
app.use('/proposals', proposalRoutes);
app.use('/scraper', scraperRoutes);
app.use('/generator', generatorRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const waitForDb = async (retries = 10, delay = 2000) => {
  const { default: pool } = await import('./db/pool.js');
  for (let i = 0; i < retries; i++) {
    try {
      await pool.query('SELECT 1');
      return true;
    } catch (err) {
      console.log(`⏳ Waiting for database... (${i + 1}/${retries})`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw new Error('Database not available after retries');
};

app.listen(PORT, async () => {
  console.log(`✅ Proposals API running on port ${PORT}`);
  try {
    await waitForDb();
    await seedFromJson();
  } catch (err) {
    console.error('❌ Startup error:', err.message);
  }
});
