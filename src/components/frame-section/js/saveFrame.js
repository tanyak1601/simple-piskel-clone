import state from '../../../screens/piskel/js/state';

function saveFrame(targetFrame) {
  const index = Array.from(targetFrame.parentNode.children).indexOf(targetFrame);
  state.frames[index] = targetFrame.firstElementChild.toDataURL();
}

export default saveFrame;
