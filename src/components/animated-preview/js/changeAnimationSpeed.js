import getPreviewAnimation from './getPreviewAnimation';
import state from '../../../screens/piskel/js/state';

function changeAnimationSpeed(e) {
  state.animationSpeed = e.target.value;
  getPreviewAnimation();
}

export default changeAnimationSpeed;
