import { useState, useRef } from 'react';
import {
  Type, Square, Circle, Triangle, Minus, ArrowRight,
  Star, Image, Upload, Smile,
} from 'lucide-react';

const TEXT_PRESETS = [
  { label: 'Title', fontSize: 60, bold: true },
  { label: 'Subtitle', fontSize: 36, bold: false },
  { label: 'Body', fontSize: 22, bold: false },
  { label: 'Caption', fontSize: 16, bold: false },
  { label: 'Bold Quote', fontSize: 42, bold: true, italic: true },
  { label: 'Label', fontSize: 14, bold: true },
];

const SHAPE_LIST = [
  { type: 'rect',     label: 'Rectangle', icon: Square },
  { type: 'circle',  label: 'Circle',    icon: Circle },
  { type: 'triangle',label: 'Triangle',  icon: Triangle },
  { type: 'line',    label: 'Line',      icon: Minus },
  { type: 'arrow',   label: 'Arrow',     icon: ArrowRight },
  { type: 'star',    label: 'Star',      icon: Star },
];

const COLOR_PRESETS = [
  '#3b82f6','#ef4444','#22c55e','#f59e0b','#8b5cf6',
  '#ec4899','#14b8a6','#f97316','#ffffff','#000000',
];

export default function ElementsPanel({ onAddText, onAddShape, onAddImage }) {
  const [tab, setTab] = useState('text');
  const [color, setColor] = useState('#3b82f6');
  const fileRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onAddImage(url);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex border-b border-zinc-700">
        {[
          { id: 'text',   label: 'Text',   icon: Type },
          { id: 'shapes', label: 'Shapes', icon: Square },
          { id: 'media',  label: 'Media',  icon: Image },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-medium transition-colors ${
              tab === id
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Icon size={13} /> {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {/* TEXT TAB */}
        {tab === 'text' && (
          <div className="flex flex-col gap-2">
            <p className="text-xs text-zinc-500 mb-1">Click to add text</p>
            {TEXT_PRESETS.map(preset => (
              <button
                key={preset.label}
                onClick={() => onAddText({ text: preset.label, ...preset })}
                className="w-full text-left px-3 py-2 rounded bg-zinc-700 hover:bg-zinc-600 text-white transition-colors"
                style={{ fontSize: Math.min(preset.fontSize * 0.3, 18), fontWeight: preset.bold ? 'bold' : 'normal' }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        )}

        {/* SHAPES TAB */}
        {tab === 'shapes' && (
          <div className="flex flex-col gap-3">
            {/* Color picker */}
            <div>
              <p className="text-xs text-zinc-500 mb-1">Color</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {COLOR_PRESETS.map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      color === c ? 'border-white' : 'border-zinc-600'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <input
                type="color"
                value={color}
                onChange={e => setColor(e.target.value)}
                className="w-full h-7 rounded cursor-pointer bg-zinc-700 border-0"
              />
            </div>

            {/* Shape buttons */}
            <div className="grid grid-cols-2 gap-2">
              {SHAPE_LIST.map(({ type, label, icon: Icon }) => (
                <button
                  key={type}
                  onClick={() => onAddShape(type, { fill: color })}
                  className="flex flex-col items-center gap-1 py-3 rounded bg-zinc-700 hover:bg-zinc-600 text-zinc-200 transition-colors"
                >
                  <Icon size={18} />
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MEDIA TAB */}
        {tab === 'media' && (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => fileRef.current?.click()}
              className="flex flex-col items-center gap-2 py-6 rounded border-2 border-dashed border-zinc-600 hover:border-blue-500 text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Upload size={24} />
              <span className="text-xs">Upload Image / Logo</span>
              <span className="text-xs text-zinc-600">PNG, JPG, SVG, WEBP</span>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Emoji/icon picker shortcut */}
            <div>
              <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1"><Smile size={12} /> Quick Icons</p>
              <div className="flex flex-wrap gap-2">
                {['🚀','💡','⭐','🔥','✅','❌','📊','🎯','💼','🌍','🎨','🏆','📱','💻','🤝','📈'].map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => onAddText({ text: emoji, fontSize: 60 })}
                    className="text-2xl hover:scale-125 transition-transform"
                    title={`Add ${emoji}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
