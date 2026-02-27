import express from 'express';
import { Mistral } from '@mistralai/mistralai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LANDING_PAGES_DIR = path.join(__dirname, '../../landing-pages');

// Ensure landing pages directory exists
if (!fs.existsSync(LANDING_PAGES_DIR)) {
  fs.mkdirSync(LANDING_PAGES_DIR, { recursive: true });
}

const generateLandingPage = async (proposalData) => {
  const client = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY,
  });

  const prompt = `You are an expert web designer and developer. Create a beautiful, modern, single-page HTML landing page based on the following project information.

Project Name: ${proposalData.name}
Description: ${proposalData.description}
Details: ${proposalData.pitch_text}
Images: ${proposalData.images ? proposalData.images.length + ' images provided' : 'No images'}

Requirements:
1. Create a complete, standalone HTML file (with embedded CSS and JavaScript)
2. Include modern animations and transitions
3. Use a professional color scheme
4. Include sections for: Hero, Features/Overview, Gallery (if images provided), Call-to-action
5. Make it fully responsive (mobile-friendly)
6. Use smooth scrolling and fade-in animations
7. Include a modern navigation bar
8. Add a footer with contact information

Generate ONLY the HTML code, nothing else. The HTML should be production-ready and self-contained.`;

  try {
    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      maxTokens: 4000,
    });

    const htmlContent = response.choices[0].message.content;
    return htmlContent;
  } catch (error) {
    console.error('Mistral API error:', error);
    throw new Error(`Failed to generate landing page: ${error.message}`);
  }
};

router.post('/generate-landing-page', async (req, res) => {
  try {
    const { proposalId, proposalData } = req.body;

    if (!proposalData || !proposalData.name) {
      return res.status(400).json({
        error: 'Missing proposal data',
      });
    }

    // Generate HTML content
    const htmlContent = await generateLandingPage(proposalData);

    // Save to file
    const filename = `landing-${proposalId || Date.now()}.html`;
    const filepath = path.join(LANDING_PAGES_DIR, filename);

    fs.writeFileSync(filepath, htmlContent, 'utf8');

    res.json({
      success: true,
      filename: filename,
      url: `/api/landing-pages/${filename}`,
      preview: htmlContent.substring(0, 500) + '...',
    });
  } catch (error) {
    console.error('Generator error:', error);
    res.status(500).json({
      error: 'Failed to generate landing page',
      message: error.message,
    });
  }
});

export default router;
