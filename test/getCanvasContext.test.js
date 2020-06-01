import getCanvasContext from '../src/components/canvas/js/getCanvasContext';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  canvasSize: 32,
}));

describe('getCanvasContext', () => {
  it('should get context of canvas element', () => {
    document.body.innerHTML = '<div id="canvas-section"><canvas id="canvas"></canvas></div>';
    getCanvasContext();

    expect(mockState.canvasSection).toBeDefined();
    expect(mockState.canvas).toBeDefined();
    expect(mockState.ctx).toBeDefined();
    expect(mockState.ctx.canvas.height).toEqual(32);
    expect(mockState.ctx.canvas.width).toEqual(32);
    expect(mockState.ctx.imageSmoothingEnabled).toEqual(false);
  });
});
