import { Trash2, Download, Undo2, Redo2, Copy, AlignCenter, Play, ZoomIn, ZoomOut } from 'lucide-react';

export default function Toolbar({ onDelete, onExport, onPresent, zoom, onZoomIn, onZoomOut, activeObject }) {
  return (
    <div className="flex items-center gap-1 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
      {/* Logo */}
      <span className="text-white font-bold text-sm mr-3">
        <span className="text-blue-400">Rocha</span>Studios
      </span>

      <div className="w-px h-5 bg-zinc-600 mx-1" />

      {/* Zoom */}
      <button onClick={onZoomOut} className="toolbar-btn" title="Zoom Out"><ZoomOut size={15} /></button>
      <span className="text-xs text-zinc-400 w-10 text-center">{Math.round(zoom * 100)}%</span>
      <button onClick={onZoomIn} className="toolbar-btn" title="Zoom In"><ZoomIn size={15} /></button>

      <div className="w-px h-5 bg-zinc-600 mx-1" />

      {/* Object actions — only visible when something is selected */}
      {activeObject && (
        <>
          <button className="toolbar-btn" title="Duplicate"><Copy size={15} /></button>
          <button className="toolbar-btn" title="Center"><AlignCenter size={15} /></button>
          <button onClick={onDelete} className="toolbar-btn text-red-400 hover:bg-red-900/30" title="Delete">
            <Trash2 size={15} />
          </button>
          <div className="w-px h-5 bg-zinc-600 mx-1" />
        </>
      )}

      <div className="flex-1" />

      {/* Presentation */}
      <button
        onClick={onPresent}
        className="flex items-center gap-1.5 text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded transition-colors font-medium"
      >
        <Play size={13} /> Present
      </button>

      <button
        onClick={onExport}
        className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded transition-colors font-medium"
      >
        <Download size={13} /> Export PNG
      </button>
    </div>
  );
}
