import addFrame from '../src/components/frame-section/js/addFrame';
import saveFrame from '../src/components/frame-section/js/saveFrame';
import getPreviewAnimation from '../src/components/animated-preview/js/getPreviewAnimation';
import makeDisableButtons from '../src/components/frame-section/js/makeDisableButtons';
import makeAbleButtons from '../src/components/frame-section/js/makeAbleButtons';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  activeFrame: 0,
}));

jest.mock('../src/components/frame-section/js/saveFrame');
jest.mock('../src/components/animated-preview/js/getPreviewAnimation');
jest.mock('../src/components/frame-section/js/makeAbleButtons');
jest.mock('../src/components/frame-section/js/makeDisableButtons');

describe('addFrame', () => {
  it('should add new frame', () => {
    document.body.innerHTML = '<div id="frames"><div id="firstFrame" class="frame_active"></div></div>'
    + '<div id="canvas-section"><canvas id="canvas"></canvas></div>';
    mockState.ctx = document.getElementById('canvas').getContext('2d');
    addFrame();

    expect(mockState.activeFrame).toEqual(1);
    expect(saveFrame.mock.calls.length).toBe(1);
    expect(getPreviewAnimation.mock.calls.length).toBe(1);
    expect(makeAbleButtons.mock.calls.length).toBe(1);
  });

  it('should add first frame', () => {
    document.body.innerHTML = '<div id="frames"></div>'
    + '<div id="canvas-section"><canvas id="canvas"></canvas></div>';
    mockState.ctx = document.getElementById('canvas').getContext('2d');
    mockState.activeFrame = null;
    addFrame();

    expect(mockState.activeFrame).toEqual(0);
    expect(saveFrame.mock.calls.length).toBe(2);
    expect(getPreviewAnimation.mock.calls.length).toBe(2);
    expect(makeDisableButtons.mock.calls.length).toBe(1);
  });
});
