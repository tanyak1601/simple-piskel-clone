import changeCurrentFrame from '../src/components/frame-section/js/changeCurrentFrame';
import loadCurrentImage from '../src/components/canvas/js/loadCurrentImage';

import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  activeFrame: 0,
}));

jest.mock('../src/components/canvas/js/loadCurrentImage');

describe('changeCurrentFrame', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="frames"><div class="frame frame_active">
                                  <canvas class="frame__canvas"></canvas>
                                  <div class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div>
                              <div class="frame frame">
                                  <canvas id="targetCanvas" class="frame__canvas"></canvas>
                                  <div id="buttonDelete" class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div></div>`;
  });

  it('should change current frame', () => {
    const e = { target: document.getElementById('targetCanvas') };
    changeCurrentFrame(e);

    expect(mockState.activeFrame).toEqual(1);
    expect(loadCurrentImage.mock.calls.length).toBe(1);
  });

  it('should not change current frame', () => {
    const e = { target: document.getElementById('buttonDelete') };
    mockState.activeFrame = 0;
    changeCurrentFrame(e);

    expect(mockState.activeFrame).toEqual(0);
    expect(loadCurrentImage.mock.calls.length).toBe(1);
  });
});
