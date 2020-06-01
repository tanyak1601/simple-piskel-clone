import state from '../../../screens/piskel/js/state';

function getPreviewAnimation() {
  const previewWindow = document.getElementById('animated-preview-player');
  const { frames } = state;
  let count = 0;
  const speed = +state.animationSpeed;

  const speedValueLabel = document.getElementById('speed-value-label');
  speedValueLabel.innerText = `${speed} FPS`;
  const speedInputRange = document.getElementById('speed-input-range');
  if (speedInputRange.value !== speed) {
    speedInputRange.value = speed;
  }

  if (state.timer) {
    clearInterval(state.timer);
  }

  if (speed === 0) return;

  state.timer = setInterval(() => {
    if (frames[count]) {
      previewWindow.style.backgroundImage = `url('${frames[count]}')`;
    } else {
      previewWindow.style.backgroundImage = 'none';
    }

    count += 1;
    if (count >= frames.length) {
      count = 0;
    }
  }, 1000 / speed);
}

export default getPreviewAnimation;
