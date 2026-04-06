import { useEffect, useRef, useState, useCallback } from 'react';
import { fabric } from 'fabric';

const CANVAS_W = 960;
const CANVAS_H = 540;

export function useCanvas(canvasEl) {
  const fabricRef = useRef(null);
  const [activeObject, setActiveObject] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!canvasEl) return;
    const fc = new fabric.Canvas(canvasEl, {
      width: CANVAS_W,
      height: CANVAS_H,
      backgroundColor: '#ffffff',
      preserveObjectStacking: true,
    });
    fabricRef.current = fc;

    fc.on('selection:created', (e) => setActiveObject(e.selected?.[0] ?? null));
    fc.on('selection:updated', (e) => setActiveObject(e.selected?.[0] ?? null));
    fc.on('selection:cleared', () => setActiveObject(null));

    return () => { fc.dispose(); fabricRef.current = null; };
  }, [canvasEl]);

  // Load a template onto the canvas
  const loadTemplate = useCallback((template) => {
    const fc = fabricRef.current;
    if (!fc) return;
    fc.clear();

    // Background
    const bg = template.bg;
    if (bg.startsWith('linear-gradient')) {
      // Parse simple linear-gradient to Fabric gradient
      const colors = bg.match(/#[0-9a-fA-F]{3,6}/g) || ['#3b82f6', '#1d4ed8'];
      const angle = (bg.match(/(\d+)deg/) || [null, '135'])[1];
      const rad = (parseInt(angle) * Math.PI) / 180;
      const grad = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: {
          x1: CANVAS_W / 2 - Math.cos(rad) * CANVAS_W / 2,
          y1: CANVAS_H / 2 - Math.sin(rad) * CANVAS_H / 2,
          x2: CANVAS_W / 2 + Math.cos(rad) * CANVAS_W / 2,
          y2: CANVAS_H / 2 + Math.sin(rad) * CANVAS_H / 2,
        },
        colorStops: colors.map((c, i) => ({ offset: i / (colors.length - 1), color: c })),
      });
      fc.setBackgroundColor(grad, fc.renderAll.bind(fc));
    } else {
      fc.setBackgroundColor(bg, fc.renderAll.bind(fc));
    }

    // Add template objects
    template.objects.forEach((obj) => {
      let fabricObj;
      switch (obj.type) {
        case 'textbox':
          fabricObj = new fabric.Textbox(obj.text, {
            left: obj.left, top: obj.top, width: obj.width,
            fontSize: obj.fontSize, fontWeight: obj.fontWeight || 'normal',
            fill: obj.fill, fontFamily: obj.fontFamily || 'Helvetica',
            textAlign: obj.textAlign || 'left',
            fontStyle: obj.fontStyle || 'normal',
            selectable: obj.selectable !== false,
          });
          break;
        case 'rect':
          fabricObj = new fabric.Rect({
            left: obj.left, top: obj.top, width: obj.width, height: obj.height,
            fill: obj.fill || 'transparent', stroke: obj.stroke,
            strokeWidth: obj.strokeWidth || 0, rx: obj.rx || 0, ry: obj.ry || 0,
            angle: obj.angle || 0, selectable: obj.selectable !== false,
          });
          break;
        case 'circle':
          fabricObj = new fabric.Circle({
            left: obj.left, top: obj.top, radius: obj.radius,
            fill: obj.fill || 'transparent', stroke: obj.stroke,
            strokeWidth: obj.strokeWidth || 0, selectable: obj.selectable !== false,
          });
          break;
        case 'triangle':
          fabricObj = new fabric.Triangle({
            left: obj.left, top: obj.top, width: obj.width, height: obj.height,
            fill: obj.fill || 'transparent', selectable: obj.selectable !== false,
          });
          break;
        case 'line':
          fabricObj = new fabric.Line([obj.x1, obj.y1, obj.x2, obj.y2], {
            stroke: obj.stroke || '#000', strokeWidth: obj.strokeWidth || 1,
            selectable: obj.selectable !== false,
          });
          break;
        default: return;
      }
      fc.add(fabricObj);
    });

    fc.renderAll();
  }, []);

  // Add text
  const addText = useCallback((options = {}) => {
    const fc = fabricRef.current;
    if (!fc) return;
    const t = new fabric.Textbox(options.text || 'Add your text', {
      left: 100, top: 200, width: 400,
      fontSize: options.fontSize || 32,
      fill: options.fill || '#ffffff',
      fontFamily: options.fontFamily || 'Helvetica',
      fontWeight: options.bold ? 'bold' : 'normal',
      fontStyle: options.italic ? 'italic' : 'normal',
    });
    fc.add(t);
    fc.setActiveObject(t);
    fc.renderAll();
  }, []);

  // Add shape
  const addShape = useCallback((type, options = {}) => {
    const fc = fabricRef.current;
    if (!fc) return;
    let shape;
    const defaults = { left: 200, top: 180, fill: options.fill || '#3b82f6' };
    switch (type) {
      case 'rect':
        shape = new fabric.Rect({ ...defaults, width: 200, height: 120, rx: options.rounded ? 12 : 0, ry: options.rounded ? 12 : 0 });
        break;
      case 'circle':
        shape = new fabric.Circle({ ...defaults, radius: 80 });
        break;
      case 'triangle':
        shape = new fabric.Triangle({ ...defaults, width: 160, height: 140 });
        break;
      case 'line':
        shape = new fabric.Line([100, 270, 860, 270], { stroke: options.fill || '#3b82f6', strokeWidth: 4, left: 100, top: 270 });
        break;
      case 'arrow':
        shape = new fabric.Line([100, 270, 760, 270], { stroke: options.fill || '#3b82f6', strokeWidth: 4 });
        break;
      case 'star': {
        const pts = [];
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 80 : 35;
          const a = (Math.PI / 5) * i - Math.PI / 2;
          pts.push({ x: r * Math.cos(a), y: r * Math.sin(a) });
        }
        shape = new fabric.Polygon(pts, { ...defaults, left: 400, top: 190 });
        break;
      }
      default: return;
    }
    fc.add(shape);
    fc.setActiveObject(shape);
    fc.renderAll();
  }, []);

  // Add image/logo from URL or File
  const addImage = useCallback((src) => {
    const fc = fabricRef.current;
    if (!fc) return;
    fabric.Image.fromURL(src, (img) => {
      img.scaleToWidth(200);
      img.set({ left: 300, top: 170 });
      fc.add(img);
      fc.setActiveObject(img);
      fc.renderAll();
    }, { crossOrigin: 'anonymous' });
  }, []);

  // Delete selected
  const deleteSelected = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const obj = fc.getActiveObject();
    if (obj) { fc.remove(obj); fc.renderAll(); }
  }, []);

  // Export canvas as PNG
  const exportPNG = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const url = fc.toDataURL({ format: 'png', multiplier: 2 });
    const a = document.createElement('a');
    a.href = url;
    a.download = 'slide.png';
    a.click();
  }, []);

  // Get canvas JSON (for slide storage)
  const getJSON = useCallback(() => fabricRef.current?.toJSON() ?? null, []);

  // Load canvas from JSON
  const loadJSON = useCallback((json) => {
    const fc = fabricRef.current;
    if (!fc || !json) return;
    fc.loadFromJSON(json, () => fc.renderAll());
  }, []);

  return {
    fabricRef,
    activeObject,
    zoom, setZoom,
    loadTemplate,
    addText,
    addShape,
    addImage,
    deleteSelected,
    exportPNG,
    getJSON,
    loadJSON,
  };
}
