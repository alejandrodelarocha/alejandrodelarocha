// 40 Slide Templates (16:9 — 960x540)
// Each template defines background, text objects, and shapes for Fabric.js

export const TEMPLATES = [
  // ── MINIMAL ────────────────────────────────────────────────
  {
    id: 1, name: "Clean White", category: "Minimal",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 6, fill: "#3b82f6", selectable: false },
      { type: "textbox", text: "Your Title Here", left: 80, top: 180, width: 800, fontSize: 56, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Subtitle or tagline goes here", left: 80, top: 280, width: 800, fontSize: 24, fill: "#6b7280", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 2, name: "Dark Minimal", category: "Minimal",
    bg: "#0f172a",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 6, fill: "#60a5fa", selectable: false },
      { type: "textbox", text: "Your Title Here", left: 80, top: 180, width: 800, fontSize: 56, fontWeight: "bold", fill: "#f8fafc", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Subtitle or tagline goes here", left: 80, top: 280, width: 800, fontSize: 24, fill: "#94a3b8", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 3, name: "Slate Gray", category: "Minimal",
    bg: "#1e293b",
    objects: [
      { type: "rect", left: 40, top: 220, width: 120, height: 4, fill: "#e2e8f0", selectable: false },
      { type: "textbox", text: "HEADLINE", left: 80, top: 160, width: 800, fontSize: 64, fontWeight: "bold", fill: "#f1f5f9", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Supporting text that describes the topic in detail", left: 80, top: 250, width: 700, fontSize: 22, fill: "#94a3b8", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 4, name: "Pure Black", category: "Minimal",
    bg: "#000000",
    objects: [
      { type: "textbox", text: "BOLD STATEMENT", left: 80, top: 190, width: 800, fontSize: 60, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "rect", left: 380, top: 295, width: 200, height: 3, fill: "#f59e0b", selectable: false },
      { type: "textbox", text: "secondary line of text", left: 80, top: 320, width: 800, fontSize: 20, fill: "#a1a1aa", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  // ── GRADIENT ───────────────────────────────────────────────
  {
    id: 5, name: "Ocean Blue", category: "Gradient",
    bg: "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
    objects: [
      { type: "textbox", text: "Ocean Blue", left: 80, top: 190, width: 800, fontSize: 60, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Gradient presentation theme", left: 80, top: 295, width: 800, fontSize: 24, fill: "#bfdbfe", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 6, name: "Sunset Orange", category: "Gradient",
    bg: "linear-gradient(135deg, #f97316, #dc2626)",
    objects: [
      { type: "textbox", text: "SUNSET", left: 80, top: 190, width: 800, fontSize: 72, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Bold. Warm. Unforgettable.", left: 80, top: 295, width: 800, fontSize: 24, fill: "#fef3c7", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 7, name: "Purple Haze", category: "Gradient",
    bg: "linear-gradient(135deg, #7c3aed, #db2777)",
    objects: [
      { type: "textbox", text: "Purple Haze", left: 80, top: 190, width: 800, fontSize: 64, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Creative. Bold. Striking.", left: 80, top: 295, width: 800, fontSize: 24, fill: "#f3e8ff", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 8, name: "Emerald", category: "Gradient",
    bg: "linear-gradient(135deg, #059669, #0891b2)",
    objects: [
      { type: "textbox", text: "GROWTH", left: 80, top: 190, width: 800, fontSize: 72, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Driven by results & innovation", left: 80, top: 295, width: 800, fontSize: 24, fill: "#d1fae5", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 9, name: "Gold Rush", category: "Gradient",
    bg: "linear-gradient(135deg, #d97706, #b45309)",
    objects: [
      { type: "textbox", text: "PREMIUM", left: 80, top: 190, width: 800, fontSize: 72, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Luxury. Excellence. Quality.", left: 80, top: 295, width: 800, fontSize: 24, fill: "#fef9c3", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 10, name: "Midnight", category: "Gradient",
    bg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    objects: [
      { type: "textbox", text: "MIDNIGHT", left: 80, top: 190, width: 800, fontSize: 68, fontWeight: "bold", fill: "#e0e7ff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Deep. Mysterious. Powerful.", left: 80, top: 295, width: 800, fontSize: 24, fill: "#a5b4fc", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  // ── BUSINESS ───────────────────────────────────────────────
  {
    id: 11, name: "Corporate Blue", category: "Business",
    bg: "#f0f4ff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 320, height: 540, fill: "#1e40af", selectable: false },
      { type: "textbox", text: "COMPANY\nNAME", left: 30, top: 180, width: 260, fontSize: 36, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Quarterly Report 2025", left: 380, top: 160, width: 530, fontSize: 40, fontWeight: "bold", fill: "#1e3a8a", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Strategic overview and performance metrics", left: 380, top: 240, width: 530, fontSize: 20, fill: "#475569", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 12, name: "Executive Dark", category: "Business",
    bg: "#111827",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 540, fill: "#111827", selectable: false },
      { type: "rect", left: 0, top: 440, width: 960, height: 100, fill: "#1d4ed8", selectable: false },
      { type: "textbox", text: "Executive Summary", left: 80, top: 160, width: 800, fontSize: 52, fontWeight: "bold", fill: "#f9fafb", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Q4 Financial Overview · Fiscal Year 2025", left: 80, top: 450, width: 800, fontSize: 20, fill: "#ffffff", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 13, name: "Modern Teal", category: "Business",
    bg: "#f0fdfa",
    objects: [
      { type: "rect", left: 0, top: 0, width: 8, height: 540, fill: "#0d9488", selectable: false },
      { type: "textbox", text: "Annual Report", left: 60, top: 150, width: 840, fontSize: 52, fontWeight: "bold", fill: "#134e4a", fontFamily: "Helvetica", textAlign: "left" },
      { type: "rect", left: 60, top: 230, width: 160, height: 4, fill: "#0d9488", selectable: false },
      { type: "textbox", text: "Presented by the Leadership Team · 2025", left: 60, top: 260, width: 840, fontSize: 20, fill: "#5eead4", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 14, name: "Red Impact", category: "Business",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 100, fill: "#dc2626", selectable: false },
      { type: "textbox", text: "IMPACT REPORT", left: 80, top: 20, width: 800, fontSize: 44, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Key Achievements & Milestones", left: 80, top: 220, width: 800, fontSize: 40, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "A detailed breakdown of our performance in 2025", left: 80, top: 300, width: 800, fontSize: 20, fill: "#6b7280", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 15, name: "Split Layout", category: "Business",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 480, top: 0, width: 480, height: 540, fill: "#1e293b", selectable: false },
      { type: "textbox", text: "OUR\nVISION", left: 40, top: 180, width: 400, fontSize: 52, fontWeight: "bold", fill: "#0f172a", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Transforming the future\none step at a time.", left: 510, top: 200, width: 400, fontSize: 26, fill: "#e2e8f0", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  // ── CREATIVE ───────────────────────────────────────────────
  {
    id: 16, name: "Neon Glow", category: "Creative",
    bg: "#030712",
    objects: [
      { type: "textbox", text: "NEON", left: 80, top: 150, width: 800, fontSize: 100, fontWeight: "bold", fill: "#00f5ff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "FUTURE IS NOW", left: 80, top: 285, width: 800, fontSize: 28, fill: "#ff00ff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "rect", left: 200, top: 340, width: 560, height: 2, fill: "#00f5ff", selectable: false },
    ],
  },
  {
    id: 17, name: "Retro Wave", category: "Creative",
    bg: "#1a0533",
    objects: [
      { type: "rect", left: 0, top: 380, width: 960, height: 160, fill: "#ff0090", selectable: false },
      { type: "textbox", text: "RETRO WAVE", left: 80, top: 160, width: 800, fontSize: 72, fontWeight: "bold", fill: "#ffe600", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Synthwave · Vaporwave · Aesthetic", left: 80, top: 390, width: 800, fontSize: 22, fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 18, name: "Pastel Dream", category: "Creative",
    bg: "#fdf4ff",
    objects: [
      { type: "circle", left: 760, top: -60, radius: 150, fill: "#f0abfc", selectable: false },
      { type: "circle", left: -60, top: 380, radius: 120, fill: "#bae6fd", selectable: false },
      { type: "textbox", text: "Sweet Dreams", left: 80, top: 180, width: 800, fontSize: 60, fontWeight: "bold", fill: "#6b21a8", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Creative · Soft · Dreamy", left: 80, top: 285, width: 800, fontSize: 24, fill: "#a855f7", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 19, name: "Bold Stripes", category: "Creative",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 180, fill: "#111827", selectable: false },
      { type: "rect", left: 0, top: 180, width: 960, height: 180, fill: "#f59e0b", selectable: false },
      { type: "rect", left: 0, top: 360, width: 960, height: 180, fill: "#111827", selectable: false },
      { type: "textbox", text: "BOLD", left: 80, top: 185, width: 800, fontSize: 100, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 20, name: "Geometric", category: "Creative",
    bg: "#0f172a",
    objects: [
      { type: "triangle", left: 700, top: -40, width: 400, height: 400, fill: "#1d4ed8", selectable: false },
      { type: "rect", left: -80, top: 300, width: 300, height: 300, fill: "#7c3aed", angle: 45, selectable: false },
      { type: "textbox", text: "GEOMETRIC", left: 80, top: 190, width: 700, fontSize: 56, fontWeight: "bold", fill: "#f8fafc", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Design. Structure. Form.", left: 80, top: 285, width: 700, fontSize: 22, fill: "#94a3b8", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  // ── TECH ───────────────────────────────────────────────────
  {
    id: 21, name: "Code Dark", category: "Tech",
    bg: "#0d1117",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 540, fill: "#0d1117", selectable: false },
      { type: "textbox", text: "// Hello, World", left: 80, top: 140, width: 800, fontSize: 56, fontWeight: "bold", fill: "#58a6ff", fontFamily: "monospace", textAlign: "left" },
      { type: "textbox", text: "function buildSomethingAmazing() {}", left: 80, top: 240, width: 800, fontSize: 22, fill: "#3fb950", fontFamily: "monospace", textAlign: "left" },
      { type: "textbox", text: "return 'The future starts here';", left: 80, top: 290, width: 800, fontSize: 22, fill: "#e6edf3", fontFamily: "monospace", textAlign: "left" },
    ],
  },
  {
    id: 22, name: "Terminal Green", category: "Tech",
    bg: "#001100",
    objects: [
      { type: "textbox", text: "> INITIALIZING...", left: 80, top: 160, width: 800, fontSize: 40, fontWeight: "bold", fill: "#00ff41", fontFamily: "monospace", textAlign: "left" },
      { type: "textbox", text: "> Loading system modules: [████████] 100%", left: 80, top: 230, width: 800, fontSize: 22, fill: "#00ff41", fontFamily: "monospace", textAlign: "left" },
      { type: "textbox", text: "> Welcome, User.", left: 80, top: 290, width: 800, fontSize: 28, fontWeight: "bold", fill: "#00ff41", fontFamily: "monospace", textAlign: "left" },
    ],
  },
  {
    id: 23, name: "Blueprint", category: "Tech",
    bg: "#172554",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 540, fill: "transparent", stroke: "#1d4ed8", strokeWidth: 1, selectable: false },
      { type: "line", x1: 0, y1: 270, x2: 960, y2: 270, stroke: "#1d4ed8", strokeWidth: 0.5, selectable: false },
      { type: "line", x1: 480, y1: 0, x2: 480, y2: 540, stroke: "#1d4ed8", strokeWidth: 0.5, selectable: false },
      { type: "textbox", text: "BLUEPRINT", left: 80, top: 190, width: 800, fontSize: 68, fontWeight: "bold", fill: "#93c5fd", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 24, name: "AI Future", category: "Tech",
    bg: "#020617",
    objects: [
      { type: "circle", left: 340, top: 90, radius: 180, fill: "transparent", stroke: "#6366f1", strokeWidth: 1, selectable: false },
      { type: "circle", left: 380, top: 130, radius: 140, fill: "transparent", stroke: "#818cf8", strokeWidth: 0.5, selectable: false },
      { type: "textbox", text: "AI POWERED", left: 80, top: 200, width: 800, fontSize: 56, fontWeight: "bold", fill: "#c7d2fe", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Next Generation Technology", left: 80, top: 295, width: 800, fontSize: 22, fill: "#818cf8", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 25, name: "Startup Pitch", category: "Tech",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 10, fill: "#6366f1", selectable: false },
      { type: "textbox", text: "🚀 The Next Big Thing", left: 80, top: 170, width: 800, fontSize: 52, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Pitch Deck · Series A · 2025", left: 80, top: 285, width: 800, fontSize: 22, fill: "#6366f1", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  // ── EDUCATION ──────────────────────────────────────────────
  {
    id: 26, name: "Classroom Blue", category: "Education",
    bg: "#eff6ff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 80, fill: "#2563eb", selectable: false },
      { type: "textbox", text: "Lesson Title", left: 60, top: 15, width: 840, fontSize: 38, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Learning Objectives", left: 60, top: 130, width: 840, fontSize: 32, fontWeight: "bold", fill: "#1e40af", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "• Key objective #1\n• Key objective #2\n• Key objective #3", left: 80, top: 200, width: 800, fontSize: 22, fill: "#374151", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 27, name: "Knowledge Green", category: "Education",
    bg: "#f0fdf4",
    objects: [
      { type: "rect", left: 0, top: 0, width: 8, height: 540, fill: "#16a34a", selectable: false },
      { type: "textbox", text: "Chapter 1", left: 60, top: 120, width: 840, fontSize: 28, fill: "#15803d", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Introduction to\nthe Topic", left: 60, top: 170, width: 840, fontSize: 56, fontWeight: "bold", fill: "#14532d", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 28, name: "Quiz Time", category: "Education",
    bg: "#fefce8",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 120, fill: "#ca8a04", selectable: false },
      { type: "textbox", text: "❓ QUIZ TIME", left: 80, top: 25, width: 800, fontSize: 52, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "What is the correct answer?", left: 80, top: 185, width: 800, fontSize: 36, fontWeight: "bold", fill: "#713f12", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "A) Option one     B) Option two\nC) Option three   D) Option four", left: 80, top: 280, width: 800, fontSize: 24, fill: "#854d0e", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 29, name: "Science Lab", category: "Education",
    bg: "#f8fafc",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 6, fill: "#0891b2", selectable: false },
      { type: "rect", left: 0, top: 534, width: 960, height: 6, fill: "#0891b2", selectable: false },
      { type: "textbox", text: "⚗️ Scientific Method", left: 80, top: 150, width: 800, fontSize: 52, fontWeight: "bold", fill: "#0c4a6e", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Observe · Hypothesize · Experiment · Analyze", left: 80, top: 265, width: 800, fontSize: 22, fill: "#0369a1", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 30, name: "Diploma Gold", category: "Education",
    bg: "#fefdf0",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 540, fill: "transparent", stroke: "#b45309", strokeWidth: 8, selectable: false },
      { type: "textbox", text: "Certificate of Excellence", left: 80, top: 130, width: 800, fontSize: 48, fontWeight: "bold", fill: "#92400e", fontFamily: "Georgia", textAlign: "center" },
      { type: "rect", left: 280, top: 210, width: 400, height: 3, fill: "#d97706", selectable: false },
      { type: "textbox", text: "Presented to", left: 80, top: 240, width: 800, fontSize: 20, fill: "#78350f", fontFamily: "Georgia", textAlign: "center" },
      { type: "textbox", text: "[ Recipient Name ]", left: 80, top: 285, width: 800, fontSize: 36, fontWeight: "bold", fill: "#b45309", fontFamily: "Georgia", textAlign: "center" },
    ],
  },
  // ── SOCIAL / MARKETING ────────────────────────────────────
  {
    id: 31, name: "Instagram Story", category: "Social",
    bg: "linear-gradient(180deg, #ec4899, #f97316)",
    objects: [
      { type: "textbox", text: "NEW POST", left: 80, top: 160, width: 800, fontSize: 68, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Swipe up to learn more ↑", left: 80, top: 310, width: 800, fontSize: 22, fill: "#fff7ed", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 32, name: "Product Launch", category: "Social",
    bg: "#0a0a0a",
    objects: [
      { type: "textbox", text: "COMING SOON", left: 80, top: 150, width: 800, fontSize: 64, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "rect", left: 100, top: 255, width: 760, height: 3, fill: "#f59e0b", selectable: false },
      { type: "textbox", text: "Something big is on its way", left: 80, top: 280, width: 800, fontSize: 24, fill: "#f59e0b", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Brand Name  ·  2025", left: 80, top: 430, width: 800, fontSize: 18, fill: "#6b7280", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 33, name: "Sale Banner", category: "Social",
    bg: "#dc2626",
    objects: [
      { type: "textbox", text: "50% OFF", left: 80, top: 120, width: 800, fontSize: 100, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "LIMITED TIME OFFER", left: 80, top: 290, width: 800, fontSize: 28, fill: "#fef2f2", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Use code: SAVE50 at checkout", left: 80, top: 370, width: 800, fontSize: 20, fill: "#fee2e2", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 34, name: "Event Flyer", category: "Social",
    bg: "linear-gradient(135deg, #1e1b4b, #4c1d95)",
    objects: [
      { type: "textbox", text: "🎉 EVENT NAME", left: 80, top: 130, width: 800, fontSize: 56, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "rect", left: 200, top: 230, width: 560, height: 2, fill: "#a78bfa", selectable: false },
      { type: "textbox", text: "📅 April 20, 2025  ·  📍 City, Venue", left: 80, top: 260, width: 800, fontSize: 22, fill: "#c4b5fd", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "RSVP at yourwebsite.com", left: 80, top: 370, width: 800, fontSize: 20, fill: "#ede9fe", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 35, name: "Quote Card", category: "Social",
    bg: "#1c1917",
    objects: [
      { type: "textbox", text: '"The only way to do\ngreat work is to love\nwhat you do."', left: 80, top: 130, width: 800, fontSize: 38, fill: "#f5f5f4", fontFamily: "Georgia", textAlign: "center", fontStyle: "italic" },
      { type: "rect", left: 380, top: 400, width: 200, height: 2, fill: "#f59e0b", selectable: false },
      { type: "textbox", text: "— Steve Jobs", left: 80, top: 430, width: 800, fontSize: 20, fill: "#f59e0b", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  // ── PORTFOLIO / PERSONAL ───────────────────────────────────
  {
    id: 36, name: "Portfolio Cover", category: "Portfolio",
    bg: "#ffffff",
    objects: [
      { type: "rect", left: 0, top: 0, width: 400, height: 540, fill: "#111827", selectable: false },
      { type: "textbox", text: "MY\nPORTFOLIO", left: 30, top: 160, width: 340, fontSize: 52, fontWeight: "bold", fill: "#f9fafb", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "2025", left: 30, top: 360, width: 340, fontSize: 36, fill: "#60a5fa", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Designer  ·  Developer\nCreative Professional", left: 440, top: 210, width: 480, fontSize: 26, fill: "#374151", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 37, name: "Case Study", category: "Portfolio",
    bg: "#f9fafb",
    objects: [
      { type: "rect", left: 0, top: 0, width: 960, height: 8, fill: "#6366f1", selectable: false },
      { type: "textbox", text: "CASE STUDY", left: 60, top: 80, width: 400, fontSize: 20, fontWeight: "bold", fill: "#6366f1", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Project Title\nGoes Here", left: 60, top: 130, width: 560, fontSize: 52, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Client · Year · Role", left: 60, top: 340, width: 560, fontSize: 20, fill: "#9ca3af", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 38, name: "About Me", category: "Portfolio",
    bg: "#0f172a",
    objects: [
      { type: "circle", left: 60, top: 130, radius: 100, fill: "#334155", selectable: false },
      { type: "textbox", text: "👤", left: 110, top: 190, width: 100, fontSize: 60, fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Your Name", left: 280, top: 150, width: 620, fontSize: 52, fontWeight: "bold", fill: "#f1f5f9", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "Senior Developer · Designer · Creator", left: 280, top: 240, width: 620, fontSize: 22, fill: "#60a5fa", fontFamily: "Helvetica", textAlign: "left" },
      { type: "textbox", text: "youremail@domain.com  ·  yourwebsite.com", left: 280, top: 310, width: 620, fontSize: 18, fill: "#94a3b8", fontFamily: "Helvetica", textAlign: "left" },
    ],
  },
  {
    id: 39, name: "Skills Grid", category: "Portfolio",
    bg: "#ffffff",
    objects: [
      { type: "textbox", text: "SKILLS & EXPERTISE", left: 80, top: 40, width: 800, fontSize: 32, fontWeight: "bold", fill: "#111827", fontFamily: "Helvetica", textAlign: "center" },
      { type: "rect", left: 80, top: 120, width: 200, height: 160, fill: "#eff6ff", stroke: "#bfdbfe", strokeWidth: 2, rx: 8, ry: 8, selectable: false },
      { type: "rect", left: 300, top: 120, width: 200, height: 160, fill: "#f0fdf4", stroke: "#bbf7d0", strokeWidth: 2, rx: 8, ry: 8, selectable: false },
      { type: "rect", left: 520, top: 120, width: 200, height: 160, fill: "#fef9c3", stroke: "#fef08a", strokeWidth: 2, rx: 8, ry: 8, selectable: false },
      { type: "rect", left: 740, top: 120, width: 160, height: 160, fill: "#fdf4ff", stroke: "#e9d5ff", strokeWidth: 2, rx: 8, ry: 8, selectable: false },
      { type: "textbox", text: "Frontend", left: 80, top: 175, width: 200, fontSize: 20, fontWeight: "bold", fill: "#1d4ed8", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Backend", left: 300, top: 175, width: 200, fontSize: 20, fontWeight: "bold", fill: "#15803d", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Design", left: 520, top: 175, width: 200, fontSize: 20, fontWeight: "bold", fill: "#92400e", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Other", left: 740, top: 175, width: 160, fontSize: 20, fontWeight: "bold", fill: "#7e22ce", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
  {
    id: 40, name: "Thank You", category: "Portfolio",
    bg: "linear-gradient(135deg, #1e40af, #7c3aed)",
    objects: [
      { type: "textbox", text: "Thank You!", left: 80, top: 180, width: 800, fontSize: 80, fontWeight: "bold", fill: "#ffffff", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "Questions? Let's connect.", left: 80, top: 320, width: 800, fontSize: 28, fill: "#bfdbfe", fontFamily: "Helvetica", textAlign: "center" },
      { type: "textbox", text: "yourwebsite.com  ·  @yourhandle", left: 80, top: 400, width: 800, fontSize: 20, fill: "#e0e7ff", fontFamily: "Helvetica", textAlign: "center" },
    ],
  },
];

export const TEMPLATE_CATEGORIES = [...new Set(TEMPLATES.map(t => t.category))];
