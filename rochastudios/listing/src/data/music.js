// Copyright-free music — sourced from Pixabay (CC0 license, no attribution required)
// All tracks are royalty-free for commercial and personal use
export const MUSIC_TRACKS = [
  // ── UPBEAT / ENERGETIC ────────────────────────────────────
  {
    id: 1, name: "Corporate Motivate", artist: "Lexin Music",
    category: "Upbeat", duration: "2:30", bpm: 120,
    url: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3",
    tags: ["corporate", "motivational", "upbeat"],
  },
  {
    id: 2, name: "Inspiring Cinematic", artist: "Muzaproduction",
    category: "Upbeat", duration: "2:15", bpm: 100,
    url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b4eded0.mp3",
    tags: ["inspiring", "cinematic", "emotional"],
  },
  {
    id: 3, name: "Upbeat Party", artist: "prazkhanal",
    category: "Upbeat", duration: "1:50", bpm: 130,
    url: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_1bc4ccd5a2.mp3",
    tags: ["party", "fun", "energetic"],
  },
  {
    id: 4, name: "Positive Energy", artist: "TimMoor",
    category: "Upbeat", duration: "2:00", bpm: 115,
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3",
    tags: ["positive", "energy", "cheerful"],
  },
  // ── CALM / AMBIENT ────────────────────────────────────────
  {
    id: 5, name: "Soft Background Music", artist: "Aig_Sound",
    category: "Calm", duration: "3:00", bpm: 72,
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    tags: ["calm", "soft", "background"],
  },
  {
    id: 6, name: "Lo-Fi Chill Beats", artist: "FASSounds",
    category: "Calm", duration: "2:45", bpm: 80,
    url: "https://cdn.pixabay.com/download/audio/2022/05/17/audio_d0ef15a2a0.mp3",
    tags: ["lofi", "chill", "relaxing"],
  },
  {
    id: 7, name: "Ambient Space", artist: "lemonmusicstudio",
    category: "Calm", duration: "3:30", bpm: 60,
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d62cf4abc0.mp3",
    tags: ["ambient", "space", "atmospheric"],
  },
  {
    id: 8, name: "Peaceful Piano", artist: "Menulis",
    category: "Calm", duration: "2:50", bpm: 68,
    url: "https://cdn.pixabay.com/download/audio/2021/11/25/audio_91b32d44df.mp3",
    tags: ["piano", "peaceful", "soft"],
  },
  // ── CORPORATE / PRESENTATION ──────────────────────────────
  {
    id: 9, name: "Business Background", artist: "Lexin Music",
    category: "Corporate", duration: "2:20", bpm: 105,
    url: "https://cdn.pixabay.com/download/audio/2022/08/23/audio_d16737dc28.mp3",
    tags: ["business", "professional", "corporate"],
  },
  {
    id: 10, name: "Tech Innovation", artist: "AudioCoffee",
    category: "Corporate", duration: "2:00", bpm: 110,
    url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_0d6dc36f73.mp3",
    tags: ["tech", "innovation", "modern"],
  },
  {
    id: 11, name: "Success Intro", artist: "Muzaproduction",
    category: "Corporate", duration: "1:30", bpm: 95,
    url: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_67f108eded.mp3",
    tags: ["success", "intro", "presentation"],
  },
  {
    id: 12, name: "Professional Slideshow", artist: "prazkhanal",
    category: "Corporate", duration: "2:10", bpm: 90,
    url: "https://cdn.pixabay.com/download/audio/2022/01/27/audio_d0c6ff1bab.mp3",
    tags: ["slideshow", "professional", "clean"],
  },
  // ── CINEMATIC / DRAMATIC ──────────────────────────────────
  {
    id: 13, name: "Cinematic Epic", artist: "lemonmusicstudio",
    category: "Cinematic", duration: "3:00", bpm: 85,
    url: "https://cdn.pixabay.com/download/audio/2022/07/25/audio_c1e64b8a3f.mp3",
    tags: ["epic", "cinematic", "dramatic"],
  },
  {
    id: 14, name: "Dark Orchestral", artist: "Aig_Sound",
    category: "Cinematic", duration: "2:45", bpm: 78,
    url: "https://cdn.pixabay.com/download/audio/2021/09/09/audio_4b8f15d68c.mp3",
    tags: ["dark", "orchestral", "dramatic"],
  },
  {
    id: 15, name: "Trailer Impact", artist: "AudioCoffee",
    category: "Cinematic", duration: "1:30", bpm: 92,
    url: "https://cdn.pixabay.com/download/audio/2022/06/07/audio_359251fa0e.mp3",
    tags: ["trailer", "impact", "powerful"],
  },
];

export const MUSIC_CATEGORIES = [...new Set(MUSIC_TRACKS.map(t => t.category))];
