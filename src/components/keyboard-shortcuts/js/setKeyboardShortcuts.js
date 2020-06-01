import state from '../../../screens/piskel/js/state';

function setKeyboardShortcuts() {
  const toolArray = Object.keys(state.keyboardShortcuts);

  toolArray.forEach((item) => {
    const toolContextMenu = document.querySelector(`div[data-tool='${item}'] > p > span`);
    toolContextMenu.innerText = `(${state.keyboardShortcuts[item]})`;
    const keyboardShortcutsKey = document.querySelector(`li[data-tool='${item}'] > .shortcuts__item_key`);
    keyboardShortcutsKey.innerText = state.keyboardShortcuts[item];
  });
}

export default setKeyboardShortcuts;
