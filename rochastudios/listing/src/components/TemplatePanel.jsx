import { useState } from 'react';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '../data/templates';

export default function TemplatePanel({ onSelect }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col h-full">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-zinc-700">
        {['All', ...TEMPLATE_CATEGORIES].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <div className="flex-1 overflow-y-auto p-2 grid grid-cols-2 gap-2">
        {filtered.map(template => (
          <button
            key={template.id}
            onClick={() => onSelect(template)}
            className="group relative aspect-video rounded overflow-hidden border-2 border-zinc-700 hover:border-blue-500 transition-all"
            title={template.name}
          >
            <TemplateThumbnail template={template} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-xs font-bold bg-blue-600 px-2 py-1 rounded">Use</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-1 py-0.5 truncate">
              {template.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TemplateThumbnail({ template }) {
  const bg = template.bg;
  let style = {};
  if (bg.startsWith('linear-gradient')) {
    style = { background: bg };
  } else {
    style = { backgroundColor: bg };
  }

  // Pick the first title-like text object
  const titleObj = template.objects.find(o => o.type === 'textbox');

  return (
    <div className="w-full h-full flex items-center justify-center" style={style}>
      {titleObj && (
        <span
          className="text-center px-1 leading-tight"
          style={{
            fontSize: `${Math.max(6, titleObj.fontSize * 0.09)}px`,
            color: titleObj.fill,
            fontWeight: titleObj.fontWeight || 'normal',
            fontFamily: titleObj.fontFamily || 'Helvetica',
            maxWidth: '90%',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {titleObj.text}
        </span>
      )}
    </div>
  );
}
