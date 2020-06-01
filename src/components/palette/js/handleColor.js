import state from '../../../screens/piskel/js/state';

function setColor() {
  document.getElementById('main-color-label').style.backgroundColor = state.mainColor;
  document.getElementById('additional-color-label').style.backgroundColor = state.additionalColor;
}

function changeColor() {
  const additionalColor = state.mainColor;
  state.mainColor = state.additionalColor;
  state.additionalColor = additionalColor;

  setColor();
}

function chooseColor(e) {
  if (e.target.id === 'main-color-input') {
    state.mainColor = e.target.value;
  }

  if (e.target.id === 'additional-color-input') {
    state.additionalColor = e.target.value;
  }

  setColor();
}

export { setColor, changeColor, chooseColor };
