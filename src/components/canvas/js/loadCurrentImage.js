import state from '../../../screens/piskel/js/state';

async function loadCurrentImage(url) {
  const width = state.canvasSize;
  const height = state.canvasSize;
  state.ctx.clearRect(0, 0, width, height);

  let imageURL;

  if (url) {
    imageURL = url;
  } else {
    imageURL = state.frames[state.activeFrame];
  }

  const img = new Image();
  img.src = imageURL;
  img.onload = () => {
    state.ctx.drawImage(img, 0, 0);
  };
}

export default loadCurrentImage;
