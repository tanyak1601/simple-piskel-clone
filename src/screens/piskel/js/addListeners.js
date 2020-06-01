import switchCurrentTool from '../../../components/tools/js/switchCurrentTool';
import { chooseColor, changeColor } from '../../../components/palette/js/handleColor';
import changePenSize from '../../../components/pen-size-container/js/changePenSize';
import resizeCanvas from '../../../components/resize-button/js/resizeCanvas';
import addFrame from '../../../components/frame-section/js/addFrame';
import changeAnimationSpeed from '../../../components/animated-preview/js/changeAnimationSpeed';
import toggleFullScreen from '../../../components/animated-preview/js/toggleFullScreen';
import changeCurrentFrame from '../../../components/frame-section/js/changeCurrentFrame';
import dragDropFrame from '../../../components/frame-section/js/dragDropFrame';
import state from './state';
import duplicateFrame from '../../../components/frame-section/js/duplicateFrame';
import deleteFrame from '../../../components/frame-section/js/deleteFrame';
import exportResult from '../../../components/export-button/js/exportResult';
import { openKeyboardShortcuts } from '../../../components/keyboard-shortcuts/js/openKeyboardShortcuts';
import getKeyboardShortcuts from '../../../components/keyboard-shortcuts/js/getKeyboardShortcuts';

function addEListeners() {
  document.getElementById('tools').addEventListener('click', switchCurrentTool);
  document.querySelectorAll('.color__input').forEach((item) => {
    item.addEventListener('change', chooseColor);
  });
  document.getElementById('palette-swap').addEventListener('click', changeColor);
  document.getElementById('pen-size-container').addEventListener('click', changePenSize);
  document.getElementById('resize-open').addEventListener('click', resizeCanvas);
  document.getElementById('add-frame-button').addEventListener('click', addFrame);
  document.getElementById('speed-input-range').addEventListener('change', changeAnimationSpeed);
  document.getElementById('fullscreen').addEventListener('click', toggleFullScreen);
  document.getElementById('frames').addEventListener('click', (e) => {
    changeCurrentFrame(e);
    duplicateFrame(e);
    deleteFrame(e);
  });
  document.getElementById('frames').addEventListener('mousedown', dragDropFrame);
  document.getElementById('export-open').addEventListener('click', exportResult);
  document.getElementById('keyboard-shortcuts').addEventListener('click', openKeyboardShortcuts);
  document.addEventListener('keydown', getKeyboardShortcuts);

  window.onbeforeunload = () => {
    localStorage.setItem('sessionState', JSON.stringify(state));
  };
}

export default addEListeners;
