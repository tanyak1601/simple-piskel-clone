import '../piskel.scss';

import '../../../components/header/js/login';

import getCanvasContext from '../../../components/canvas/js/getCanvasContext';
import switchCurrentTool from '../../../components/tools/js/switchCurrentTool';
import { setColor } from '../../../components/palette/js/handleColor';
import getFrames from '../../../components/frame-section/js/getFrames';
import addListeners from './addListeners';
import displayCanvasSize from '../../../components/resize-button/js/displayCanvasSize';
import loadCurrentSession from './loadCurrentSession';
import getPreviewAnimation from '../../../components/animated-preview/js/getPreviewAnimation';
import setKeyboardShortcuts from '../../../components/keyboard-shortcuts/js/setKeyboardShortcuts';
import getPenSize from '../../../components/pen-size-container/js/getPenSize';

const piskelApp = {
  init() {
    if (localStorage.getItem('sessionState')) {
      loadCurrentSession();
    }

    getCanvasContext();
    displayCanvasSize();
    switchCurrentTool();
    getPenSize();
    setColor();
    getFrames();
    getPreviewAnimation();
    setKeyboardShortcuts();
    addListeners();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  piskelApp.init();
});
