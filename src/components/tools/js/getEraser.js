import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';

function clearPixels(e) {
  if (!state.isClear) return;
  const { pixelSize } = state;
  const { penSize } = state;
  const x1 = Math.floor(e.offsetX / pixelSize);
  const y1 = Math.floor(e.offsetY / pixelSize);
  const deltaX = Math.abs(x1 - state.x0);
  const deltaY = Math.abs(y1 - state.y0);
  const dirX = (state.x0 < x1) ? 1 : -1;
  const dirY = (state.y0 < y1) ? 1 : -1;
  let error = deltaX - deltaY;

  while (!((state.x0 === x1) && (state.y0 === y1))) {
    state.ctx.clearRect(state.x0, state.y0, penSize, penSize);
    if ((state.x0 === x1) && (state.y0 === y1)) break;
    const error2 = 2 * error;
    if (error2 > -deltaY) { error -= deltaY; state.x0 += dirX; }
    if (error2 < deltaX) { error += deltaX; state.y0 += dirY; }
  }

  state.ctx.clearRect(state.x0, state.y0, penSize, penSize);
}

function useEraser(e) {
  if (e.target.id === 'canvas') {
    if (state.x0 === null && state.y0 === null) {
      const { pixelSize } = state;
      [state.x0, state.y0] = [Math.floor(e.offsetX / pixelSize), Math.floor(e.offsetY / pixelSize)];
    }
    clearPixels(e);
  } else {
    [state.x0, state.y0] = [null, null];
  }
}

function allowEraser(e) {
  state.isClear = true;
  if (e.target.id === 'canvas') {
    const { pixelSize } = state;
    [state.x0, state.y0] = [Math.floor(e.offsetX / pixelSize), Math.floor(e.offsetY / pixelSize)];
    clearPixels(e);
  }
}

function disableEraser() {
  if (state.isClear === true) {
    state.isClear = false;
    drawOnFrame();
  }
}

function getEraser() {
  document.getElementById('eraser').classList.add('tool_active');
  state.isClear = false;

  state.x0 = null;
  state.y0 = null;

  state.canvasSection.addEventListener('mousedown', allowEraser);
  state.canvasSection.addEventListener('mousemove', useEraser);
  document.body.addEventListener('mouseup', disableEraser);

  state.currentListeners.set('mousedown', allowEraser);
  state.currentListeners.set('mousemove', useEraser);
}

export default getEraser;
