import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import proposalRoutes from './routes/proposals.js';
import scraperRoutes from './routes/scraper.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

// Serve static images
app.use('/images', express.static(path.join(__dirname, '../images')));

// Routes
app.use('/auth', authRoutes);
app.use('/proposals', proposalRoutes);
app.use('/scraper', scraperRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`✅ Proposals API running on port ${PORT}`);
});
