import toggleFullScreen from '../src/components/animated-preview/js/toggleFullScreen';


describe('toggleFullScreen', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="animated-preview"></div>';
  });

  it('should turn on fullscreen mode', () => {
    const animatedPreview = document.getElementById('animated-preview');
    animatedPreview.requestFullscreen = jest.fn();
    toggleFullScreen();

    expect(animatedPreview.requestFullscreen.mock.calls.length).toBe(1);
  });

  it('should turn off fullscreen mode', () => {
    document.fullscreenElement = true;
    document.exitFullscreen = jest.fn();
    toggleFullScreen();

    expect(document.exitFullscreen.mock.calls.length).toBe(1);
  });
});
