import state from '../../../screens/piskel/js/state';
import getPencil from './getPencil';
import getBucket from './getBucket';
import getPipette from './getPipette';
import getEraser from './getEraser';
import getStroke from './getStroke';
import getPaintAll from './getPaintAll';

function switchCurrentTool(e) {
  if (e) {
    if (!e.target.classList.contains('tool')) return;
    const previousTool = state.currentTool;
    document.getElementById(previousTool).classList.remove('tool_active');
    state.currentTool = e.target.id;
  }

  state.currentListeners.forEach((value, key, map) => {
    state.canvasSection.removeEventListener(key, value);
    map.delete(key);
  });

  if (state.currentTool === 'pencil') {
    getPencil();
  }

  if (state.currentTool === 'bucket') {
    getBucket();
  }

  if (state.currentTool === 'paint-all') {
    getPaintAll();
  }

  if (state.currentTool === 'pipette') {
    getPipette();
  }

  if (state.currentTool === 'eraser') {
    getEraser();
  }

  if (state.currentTool === 'stroke') {
    getStroke();
  }
}

export default switchCurrentTool;
