import changePenSize from '../src/components/pen-size-container/js/changePenSize';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  penSize: 1,
}));

jest.mock('../src/components/frame-section/js/makeDisableButtons');

describe('changePenSize', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="pen-size-1" class="pen-size pen-size_active"></div>
                               <div id="pen-size-2" class="pen-size"></div>
                               <div id="pen-size-3" class="pen-size"></div>
                               <div id="pen-size-4" class="pen-size"></div>
                               <div id="canvas"></div>`;
  });

  it('should not change pen size', () => {
    const e = { target: document.getElementById('canvas') };
    changePenSize(e);

    const currentPenSize = document.querySelector('.pen-size_active');
    expect(mockState.penSize).toEqual(1);
    expect(currentPenSize.id).toEqual('pen-size-1');
  });

  it('should not change pen size', () => {
    const e = { target: document.getElementById('pen-size-2') };
    changePenSize(e);

    const currentPenSize = document.querySelector('.pen-size_active');
    expect(mockState.penSize).toEqual(2);
    expect(currentPenSize.id).toEqual('pen-size-2');
  });

  it('should not change pen size', () => {
    const e = { target: document.getElementById('pen-size-3') };
    changePenSize(e);

    const currentPenSize = document.querySelector('.pen-size_active');
    expect(mockState.penSize).toEqual(3);
    expect(currentPenSize.id).toEqual('pen-size-3');
  });

  it('should not change pen size', () => {
    const e = { target: document.getElementById('pen-size-4') };
    changePenSize(e);

    const currentPenSize = document.querySelector('.pen-size_active');
    expect(mockState.penSize).toEqual(4);
    expect(currentPenSize.id).toEqual('pen-size-4');
  });

  it('should not change pen size', () => {
    const e = { target: document.getElementById('pen-size-1') };
    changePenSize(e);

    const currentPenSize = document.querySelector('.pen-size_active');
    expect(mockState.penSize).toEqual(1);
    expect(currentPenSize.id).toEqual('pen-size-1');
  });
});
