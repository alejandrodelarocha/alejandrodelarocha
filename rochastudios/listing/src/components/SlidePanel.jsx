import { Plus, Trash2, Copy } from 'lucide-react';

export default function SlidePanel({ slides, currentIndex, onSelect, onAdd, onDelete, onDuplicate }) {
  return (
    <div className="flex flex-col h-full bg-zinc-900">
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
        <span className="text-xs text-zinc-400 font-medium">{slides.length} Slide{slides.length !== 1 ? 's' : ''}</span>
        <button
          onClick={onAdd}
          className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded transition-colors"
        >
          <Plus size={12} /> Add
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`group relative cursor-pointer rounded border-2 transition-all ${
              idx === currentIndex
                ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                : 'border-zinc-700 hover:border-zinc-500'
            }`}
            onClick={() => onSelect(idx)}
          >
            {/* Thumbnail */}
            <div
              className="aspect-video rounded overflow-hidden flex items-center justify-center"
              style={{ background: slide.bg || '#1e293b' }}
            >
              <span className="text-zinc-400 text-xs">{slide.title || `Slide ${idx + 1}`}</span>
            </div>

            {/* Slide number */}
            <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
              {idx + 1}
            </div>

            {/* Actions */}
            <div className="absolute top-1 right-1 hidden group-hover:flex gap-1">
              <button
                onClick={e => { e.stopPropagation(); onDuplicate(idx); }}
                className="w-5 h-5 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded flex items-center justify-center"
                title="Duplicate"
              >
                <Copy size={10} />
              </button>
              {slides.length > 1 && (
                <button
                  onClick={e => { e.stopPropagation(); onDelete(idx); }}
                  className="w-5 h-5 bg-red-700 hover:bg-red-600 text-white rounded flex items-center justify-center"
                  title="Delete"
                >
                  <Trash2 size={10} />
                </button>
              )}
            </div>

            {/* Transition badge */}
            {slide.transition && (
              <div className="absolute bottom-1 right-1 bg-purple-700/80 text-white text-xs px-1 py-0.5 rounded">
                {slide.transition.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
