import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '../../..', 'images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const downloadImage = async (imageUrl, filename) => {
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const filepath = path.join(IMAGES_DIR, filename);

    // Optimize image with sharp
    await sharp(response.data)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(filepath.replace(/\.\w+$/, '.webp'));

    return filename.replace(/\.\w+$/, '.webp');
  } catch (error) {
    console.error(`Failed to download image ${imageUrl}:`, error.message);
    return null;
  }
};

const extractMetadata = ($) => {
  // Try to extract title
  let title =
    $('h1').first().text() ||
    $('meta[property="og:title"]').attr('content') ||
    $('meta[name="twitter:title"]').attr('content') ||
    $('title').text() ||
    '';

  // Try to extract description
  let description =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name="description"]').attr('content') ||
    $('meta[name="twitter:description"]').attr('content') ||
    $('p').first().text() ||
    '';

  // Clean up strings
  title = title.trim().substring(0, 255);
  description = description.trim().substring(0, 500);

  return { title, description };
};

const extractImages = ($) => {
  const images = [];

  // Get images from meta tags (og:image, twitter:image)
  const ogImage = $('meta[property="og:image"]').attr('content');
  const twitterImage = $('meta[name="twitter:image"]').attr('content');

  if (ogImage) images.push(ogImage);
  if (twitterImage && twitterImage !== ogImage) images.push(twitterImage);

  // Get images from img tags (limit to 10 to avoid too many downloads)
  $('img').each((i, elem) => {
    if (images.length >= 10) return;
    const src = $(elem).attr('src');
    const alt = $(elem).attr('alt');

    // Skip tiny images and common UI elements
    const width = parseInt($(elem).attr('width')) || 0;
    const height = parseInt($(elem).attr('height')) || 0;

    if (src && width > 100 && height > 100 && !alt?.toLowerCase().includes('logo')) {
      images.push(src);
    }
  });

  return images.filter((img, idx, arr) => arr.indexOf(img) === idx); // Deduplicate
};

const resolveUrl = (baseUrl, relativeUrl) => {
  if (!relativeUrl) return '';
  if (relativeUrl.startsWith('http')) return relativeUrl;
  if (relativeUrl.startsWith('//')) return 'https:' + relativeUrl;
  if (relativeUrl.startsWith('/')) return new URL(relativeUrl, baseUrl).href;
  return new URL(relativeUrl, baseUrl).href;
};

router.post('/scrape', async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Validate URL
    let normalizedUrl = url;
    if (!normalizedUrl.startsWith('http')) {
      normalizedUrl = 'https://' + normalizedUrl;
    }

    const response = await axios.get(normalizedUrl, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const { title, description } = extractMetadata($);
    let imageUrls = extractImages($);

    // Download images
    const downloadedImages = [];
    for (let i = 0; i < imageUrls.length; i++) {
      const absoluteUrl = resolveUrl(normalizedUrl, imageUrls[i]);
      const filename = `scraped_${Date.now()}_${i}.jpg`;
      const downloaded = await downloadImage(absoluteUrl, filename);
      if (downloaded) {
        downloadedImages.push(`/api/images/${downloaded}`);
      }
    }

    res.json({
      success: true,
      data: {
        title: title || 'Untitled Project',
        description: description || 'No description available',
        images: downloadedImages,
        url: normalizedUrl
      }
    });
  } catch (error) {
    console.error('Scraper error:', error);
    res.status(500).json({
      error: 'Failed to scrape website',
      message: error.message
    });
  }
});

export default router;
