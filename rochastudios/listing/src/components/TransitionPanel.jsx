import { useState } from 'react';
import { TRANSITIONS, TRANSITION_CATEGORIES } from '../data/transitions';

export default function TransitionPanel({ selected, onSelect }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? TRANSITIONS
    : TRANSITIONS.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col h-full">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-zinc-700">
        {['All', ...TRANSITION_CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Transition list */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {filtered.map(tr => (
          <button
            key={tr.id}
            onClick={() => onSelect(tr)}
            className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${
              selected?.id === tr.id
                ? 'bg-purple-600 text-white'
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <TransitionIcon category={tr.category} />
              <span>{tr.name}</span>
            </div>
            <span className="text-xs opacity-60">{tr.duration}ms</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TransitionIcon({ category }) {
  const icons = {
    Fade: '◌',
    Slide: '→',
    Zoom: '⊕',
    Flip: '↕',
    Rotate: '↻',
    Wipe: '▶',
    Special: '✦',
  };
  return <span className="text-base">{icons[category] || '•'}</span>;
}
