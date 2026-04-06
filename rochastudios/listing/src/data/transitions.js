// 30 Slide Transitions
export const TRANSITIONS = [
  // ── FADE ──────────────────────────────────────────────────
  { id: 1,  name: "Fade",           category: "Fade",   css: "transition-fade",       duration: 500 },
  { id: 2,  name: "Fade Slow",      category: "Fade",   css: "transition-fade-slow",  duration: 1200 },
  { id: 3,  name: "Fade Fast",      category: "Fade",   css: "transition-fade-fast",  duration: 200 },
  { id: 4,  name: "Crossfade",      category: "Fade",   css: "transition-crossfade",  duration: 700 },

  // ── SLIDE ─────────────────────────────────────────────────
  { id: 5,  name: "Slide Right",    category: "Slide",  css: "transition-slide-right", duration: 500 },
  { id: 6,  name: "Slide Left",     category: "Slide",  css: "transition-slide-left",  duration: 500 },
  { id: 7,  name: "Slide Up",       category: "Slide",  css: "transition-slide-up",    duration: 500 },
  { id: 8,  name: "Slide Down",     category: "Slide",  css: "transition-slide-down",  duration: 500 },
  { id: 9,  name: "Push Right",     category: "Slide",  css: "transition-push-right",  duration: 600 },
  { id: 10, name: "Push Left",      category: "Slide",  css: "transition-push-left",   duration: 600 },

  // ── ZOOM ──────────────────────────────────────────────────
  { id: 11, name: "Zoom In",        category: "Zoom",   css: "transition-zoom-in",     duration: 500 },
  { id: 12, name: "Zoom Out",       category: "Zoom",   css: "transition-zoom-out",    duration: 500 },
  { id: 13, name: "Zoom Blur",      category: "Zoom",   css: "transition-zoom-blur",   duration: 600 },
  { id: 14, name: "Zoom Bounce",    category: "Zoom",   css: "transition-zoom-bounce", duration: 700 },

  // ── FLIP ──────────────────────────────────────────────────
  { id: 15, name: "Flip X",         category: "Flip",   css: "transition-flip-x",      duration: 600 },
  { id: 16, name: "Flip Y",         category: "Flip",   css: "transition-flip-y",      duration: 600 },
  { id: 17, name: "Card Flip",      category: "Flip",   css: "transition-card-flip",   duration: 800 },

  // ── ROTATE ────────────────────────────────────────────────
  { id: 18, name: "Rotate CW",      category: "Rotate", css: "transition-rotate-cw",   duration: 600 },
  { id: 19, name: "Rotate CCW",     category: "Rotate", css: "transition-rotate-ccw",  duration: 600 },
  { id: 20, name: "Spin Fade",      category: "Rotate", css: "transition-spin-fade",   duration: 700 },

  // ── WIPE ──────────────────────────────────────────────────
  { id: 21, name: "Wipe Right",     category: "Wipe",   css: "transition-wipe-right",  duration: 500 },
  { id: 22, name: "Wipe Left",      category: "Wipe",   css: "transition-wipe-left",   duration: 500 },
  { id: 23, name: "Wipe Up",        category: "Wipe",   css: "transition-wipe-up",     duration: 500 },
  { id: 24, name: "Wipe Down",      category: "Wipe",   css: "transition-wipe-down",   duration: 500 },

  // ── SPECIAL ───────────────────────────────────────────────
  { id: 25, name: "Glitch",         category: "Special", css: "transition-glitch",     duration: 400 },
  { id: 26, name: "Blur",           category: "Special", css: "transition-blur",       duration: 500 },
  { id: 27, name: "Ripple",         category: "Special", css: "transition-ripple",     duration: 700 },
  { id: 28, name: "Morph",          category: "Special", css: "transition-morph",      duration: 800 },
  { id: 29, name: "Bounce",         category: "Special", css: "transition-bounce",     duration: 700 },
  { id: 30, name: "Elastic",        category: "Special", css: "transition-elastic",    duration: 900 },
];

export const TRANSITION_CATEGORIES = [...new Set(TRANSITIONS.map(t => t.category))];
