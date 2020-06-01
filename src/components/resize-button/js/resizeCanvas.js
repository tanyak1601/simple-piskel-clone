import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';
import displayCanvasSize from './displayCanvasSize';

const resizeWindow = document.getElementById('resize__window');
const size32 = document.getElementById('canvas-size-32');
const size64 = document.getElementById('canvas-size-64');
const size128 = document.getElementById('canvas-size-128');

function chooseCanvasSize(e) {
  if (e.target === size32 || e.target === size64 || e.target === size128) {
    document.querySelector('.sizes__item_active').classList.remove('sizes__item_active');

    switch (e.target) {
      case size32:
        size32.classList.add('sizes__item_active');
        break;

      case size64:
        size64.classList.add('sizes__item_active');
        break;

      default:
        size128.classList.add('sizes__item_active');
        break;
    }
  }
}

function changeCanvasSize() {
  state.canvasImage = state.canvas.toDataURL();

  const newCanvasSize = document.querySelector('.sizes__item_active');

  switch (newCanvasSize.id) {
    case 'canvas-size-32':
      state.canvasSize = 32;
      state.pixelSize = state.canvasCssSize / state.canvasSize;
      break;

    case 'canvas-size-64':
      state.canvasSize = 64;
      state.pixelSize = state.canvasCssSize / state.canvasSize;
      break;

    default:
      state.canvasSize = 128;
      state.pixelSize = state.canvasCssSize / state.canvasSize;
      break;
  }

  state.ctx.canvas.height = state.canvasSize;
  state.ctx.canvas.width = state.canvasSize;
  state.ctx.imageSmoothingEnabled = false;

  const dWidth = state.canvasSize;
  const dHeight = state.canvasSize;


  const dataURL = state.canvasImage;
  const img = new Image();
  img.src = dataURL;
  img.onload = () => {
    state.ctx.drawImage(img, 0, 0, dWidth, dHeight);
  };

  const frameList = Array.from(document.querySelectorAll('.frame'));

  frameList.forEach((item, index) => {
    drawOnFrame(state.frames[index], item);
  });

  resizeWindow.classList.remove('resize__window_available');
  displayCanvasSize();
}

function closeResizeWindow() {
  document.querySelector('.sizes__item_active').classList.remove('sizes__item_active');
  resizeWindow.classList.remove('resize__window_available');
}

function resizeCanvas() {
  resizeWindow.classList.add('resize__window_available');

  const currentCanvasSize = state.canvasSize;

  switch (currentCanvasSize) {
    case 32:
      size32.classList.add('sizes__item_active');
      break;

    case 64:
      size64.classList.add('sizes__item_active');
      break;

    default:
      size128.classList.add('sizes__item_active');
      break;
  }

  document.getElementById('canvas-sizes').addEventListener('click', chooseCanvasSize);
  document.getElementById('resize-button').addEventListener('click', changeCanvasSize);
  document.getElementById('exit-button').addEventListener('click', closeResizeWindow);
}

export default resizeCanvas;
