import displayCanvasSize from '../src/components/resize-button/js/displayCanvasSize.js';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  canvasSize: 64,
}));

describe('displayCanvasSize', () => {
  it('should display canvas size', () => {
    document.body.innerHTML = '<div id="canvas-info"></div>';
    const canvasInfo = document.getElementById('canvas-info');
    displayCanvasSize();

    expect(canvasInfo.innerText).toEqual('[64x64]');
  });
});
