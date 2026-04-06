import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Music, ExternalLink } from 'lucide-react';
import { MUSIC_TRACKS, MUSIC_CATEGORIES } from '../data/music';

export default function MusicPanel({ onSelect, selectedTrack }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playing, setPlaying] = useState(null);
  const [volume, setVolume] = useState(0.6);
  const audioRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? MUSIC_TRACKS
    : MUSIC_TRACKS.filter(t => t.category === activeCategory);

  const togglePlay = (track) => {
    if (playing?.id === track.id) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = track.url;
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {});
      }
      setPlaying(track);
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Stop on unmount
  useEffect(() => () => audioRef.current?.pause(), []);

  return (
    <div className="flex flex-col h-full">
      <audio ref={audioRef} onEnded={() => setPlaying(null)} />

      {/* Header */}
      <div className="p-2 border-b border-zinc-700">
        <div className="flex items-center gap-1 text-xs text-zinc-500 mb-2">
          <Music size={12} />
          <span>Royalty-free · CC0 via Pixabay</span>
        </div>
        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 size={13} className="text-zinc-400 shrink-0" />
          <input
            type="range" min="0" max="1" step="0.05"
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
            className="flex-1 h-1 accent-blue-500"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-zinc-700">
        {['All', ...MUSIC_CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-green-700 text-white'
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Track list */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {filtered.map(track => {
          const isPlaying = playing?.id === track.id;
          const isSelected = selectedTrack?.id === track.id;
          return (
            <div
              key={track.id}
              className={`rounded p-2 transition-colors ${
                isSelected ? 'bg-green-900/50 border border-green-700' : 'bg-zinc-700 hover:bg-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePlay(track)}
                  className="w-7 h-7 rounded-full bg-zinc-600 hover:bg-blue-600 flex items-center justify-center transition-colors shrink-0"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">{track.name}</p>
                  <p className="text-xs text-zinc-400 truncate">{track.artist}</p>
                </div>
                <div className="flex flex-col items-end gap-0.5 shrink-0">
                  <span className="text-xs text-zinc-500">{track.duration}</span>
                  <span className="text-xs text-zinc-600">{track.bpm} bpm</span>
                </div>
              </div>

              {/* Use button */}
              <div className="flex gap-1 mt-1.5">
                <button
                  onClick={() => onSelect(track)}
                  className={`flex-1 text-xs py-1 rounded font-medium transition-colors ${
                    isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-zinc-600 hover:bg-green-700 text-zinc-200'
                  }`}
                >
                  {isSelected ? '✓ Selected' : 'Use Track'}
                </button>
                <a
                  href={track.url}
                  download
                  className="flex items-center px-2 py-1 rounded bg-zinc-600 hover:bg-zinc-500 text-zinc-300 transition-colors"
                  title="Download"
                >
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-1">
                {track.tags.map(tag => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-500 px-1.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
