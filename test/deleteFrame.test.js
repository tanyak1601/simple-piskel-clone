import deleteFrame from '../src/components/frame-section/js/deleteFrame';
import makeDisableButtons from '../src/components/frame-section/js/makeDisableButtons';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  activeFrame: 1,
  frames: ['xx', 'xx'],
}));

jest.mock('../src/components/frame-section/js/makeDisableButtons');

describe('deleteFrame', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="frames"><div class="frame frame_active">
                                  <canvas class="frame__canvas"></canvas>
                                  <div id="buttonDelete1" class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div>
                              <div class="frame frame frame_active">
                                  <canvas id="targetCanvas" class="frame__canvas"></canvas>
                                  <div id="buttonDelete2" class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div></div>`;
  });

  it('should not delete frame', () => {
    const e = { target: document.getElementById('targetCanvas') };
    deleteFrame(e);

    expect(mockState.activeFrame).toEqual(1);
    expect(mockState.frames.length).toEqual(2);
    expect(makeDisableButtons.mock.calls.length).toBe(0);
  });

  it('should delete frame', () => {
    const e = { target: document.getElementById('buttonDelete2') };
    mockState.activeFrame = 0;
    deleteFrame(e);

    expect(mockState.activeFrame).toEqual(0);
    expect(mockState.activeFrame).toEqual(0);
    expect(mockState.frames.length).toEqual(1);
    expect(makeDisableButtons.mock.calls.length).toBe(1);
  });

  it('should delete frame', () => {
    const e = { target: document.getElementById('buttonDelete1') };
    mockState.activeFrame = 1;
    mockState.frames = ['xx', 'xx'];
    deleteFrame(e);

    expect(mockState.activeFrame).toEqual(0);
    expect(mockState.frames.length).toEqual(1);
    expect(makeDisableButtons.mock.calls.length).toBe(2);
  });
});
