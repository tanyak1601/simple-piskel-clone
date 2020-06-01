import state from '../../../screens/piskel/js/state';

function getCanvasContext() {
  state.canvasSection = document.getElementById('canvas-section');

  state.canvas = document.getElementById('canvas');
  state.ctx = state.canvas.getContext('2d');
  state.ctx.canvas.height = state.canvasSize;
  state.ctx.canvas.width = state.canvasSize;
  state.ctx.imageSmoothingEnabled = false;
}

export default getCanvasContext;
