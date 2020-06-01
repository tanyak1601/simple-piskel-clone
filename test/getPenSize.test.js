import getPenSize from '../src/components/pen-size-container/js/getPenSize';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  penSize: 2,
}));

jest.mock('../src/components/frame-section/js/makeDisableButtons');

describe('changePenSize', () => {
  it('should get pen size', () => {
    document.body.innerHTML = `<div data-size='1' class="pen-size"></div>
                               <div data-size='2' class="pen-size"></div>`;
    getPenSize();

    expect(document.querySelector("[data-size='2']").classList.contains('pen-size_active')).toEqual(true);
  });
});
