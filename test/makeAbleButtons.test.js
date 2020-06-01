import makeAbleButtons from '../src/components/frame-section/js/makeAbleButtons';

describe('makeAbleButtons', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="frames"><div class="frame frame_active buttons-disable">
                                  <canvas class="frame__canvas"></canvas>
                                  <div class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div>
                              <div class="frame frame frame_active">
                                  <canvas class="frame__canvas"></canvas>
                                  <div class="frame__button frame__button_delete"></div>
                                  <div class="frame__button frame__button_move"></div>
                                  <div class="frame__button frame__button_duplicate"></div>
                              </div></div>`;
  });

  it('should delete class buttons-disable', () => {
    const frames = document.getElementById('frames');
    makeAbleButtons();

    expect(frames.firstElementChild.classList.contains('buttons-disable')).toEqual(false);
  });
});
