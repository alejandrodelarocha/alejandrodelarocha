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

app.listen(PORT, async () => {
  console.log(`✅ Proposals API running on port ${PORT}`);
  await seedFromJson();
});
