import state from './state';

function loadCurrentSession() {
  const sessionState = JSON.parse(localStorage.getItem('sessionState'));
  const keyArray = Object.keys(sessionState);

  keyArray.forEach((item) => {
    state[item] = sessionState[item];
  });

  state.currentListeners = new Map();
}

export default loadCurrentSession;
