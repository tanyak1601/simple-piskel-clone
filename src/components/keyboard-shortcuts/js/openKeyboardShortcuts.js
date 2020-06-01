import state from '../../../screens/piskel/js/state';


function checkCorrectInput(e) {
  const parent = e.target.parentElement;
  const changeButton = e.target.nextElementSibling;
  const errorMessage = parent.lastElementChild;

  if (!e.target.value) {
    errorMessage.innerText = '';
    changeButton.classList.remove('shortcuts__item_button_disable');
    return;
  }

  const { value } = e.target;

  if (Object.values(state.keyboardShortcuts).includes(value)) {
    errorMessage.innerText = 'This key already exists, please enter another!';
    changeButton.classList.add('shortcuts__item_button_disable');
    return;
  }

  if (!value.match(/[a-zA-Z]/)) {
    errorMessage.innerText = 'Please use only A-Z';
    changeButton.classList.add('shortcuts__item_button_disable');
  }
}

function changeKeyboardShortcut(e) {
  if (!e.target.classList.contains('shortcuts__item_button')) return;

  const parent = e.target.parentElement;
  const toolName = parent.firstElementChild.dataset.tool;
  const keyIndex = 2;
  const inputIndex = 3;
  const { value } = parent.children[inputIndex];

  if (!value) return;

  parent.children[inputIndex].value = '';
  parent.children[keyIndex].innerText = value;
  state.keyboardShortcuts[toolName] = value;
  const toolContextMenu = document.querySelector(`div[data-tool='${toolName}'] > p > span`);
  toolContextMenu.innerText = `(${value})`;
}

function closeKeyboardShortcuts() {
  const modalWindow = document.getElementById('modal-window');
  modalWindow.classList.remove('modal-window_available');
}

function openKeyboardShortcuts() {
  const modalWindow = document.getElementById('modal-window');
  modalWindow.classList.add('modal-window_available');

  document.getElementById('shortcuts').addEventListener('click', changeKeyboardShortcut);
  document.getElementById('shortcuts').addEventListener('input', checkCorrectInput);
  document.getElementById('modal-window-exit').addEventListener('click', closeKeyboardShortcuts);
}

export { openKeyboardShortcuts, checkCorrectInput };
