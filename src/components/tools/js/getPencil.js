import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';

function drawPixels(e) {
  const { pixelSize } = state;
  const { penSize } = state;
  const x1 = Math.floor(e.offsetX / pixelSize);
  const y1 = Math.floor(e.offsetY / pixelSize);
  const deltaX = Math.abs(x1 - state.x0);
  const deltaY = Math.abs(y1 - state.y0);
  const dirX = (state.x0 < x1) ? 1 : -1;
  const dirY = (state.y0 < y1) ? 1 : -1;
  let error = deltaX - deltaY;

  state.ctx.fillStyle = state.mainColor;

  while (!((state.x0 === x1) && (state.y0 === y1))) {
    state.ctx.fillRect(state.x0, state.y0, penSize, penSize);
    if ((state.x0 === x1) && (state.y0 === y1)) break;
    const error2 = 2 * error;
    if (error2 > -deltaY) { error -= deltaY; state.x0 += dirX; }
    if (error2 < deltaX) { error += deltaX; state.y0 += dirY; }
  }

  state.ctx.fillRect(state.x0, state.y0, penSize, penSize);
}

function usePencil(e) {
  if (state.isDraw) {
    if (e.target.id === 'canvas') {
      if (state.x0 === null && state.y0 === null) {
        const { pixelSize } = state;
        [state.x0, state.y0] = [
          Math.floor(e.offsetX / pixelSize),
          Math.floor(e.offsetY / pixelSize),
        ];
      }
      drawPixels(e);
    } else {
      [state.x0, state.y0] = [null, null];
    }
  }
}

function allowPencil(e) {
  state.isDraw = true;
  if (e.target.id === 'canvas') {
    const { pixelSize } = state;
    [state.x0, state.y0] = [Math.floor(e.offsetX / pixelSize), Math.floor(e.offsetY / pixelSize)];
    drawPixels(e);
  }
}

function disablePencil() {
  if (state.isDraw === true) {
    state.isDraw = false;
    drawOnFrame();
  }
}


function getPencil() {
  document.getElementById('pencil').classList.add('tool_active');
  state.isDraw = false;

  state.x0 = null;
  state.y0 = null;

  state.canvasSection.addEventListener('mousedown', allowPencil);
  state.canvasSection.addEventListener('mousemove', usePencil);
  document.body.addEventListener('mouseup', disablePencil);

  state.currentListeners.set('mousedown', allowPencil);
  state.currentListeners.set('mousemove', usePencil);
}

export default getPencil;
