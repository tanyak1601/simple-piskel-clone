import addFrame from './addFrame';
import state from '../../../screens/piskel/js/state';
import drawOnFrame from './drawOnFrame';
import loadCurrentImage from '../../canvas/js/loadCurrentImage';

function getFrames() {
  if (!state.frames.length) {
    addFrame();
  } else {
    const activeFrameIndex = state.activeFrame;
    const activeFrameURL = state.frames[activeFrameIndex];
    state.frames.forEach((url) => {
      const newFrame = addFrame();
      drawOnFrame(url, newFrame);
    });

    const frames = Array.from(document.querySelectorAll('.frame'));

    const activeFrame = document.querySelector('.frame_active');
    activeFrame.classList.remove('frame_active');
    frames[activeFrameIndex].classList.add('frame_active');
    state.activeFrame = activeFrameIndex;

    loadCurrentImage(activeFrameURL);
  }
}

export default getFrames;
