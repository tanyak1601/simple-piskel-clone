import { checkCorrectInput } from '../src/components/keyboard-shortcuts/js/openKeyboardShortcuts';
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

describe('checkCorrectInput', () => {
  it('should check is input value correct (empty value)', () => {
    document.body.innerHTML = `<li>
                                <input id="input" value="">
                                <button id="button" class="shortcuts__item_button_disable">Change</button>
                                <p id="message" class="shortcuts__item_error"></p>
                              </li>`;
    const e = {target: document.getElementById('input')};
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    checkCorrectInput(e);

    expect(message.innerText).toEqual('');
    expect(button.classList.contains('shortcuts__item_button_disable')).toEqual(false);
  });

  it('should check is input value correct (already exists value)', () => {
    document.body.innerHTML = `<li>
                                <input id="input" value="p">
                                <button id="button">Change</button>
                                <p id="message" class="shortcuts__item_error"></p>
                              </li>`;
    const e = {target: document.getElementById('input')};
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    checkCorrectInput(e);

    expect(message.innerText).toEqual('This key already exists, please enter another!');
    expect(button.classList.contains('shortcuts__item_button_disable')).toEqual(true);
  });

  it('should check is input value correct (incorrect value)', () => {
    document.body.innerHTML = `<li>
                                <input id="input" value="123">
                                <button id="button">Change</button>
                                <p id="message" class="shortcuts__item_error"></p>
                              </li>`;
    const e = {target: document.getElementById('input')};
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    checkCorrectInput(e);

    expect(message.innerText).toEqual('Please use only A-Z');
    expect(button.classList.contains('shortcuts__item_button_disable')).toEqual(true);
  });
});
