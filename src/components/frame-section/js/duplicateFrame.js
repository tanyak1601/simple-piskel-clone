import state from '../../../screens/piskel/js/state';
import drawOnFrame from './drawOnFrame';
import makeAbleButtons from './makeAbleButtons';

function duplicateFrame(e) {
  if (!e.target.classList.contains('frame__button_duplicate')) return;

  const activeFrame = document.querySelector('.frame_active');
  activeFrame.classList.remove('frame_active');
  const frame = e.target.parentElement;

  if (frame.parentElement.children.length === 1) {
    makeAbleButtons();
  }

  const cloneFrame = frame.cloneNode(true);
  frame.insertAdjacentElement('afterend', cloneFrame);
  cloneFrame.classList.add('frame_active');

  const frameIndex = Array.from(frame.parentNode.children).indexOf(frame);
  state.frames.splice(frameIndex + 1, 0, state.frames[frameIndex]);
  state.activeFrame = frameIndex + 1;

  drawOnFrame(state.frames[frameIndex]);
  
}

export default duplicateFrame;
