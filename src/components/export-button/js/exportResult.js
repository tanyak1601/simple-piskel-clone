import '../../../../lib/gifJs/gif';
import state from '../../../screens/piskel/js/state';

const exportWindow = document.getElementById('export__window');

function chooseResolution(e) {
  const scaleValue = document.getElementById('scale-value');
  scaleValue.innerText = `${e.target.value}.0x`;
  const { canvasSize } = state;
  const newSize = canvasSize * e.target.value;
  const resolution = document.getElementById('resolution');
  resolution.innerText = `${newSize} x ${newSize}`;
}

function exportGif() {
  const gif = new GIF({
    workers: 2,
    quality: 10,
    background: '#bdbdbd',
  });

  const speed = state.animationSpeed;
  let animationDelay;

  if (speed > 0) {
    animationDelay = Math.round(1000 / speed);
  } else {
    const defaultSpeed = 12;
    animationDelay = Math.round(1000 / defaultSpeed);
  }

  const { canvasSize } = state;
  const scaleValue = document.getElementById('scale-input').value;
  const newSize = canvasSize * scaleValue;

  const imageArray = state.frames;
  const promiseArray = [];

  imageArray.forEach((item) => {
    promiseArray.push(new Promise((resolve) => {
      const canvasElement = document.createElement('canvas');
      const ctx = canvasElement.getContext('2d');
      ctx.canvas.width = newSize;
      ctx.canvas.height = newSize;
      ctx.imageSmoothingEnabled = false;
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, newSize, newSize);
        gif.addFrame(canvasElement, { delay: animationDelay });
        resolve();
      };
      img.src = item;
    }));
  });

  Promise.all(promiseArray).then(() => {
    gif.on('finished', (blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'simple-piskel.gif');
      document.body.appendChild(link);
      link.click();
      link.remove();
    });

    gif.render();
  });

  exportWindow.classList.remove('export__window_available');
}

function closeExportWindow() {
  exportWindow.classList.remove('export__window_available');
}

function exportResult() {
  exportWindow.classList.add('export__window_available');
  const { canvasSize } = state;
  const resolution = document.getElementById('resolution');
  const scaleValue = document.getElementById('scale-input').value;
  resolution.innerText = `${canvasSize * scaleValue} x ${canvasSize * scaleValue}`;

  document.getElementById('scale-input').addEventListener('change', chooseResolution);
  document.getElementById('export-button').addEventListener('click', exportGif);
  document.getElementById('exit-export').addEventListener('click', closeExportWindow);
}

export default exportResult;
