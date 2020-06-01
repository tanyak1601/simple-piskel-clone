import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';

let canvasImageData;

function strokePixels(x1, y1, context) {
  const { penSize } = state;
  let { x0 } = state;
  let { y0 } = state;
  const deltaX = Math.abs(x1 - x0);
  const deltaY = Math.abs(y1 - y0);
  const dirX = (x0 < x1) ? 1 : -1;
  const dirY = (y0 < y1) ? 1 : -1;
  let error = deltaX - deltaY;

  context.fillStyle = state.mainColor;

  while (!((x0 === x1) && (y0 === y1))) {
    context.fillRect(x0, y0, penSize, penSize);
    if ((x0 === x1) && (y0 === y1)) break;
    const error2 = 2 * error;
    if (error2 > -deltaY) { error -= deltaY; x0 += dirX; }
    if (error2 < deltaX) { error += deltaX; y0 += dirY; }
  }

  context.fillRect(x0, y0, penSize, penSize);
}

function useStroke(e) {
  if (state.isStroke) {
    const pxData = canvasImageData;
    state.ctx.putImageData(pxData, 0, 0);

    if (e.target.id === 'canvas') {
      const { pixelSize } = state;
      state.x1 = Math.floor(e.offsetX / pixelSize);
      state.y1 = Math.floor(e.offsetY / pixelSize);
      strokePixels(state.x1, state.y1, state.ctx);
    } else {
      strokePixels(state.x1, state.y1, state.ctx);
    }
  }
}

function allowStroke(e) {
  if (e.target.id === 'canvas') {
    const width = state.canvasSize;
    const height = state.canvasSize;
    canvasImageData = state.canvas.getContext('2d').getImageData(0, 0, width, height);

    state.isStroke = true;

    const { pixelSize } = state;
    [state.x0, state.y0] = [Math.floor(e.offsetX / pixelSize), Math.floor(e.offsetY / pixelSize)];
    state.x1 = state.x0;
    state.y1 = state.y0;
    strokePixels(state.x1, state.y1, state.ctx);
  }
}

function disableStroke() {
  if (state.isStroke === true) {
    state.isStroke = false;
    drawOnFrame();
  }
}


function getStroke() {
  document.getElementById('stroke').classList.add('tool_active');

  state.isStroke = false;

  state.x0 = null;
  state.y0 = null;

  state.canvasSection.addEventListener('mousedown', allowStroke);
  state.canvasSection.addEventListener('mousemove', useStroke);
  document.body.addEventListener('mouseup', disableStroke);

  state.currentListeners.set('mousedown', allowStroke);
  state.currentListeners.set('mousemove', useStroke);
}

export default getStroke;
