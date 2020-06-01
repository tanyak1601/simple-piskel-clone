import changeAnimationSpeed from '../src/components/animated-preview/js/changeAnimationSpeed';
import getPreviewAnimation from '../src/components/animated-preview/js/getPreviewAnimation';
import state from '../src/screens/piskel/js/state';

const e = { target: { value: 12 } };
jest.mock('../src/components/animated-preview/js/getPreviewAnimation');

describe('changeAnimationSpeed', () => {
  it('should change state.AnimationSpeed', () => {
    changeAnimationSpeed(e);
    expect(state.animationSpeed).toEqual(12);
    expect(getPreviewAnimation.mock.calls.length).toBe(1);
  });
});
