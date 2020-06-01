import state from '../../../screens/piskel/js/state';

function getKeyboardShortcuts(e) {
  if (!Object.values(state.keyboardShortcuts).includes(e.key)) return;

  state.targetToolName = '';

  const tools = Object.keys(state.keyboardShortcuts);

  tools.forEach((item) => {
    if (state.keyboardShortcuts[item] === e.key) {
      state.targetToolName = item;
    }
  });

  const targetTool = document.getElementById(state.targetToolName);
  targetTool.click();
}

export default getKeyboardShortcuts;
