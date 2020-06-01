import state from '../../../screens/piskel/js/state';
import makeDisableButtons from './makeDisableButtons';

function deleteFrame(e) {
  if (!e.target.classList.contains('frame__button_delete')) return;

  const deletedFrame = e.target.parentElement;
  const frames = document.getElementById('frames');
  const index = Array.from(frames.children).indexOf(deletedFrame);

  if (deletedFrame.classList.contains('frame_active')) {
    if (deletedFrame.previousElementSibling) {
      deletedFrame.previousElementSibling.firstElementChild.click();
    } else {
      deletedFrame.nextElementSibling.firstElementChild.click();
    }
  }

  deletedFrame.remove();
  state.frames.splice(index, 1);

  const activeFrame = document.querySelector('.frame_active');
  const indexActiveFrame = Array.from(activeFrame.parentElement.children).indexOf(activeFrame);
  state.activeFrame = indexActiveFrame;


  if (frames.children.length === 1) {
    makeDisableButtons();
  }
}

export default deleteFrame;
