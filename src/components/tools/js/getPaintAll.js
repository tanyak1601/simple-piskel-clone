import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';

function usePaintAll() {
  const width = state.canvasSize;
  const height = state.canvasSize;
  state.ctx.fillStyle = state.mainColor;
  state.ctx.fillRect(0, 0, width, height);
  drawOnFrame();
}

function getPaintAll() {
  document.getElementById('paint-all').classList.add('tool_active');

  state.canvasSection.addEventListener('click', usePaintAll);
  state.currentListeners.set('click', usePaintAll);
}

export default getPaintAll;
