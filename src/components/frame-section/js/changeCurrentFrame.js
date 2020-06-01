import loadCurrentImage from '../../canvas/js/loadCurrentImage';
import state from '../../../screens/piskel/js/state';

function changeCurrentFrame(e) {
  if (e.target.classList.contains('frame__button_delete')) return;

  if (e.target.parentElement.classList.contains('frame')) {
    const activeFrame = document.querySelector('.frame_active');
    activeFrame.classList.remove('frame_active');
    e.target.parentElement.classList.add('frame_active');

    const frames = document.getElementById('frames');
    const index = Array.from(frames.children).indexOf(e.target.parentElement);
    state.activeFrame = index;
  }

  loadCurrentImage();
}

export default changeCurrentFrame;
