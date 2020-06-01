import { changeColor } from '../src/components/palette/js/handleColor';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  mainColor: 'red',
  additionalColor: 'grey',
}));

describe('changeColor', () => {
  it('should change color', () => {
    document.body.innerHTML = `<div id='main-color-label'></div>
                               <div id='additional-color-label'></div>`;
    changeColor();

    expect(mockState.mainColor).toEqual('grey');
    expect(mockState.additionalColor).toEqual('red');
  });
});
