import saveFrame from './saveFrame';
import getPreviewAnimation from '../../animated-preview/js/getPreviewAnimation';
import state from '../../../screens/piskel/js/state';
import makeDisableButtons from './makeDisableButtons';
import makeAbleButtons from './makeAbleButtons';

function addFrame() {
  const frames = document.getElementById('frames');

  const currentActiveFrame = document.querySelector('.frame_active');

  if (currentActiveFrame) {
    currentActiveFrame.classList.remove('frame_active');
  }

  const newFrameHTML = `<div class="frame frame_active">
                        <canvas class="frame__canvas"></canvas>
                        <div class="frame__button frame__button_delete"></div>
                        <div class="frame__button frame__button_move"></div>
                        <div class="frame__button frame__button_duplicate"></div>
                    </div>`;
  frames.insertAdjacentHTML('beforeEnd', newFrameHTML);

  const newFrame = document.querySelector('.frame_active');
  const index = Array.from(newFrame.parentNode.children).indexOf(newFrame);
  state.activeFrame = index;

  saveFrame(newFrame);
  getPreviewAnimation();

  const width = state.canvasSize;
  const height = state.canvasSize;
  state.ctx.clearRect(0, 0, width, height);

  if (frames.children.length === 1) {
    makeDisableButtons();
  } else if (frames.children.length === 2) {
    makeAbleButtons();
  }

  return newFrame;
}

export default addFrame;
