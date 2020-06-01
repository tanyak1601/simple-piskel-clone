import loadCurrentSession from '../src/screens/piskel/js/loadCurrentSession';
import state from '../src/screens/piskel/js/state';

Storage.prototype.getItem = jest.fn(() => '{"canvasCssSize":512,"currentTool":"bucket","canvasSize":32}');

describe('loadCurrentSession', () => {
  it('should load current session parameters', () => {
    loadCurrentSession();
    expect(state.canvasCssSize).toBeDefined();
    expect(state.currentListeners).toBeDefined();
    expect(state.currentTool).toEqual('bucket');
    expect(state.canvasSize).toEqual(32);
  });
});
