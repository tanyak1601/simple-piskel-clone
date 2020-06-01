import loadCurrentImage from '../src/components/canvas/js/loadCurrentImage';
import mockState from '../src/screens/piskel/js/state';

const dataURL = 'data:image/png;base64,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';
jest.mock('../src/screens/piskel/js/state', () => ({
  canvasSize: 32,
  activeFrame: 0,
  frames: ['data:image/png;base64,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'],
}));

describe('loadCurrentImage', () => {
  it('should load current image on canvas', () => {
    document.body.innerHTML = '<div id="canvas-section"><canvas id="canvas"></canvas></div>';
    mockState.ctx = document.getElementById('canvas').getContext('2d');
    const calls = mockState.ctx.__getDrawCalls();
    loadCurrentImage();

    expect(calls).toMatchSnapshot();
  });

  it('should load function parameter as image on canvas', () => {
    document.body.innerHTML = '<div id="canvas-section"><canvas id="canvas"></canvas></div>';
    mockState.ctx = document.getElementById('canvas').getContext('2d');
    const calls = mockState.ctx.__getDrawCalls();
    loadCurrentImage(dataURL);

    expect(calls).toMatchSnapshot();
  });
});
