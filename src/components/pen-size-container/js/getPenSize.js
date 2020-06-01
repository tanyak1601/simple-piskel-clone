import state from '../../../screens/piskel/js/state';

function getPenSize() {
  const { penSize } = state;
  const activePenSize = document.querySelector(`div[data-size='${penSize}']`);
  activePenSize.classList.add('pen-size_active');
}

export default getPenSize;
