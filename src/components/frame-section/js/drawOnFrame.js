import state from '../../../screens/piskel/js/state';
import saveFrame from './saveFrame';

function drawOnFrame(url, frame) {
  let canvasImageURL;

  if (!url) {
    canvasImageURL = state.canvas.toDataURL();
  } else {
    canvasImageURL = url;
  }

  let targetFrame;

  if (!frame) {
    targetFrame = document.querySelector('.frame_active');
  } else {
    targetFrame = frame;
  }

  const canvas = targetFrame.firstElementChild;

  const width = state.canvasSize;
  const height = state.canvasSize;

  const ctx = canvas.getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.imageSmoothingEnabled = false;

  const img = new Image();
  img.src = canvasImageURL;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, width, height);
    saveFrame(targetFrame);
  };
}

export default drawOnFrame;
