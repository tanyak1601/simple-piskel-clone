import duplicateFrame from '../src/components/frame-section/js/duplicateFrame';
import drawOnFrame from '../src/components/frame-section/js/drawOnFrame';
import makeAbleButtons from '../src/components/frame-section/js/makeAbleButtons';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  activeFrame: 0,
  frames: ['xx'],
}));

jest.mock('../src/components/frame-section/js/drawOnFrame');
jest.mock('../src/components/frame-section/js/makeAbleButtons');

describe('duplicateFrame', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="frames"><div class="frame frame_active">
                                  <canvas id="canvas" class="frame__canvas"></canvas>
                                  <div " class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div id="buttonDuplicate" class="frame__button frame__button_duplicate"></div>
                              </div></div>`;
  });

  it('should not duplicate frame', () => {
    const e = { target: document.getElementById('canvas') };
    duplicateFrame(e);

    expect(mockState.activeFrame).toEqual(0);
    expect(mockState.frames.length).toEqual(1);
    expect(drawOnFrame.mock.calls.length).toBe(0);
    expect(makeAbleButtons.mock.calls.length).toBe(0);
  });

  it('should duplicate frame', () => {
    const e = { target: document.getElementById('buttonDuplicate') };
    duplicateFrame(e);

    expect(mockState.activeFrame).toEqual(1);
    expect(mockState.frames.length).toEqual(2);
    expect(drawOnFrame.mock.calls.length).toBe(1);
    expect(makeAbleButtons.mock.calls.length).toBe(1);
  });
});
