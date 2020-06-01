import getKeyboardShortcuts from '../src/components/keyboard-shortcuts/js/getKeyboardShortcuts';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  keyboardShortcuts: {
    pencil: 'p',
    pipette: 'o',
    bucket: 'b',
    'paint-all': 'a',
    eraser: 'e',
    stroke: 'l',
    fullscreen: 'f',
    'add-frame-button': 'd',
    'palette-swap': 'x',
  },
}));

describe('getKeyboardShortcuts', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="pencil"></div>
                              <div id="pipette"></div>
                              <div id="bucket"></div>`;
  });

  it('should not get keyboard shortcuts', () => {
    const e = { key: 'w' };
    getKeyboardShortcuts(e);

    expect(mockState.targetToolName).toBeUndefined();
  });

  it('should get keyboard shortcuts', () => {
    const e = { key: 'p' };
    getKeyboardShortcuts(e);

    expect(mockState.targetToolName).toEqual('pencil');
  });

  it('should get keyboard shortcuts', () => {
    const e = { key: 'o' };
    getKeyboardShortcuts(e);

    expect(mockState.targetToolName).toEqual('pipette');
  });
});
