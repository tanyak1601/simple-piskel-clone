import state from '../../../screens/piskel/js/state';
import { setColor } from '../../palette/js/handleColor';

function usePipette(e) {
  if (!e.target.id || e.target.id !== 'canvas') return;
  const pxSize = state.pixelSize;
  const pixelData = state.canvas.getContext('2d').getImageData(Math.floor(e.offsetX / pxSize), Math.floor(e.offsetY / pxSize), 1, 1).data;

  if (pixelData[0] === 0 && pixelData[1] === 0 && pixelData[2] === 0 && pixelData[3] === 0) {
    return;
  }
  const mainColor = `rgba(${pixelData[0]},${pixelData[1]},${pixelData[2]},1)`;
  state.mainColor = mainColor;

  setColor();
}

function getPipette() {
  document.getElementById('pipette').classList.add('tool_active');

  state.canvasSection.addEventListener('click', usePipette);
  state.currentListeners.set('click', usePipette);
}

export default getPipette;
