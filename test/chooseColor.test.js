import { chooseColor } from '../src/components/palette/js/handleColor';
import mockState from '../src/screens/piskel/js/state';

jest.mock('../src/screens/piskel/js/state', () => ({
  mainColor: 'red',
  additionalColor: 'grey',
}));


describe('chooseColor', () => {
  it('should choose main color', () => {
    document.body.innerHTML = `<input id='main-color-input' value='white'></input>
                               <input id='additional-color-input' value='black'></input>
                               <div id='main-color-label'></div>
                               <div id='additional-color-label'></div>`;
    const e = {target: document.getElementById('main-color-input')};
    chooseColor(e);

    expect(mockState.mainColor).toEqual('white');
  });

  it('should choose additional color', () => {
    document.body.innerHTML = `<input id='main-color-input' value='white'></input>
                               <input id='additional-color-input' value='black'></input>
                               <div id='main-color-label'></div>
                               <div id='additional-color-label'></div>`;
    const e = {target: document.getElementById('additional-color-input')};
    chooseColor(e);

    expect(mockState.additionalColor).toEqual('black');
  });
});
