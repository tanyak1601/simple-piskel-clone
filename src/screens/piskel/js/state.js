const state = {
  currentListeners: new Map(),
  frames: [],
  keyboardShortcuts: {
    pencil: 'p',
    pipette: 'o',
    bucket: 'b',
    'paint-all': 'a',
    eraser: 'e',
    stroke: 'l',
    fullscreen: 'f',
    'add-frame-button': 'd',
    'palette-swap': 'x',
  },
  canvasCssSize: 512,
  mainColor: '#000000',
  additionalColor: '#ffffff',
  currentTool: 'pencil',
  canvasSize: 32,
  pixelSize: 16,
  penSize: 1,
  animationSpeed: 6,
  activeFrame: 0,
};

export default state;
