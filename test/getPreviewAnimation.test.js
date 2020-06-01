import getPreviewAnimation from '../src/components/animated-preview/js/getPreviewAnimation';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  frames: ['xxx'],
  animationSpeed: 12,
}));

jest.useFakeTimers();

describe('getPreviewAnimation', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="animated-preview-player"></div>'
    + '<div id="speed-value-label"></div>'
    + '<div id="speed-input-range"></div>';
  });

  it('should start preview animation', () => {
    getPreviewAnimation();

    jest.advanceTimersByTime(1000);

    expect(mockState.timer).toBeDefined();
    expect(document.getElementById('speed-value-label').innerText).toEqual('12 FPS');
    expect(document.getElementById('speed-input-range').value).toEqual(12);
    expect(document.getElementById('animated-preview-player').style.backgroundImage).toEqual('url(xxx)');
  });

  it('should not start preview animation', () => {
    mockState.animationSpeed = 0;
    getPreviewAnimation();

    jest.advanceTimersByTime(1000);

    expect(document.getElementById('speed-value-label').innerText).toEqual('0 FPS');
    expect(document.getElementById('speed-input-range').value).toEqual(0);
    expect(document.getElementById('animated-preview-player').style.backgroundImage).toEqual('');
  });

  it('should start preview animation without background images', () => {
    mockState.frames = [];
    mockState.animationSpeed = 2;
    getPreviewAnimation();

    jest.advanceTimersByTime(1000);

    expect(document.getElementById('animated-preview-player').style.backgroundImage).toEqual('none');
  });
});
