import { setColor } from '../src/components/palette/js/handleColor';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  mainColor: 'red',
  additionalColor: 'grey',
}));

describe('setColor', () => {
  it('should set color', () => {
    document.body.innerHTML = `<div id='main-color-label'></div>
                               <div id='additional-color-label'></div>`;
    const main = document.getElementById('main-color-label');
    const additional = document.getElementById('additional-color-label');
    setColor();

    expect(main.style.backgroundColor).toEqual('red');
    expect(additional.style.backgroundColor).toEqual('grey');
  });
});
