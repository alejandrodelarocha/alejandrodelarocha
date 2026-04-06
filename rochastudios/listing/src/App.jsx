import { useState, useRef, useCallback, useEffect } from 'react';
import { Layers, Layout, Sliders, Music, PanelLeftClose, PanelLeft } from 'lucide-react';

import Toolbar from './components/Toolbar';
import TemplatePanel from './components/TemplatePanel';
import TransitionPanel from './components/TransitionPanel';
import ElementsPanel from './components/ElementsPanel';
import MusicPanel from './components/MusicPanel';
import SlidePanel from './components/SlidePanel';
import { useCanvas } from './hooks/useCanvas';

const CANVAS_W = 960;
const CANVAS_H = 540;

const LEFT_PANELS = [
  { id: 'templates',   label: 'Templates',   icon: Layout },
  { id: 'elements',    label: 'Elements',    icon: Layers },
  { id: 'transitions', label: 'Transitions', icon: Sliders },
  { id: 'music',       label: 'Music',       icon: Music },
];

function makeSlide(id = Date.now()) {
  return { id, bg: '#1e293b', title: '', json: null, transition: null };
}

export default function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const {
    fabricRef, activeObject,
    loadTemplate, addText, addShape, addImage,
    deleteSelected, exportPNG, getJSON, loadJSON, zoom, setZoom,
  } = useCanvas(canvasRef.current);

  const [leftPanel, setLeftPanel] = useState('templates');
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [slides, setSlides] = useState([makeSlide(1)]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTransition, setSelectedTransition] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [presenting, setPresenting] = useState(false);
  const [presentSlide, setPresentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Canvas scale to fit container
  const [scale, setScale] = useState(1);

  // Wire up canvas element once it mounts
  const [canvasEl, setCanvasEl] = useState(null);
  const setCanvasRef = useCallback((el) => {
    canvasRef.current = el;
    setCanvasEl(el);
  }, []);

  const {
    fabricRef: fc,
    activeObject: activeObj,
    loadTemplate: lt,
    addText: at,
    addShape: as_,
    addImage: ai,
    deleteSelected: del,
    exportPNG: exp,
    getJSON: gj,
    loadJSON: lj,
  } = useCanvas(canvasEl);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const padding = 48;
      const s = Math.min((width - padding) / CANVAS_W, (height - padding) / CANVAS_H);
      setScale(Math.max(0.2, Math.min(s, 1)));
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [leftCollapsed]);

  const saveCurrentSlide = useCallback(() => {
    const json = gj();
    if (!json) return;
    setSlides(prev => prev.map((s, i) =>
      i === currentSlide ? { ...s, json } : s
    ));
  }, [currentSlide, gj]);

  const switchToSlide = useCallback((idx, slidesArr) => {
    saveCurrentSlide();
    setCurrentSlide(idx);
    const slide = (slidesArr || slides)[idx];
    if (slide?.json) {
      lj(slide.json);
    } else if (fc.current) {
      fc.current.clear();
      fc.current.setBackgroundColor(slide?.bg || '#1e293b', fc.current.renderAll.bind(fc.current));
    }
  }, [saveCurrentSlide, slides, lj, fc]);

  const handleTemplateSelect = (template) => {
    lt(template);
    setSlides(prev => prev.map((s, i) =>
      i === currentSlide ? { ...s, bg: template.bg, title: template.name } : s
    ));
  };

  const handleAddSlide = () => {
    saveCurrentSlide();
    const newSlide = makeSlide();
    const newIdx = slides.length;
    setSlides(prev => [...prev, newSlide]);
    setCurrentSlide(newIdx);
    if (fc.current) {
      fc.current.clear();
      fc.current.setBackgroundColor('#1e293b', fc.current.renderAll.bind(fc.current));
    }
  };

  const handleDeleteSlide = (idx) => {
    const next = slides.filter((_, i) => i !== idx);
    setSlides(next);
    const newCurrent = Math.max(0, idx - 1);
    setCurrentSlide(newCurrent);
    const slide = next[newCurrent];
    if (slide?.json) lj(slide.json);
    else if (fc.current) {
      fc.current.clear();
      fc.current.setBackgroundColor(slide?.bg || '#1e293b', fc.current.renderAll.bind(fc.current));
    }
  };

  const handleDuplicateSlide = (idx) => {
    saveCurrentSlide();
    const clone = { ...slides[idx], id: Date.now() };
    setSlides(prev => {
      const next = [...prev];
      next.splice(idx + 1, 0, clone);
      return next;
    });
  };

  const handleTransitionSelect = (tr) => {
    setSelectedTransition(tr);
    setSlides(prev => prev.map((s, i) =>
      i === currentSlide ? { ...s, transition: tr } : s
    ));
  };

  const startPresent = () => {
    saveCurrentSlide();
    setPresentSlide(0);
    setPresenting(true);
  };

  const nextPresentSlide = () => {
    if (presentSlide < slides.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setPresentSlide(p => p + 1);
        setTransitioning(false);
      }, slides[presentSlide]?.transition?.duration || 500);
    }
  };

  const prevPresentSlide = () => {
    if (presentSlide > 0) setPresentSlide(p => p - 1);
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Toolbar */}
      <Toolbar
        onDelete={del}
        onExport={exp}
        onPresent={startPresent}
        zoom={1}
        onZoomIn={() => {}}
        onZoomOut={() => {}}
        activeObject={activeObj}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — icon strip */}
        <div className="flex flex-col items-center py-2 gap-1 bg-zinc-900 border-r border-zinc-700 w-12 shrink-0">
          {LEFT_PANELS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                if (leftPanel === id && !leftCollapsed) setLeftCollapsed(true);
                else { setLeftPanel(id); setLeftCollapsed(false); }
              }}
              title={label}
              className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
                leftPanel === id && !leftCollapsed
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              <Icon size={17} />
            </button>
          ))}
          <div className="flex-1" />
          <button
            onClick={() => setLeftCollapsed(c => !c)}
            className="w-9 h-9 rounded flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-700 transition-colors"
            title={leftCollapsed ? 'Expand panel' : 'Collapse panel'}
          >
            {leftCollapsed ? <PanelLeft size={15} /> : <PanelLeftClose size={15} />}
          </button>
        </div>

        {/* Left panel content */}
        {!leftCollapsed && (
          <div className="w-56 shrink-0 border-r border-zinc-700 bg-zinc-900 flex flex-col overflow-hidden">
            <div className="px-3 py-2 border-b border-zinc-700">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                {LEFT_PANELS.find(p => p.id === leftPanel)?.label}
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              {leftPanel === 'templates' && <TemplatePanel onSelect={handleTemplateSelect} />}
              {leftPanel === 'elements' && (
                <ElementsPanel onAddText={at} onAddShape={as_} onAddImage={ai} />
              )}
              {leftPanel === 'transitions' && (
                <TransitionPanel selected={selectedTransition} onSelect={handleTransitionSelect} />
              )}
              {leftPanel === 'music' && (
                <MusicPanel selectedTrack={selectedMusic} onSelect={setSelectedMusic} />
              )}
            </div>
          </div>
        )}

        {/* Canvas area */}
        <div
          ref={containerRef}
          className="flex-1 flex items-center justify-center bg-zinc-950 overflow-hidden"
        >
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
            <canvas ref={setCanvasRef} />
          </div>
        </div>

        {/* Right — Slide panel */}
        <div className="w-40 shrink-0 border-l border-zinc-700 overflow-hidden">
          <SlidePanel
            slides={slides}
            currentIndex={currentSlide}
            onSelect={(idx) => switchToSlide(idx)}
            onAdd={handleAddSlide}
            onDelete={handleDeleteSlide}
            onDuplicate={handleDuplicateSlide}
          />
        </div>
      </div>

      {/* Presentation overlay */}
      {presenting && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={nextPresentSlide}
          onKeyDown={e => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextPresentSlide();
            if (e.key === 'ArrowLeft') prevPresentSlide();
            if (e.key === 'Escape') setPresenting(false);
          }}
          tabIndex={0}
          style={{ outline: 'none' }}
          ref={el => el?.focus()}
        >
          <div
            className="w-full max-w-6xl aspect-video rounded shadow-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: slides[presentSlide]?.bg?.startsWith('linear-gradient')
                ? slides[presentSlide].bg
                : slides[presentSlide]?.bg || '#1e293b',
              opacity: transitioning ? 0 : 1,
              transition: `opacity ${slides[presentSlide]?.transition?.duration || 500}ms ease`,
            }}
          >
            <span className="text-white text-3xl font-bold">
              {slides[presentSlide]?.title || `Slide ${presentSlide + 1}`}
            </span>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === presentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="absolute top-6 right-8 text-white/50 text-sm">
            {presentSlide + 1} / {slides.length}
          </div>
          <div className="absolute bottom-8 right-8 flex gap-3 text-white/60 text-sm">
            <span>← → Navigate</span>
            <span>ESC Exit</span>
            <button
              onClick={e => { e.stopPropagation(); setPresenting(false); }}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
            >
              Exit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
