import state from '../../../screens/piskel/js/state';

function changePenSize(e) {
  if (!e.target.classList.contains('pen-size')) return;

  const currentPenSize = document.querySelector('.pen-size_active');
  currentPenSize.classList.remove('pen-size_active');

  if (e.target.id === 'pen-size-1') {
    e.target.classList.add('pen-size_active');
    state.penSize = 1;
  }

  if (e.target.id === 'pen-size-2') {
    e.target.classList.add('pen-size_active');
    state.penSize = 2;
  }

  if (e.target.id === 'pen-size-3') {
    e.target.classList.add('pen-size_active');
    state.penSize = 3;
  }

  if (e.target.id === 'pen-size-4') {
    e.target.classList.add('pen-size_active');
    state.penSize = 4;
  }
}

export default changePenSize;
