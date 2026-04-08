import { useState, useRef, useCallback } from 'react';
import { Mic, Play, Pause, Trash2, Download, Loader, Volume2, Settings } from 'lucide-react';

const TTS_BASE = 'http://3.18.164.48:5050';

const VOICES = [
  { value: 'male',   label: 'Male',   emoji: '👨' },
  { value: 'female', label: 'Female', emoji: '👩' },
];

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French'  },
  { code: 'de', label: 'German'  },
  { code: 'pt', label: 'Portuguese' },
  { code: 'it', label: 'Italian' },
  { code: 'zh', label: 'Chinese' },
  { code: 'ja', label: 'Japanese' },
];

export default function VoiceoverPanel({ onVoiceoverReady, currentSlideVoiceover }) {
  const [text,     setText]     = useState('');
  const [voice,    setVoice]    = useState('female');
  const [lang,     setLang]     = useState('en');
  const [volume,   setVolume]   = useState(1.0);

  const [generating, setGenerating] = useState(false);
  const [error,      setError]      = useState('');
  const [audioUrl,   setAudioUrl]   = useState(currentSlideVoiceover?.url || null);
  const [duration,   setDuration]   = useState(null);
  const [playing,    setPlaying]    = useState(false);

  const audioRef = useRef(null);

  const generate = useCallback(async () => {
    if (!text.trim()) { setError('Enter some text first.'); return; }
    setError('');
    setGenerating(true);

    try {
      const params = new URLSearchParams({ txt: text, voice, lang });
      const res = await fetch(`${TTS_BASE}/ts?${params}`);

      if (!res.ok) throw new Error(`TTS error ${res.status}: ${await res.text()}`);

      const blob = await res.blob();
      if (audioUrl) URL.revokeObjectURL(audioUrl);

      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setDuration(null);

      // Get duration once loaded
      const tmp = new Audio(url);
      tmp.addEventListener('loadedmetadata', () => setDuration(tmp.duration));

      onVoiceoverReady?.({ url, blob, text, voice });
    } catch (e) {
      setError(e.message);
    } finally {
      setGenerating(false);
    }
  }, [text, voice, lang, audioUrl, onVoiceoverReady]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.volume = volume; a.play(); setPlaying(true); }
  };

  const remove = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setDuration(null);
    setPlaying(false);
    onVoiceoverReady?.(null);
  };

  const download = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = 'voiceover.mp3';
    a.click();
  };

  return (
    <div className="flex flex-col h-full">
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setPlaying(false)}
        />
      )}

      {/* Status bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-zinc-700">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        <span className="text-xs text-green-400 font-medium">TTS Engine · Online</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">

        {/* Voice selector */}
        <div>
          <label className="text-xs text-zinc-500 block mb-1">Voice</label>
          <div className="grid grid-cols-2 gap-2">
            {VOICES.map(v => (
              <button
                key={v.value}
                onClick={() => setVoice(v.value)}
                className={`flex items-center justify-center gap-1.5 py-2 rounded text-sm font-medium transition-colors ${
                  voice === v.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                }`}
              >
                {v.emoji} {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="text-xs text-zinc-500 block mb-1">Language</label>
          <div className="flex flex-wrap gap-1">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-0.5 text-xs rounded transition-colors ${
                  lang === l.code
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Script */}
        <div>
          <label className="text-xs text-zinc-500 block mb-1">
            Script
            {text.length > 0 && (
              <span className="ml-1 text-zinc-600">({text.length} chars)</span>
            )}
          </label>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type the voiceover for this slide…"
            rows={6}
            className="w-full text-xs bg-zinc-800 border border-zinc-600 rounded px-2 py-1.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="text-xs text-red-400 bg-red-900/20 border border-red-800 rounded px-2 py-1.5">
            {error}
          </div>
        )}

        {/* Generate */}
        <button
          onClick={generate}
          disabled={generating || !text.trim()}
          className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-sm rounded font-medium transition-colors"
        >
          {generating
            ? <><Loader size={14} className="animate-spin" /> Generating…</>
            : <><Mic size={14} /> Generate Voiceover</>}
        </button>

        {/* Player */}
        {audioUrl && (
          <div className="bg-zinc-800 rounded p-2.5 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <Volume2 size={12} /> Ready
              </span>
              {duration && <span>{duration.toFixed(1)}s</span>}
            </div>

            {/* Waveform */}
            <div className="h-7 bg-zinc-900 rounded overflow-hidden flex items-center px-1 gap-px">
              {Array.from({ length: 52 }, (_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-colors ${playing ? 'bg-blue-500' : 'bg-zinc-600'}`}
                  style={{ height: `${22 + Math.sin(i * 0.8) * 16 + Math.cos(i * 1.5) * 10}%` }}
                />
              ))}
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Volume2 size={11} className="text-zinc-500 shrink-0" />
              <input
                type="range" min="0" max="1" step="0.05"
                value={volume}
                onChange={e => {
                  const v = parseFloat(e.target.value);
                  setVolume(v);
                  if (audioRef.current) audioRef.current.volume = v;
                }}
                className="flex-1 h-1 accent-blue-500"
              />
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <button
                onClick={togglePlay}
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded transition-colors"
              >
                {playing ? <><Pause size={13} /> Pause</> : <><Play size={13} /> Play</>}
              </button>
              <button onClick={download} className="w-8 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded transition-colors" title="Download">
                <Download size={13} />
              </button>
              <button onClick={remove} className="w-8 flex items-center justify-center bg-zinc-700 hover:bg-red-700 text-zinc-300 rounded transition-colors" title="Remove">
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
