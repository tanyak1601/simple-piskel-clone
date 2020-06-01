import state from '../../../screens/piskel/js/state';

function displayCanvasSize() {
  const { canvasSize } = state;
  const canvasInfo = document.getElementById('canvas-info');
  canvasInfo.innerText = `[${canvasSize}x${canvasSize}]`;
}

export default displayCanvasSize;
