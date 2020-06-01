import state from '../../../screens/piskel/js/state';
import drawOnFrame from '../../frame-section/js/drawOnFrame';

function hexToRGB(hex) {
  let rColor;
  let gColor;
  let bColor;

  if (hex.includes('rgba')) {
    const colorArray = hex.substring(5, hex.length - 1).split(',');
    [rColor, gColor, bColor] = colorArray;
  } else {
    rColor = parseInt(hex.slice(1, 3), 16);
    gColor = parseInt(hex.slice(3, 5), 16);
    bColor = parseInt(hex.slice(5, 7), 16);
  }

  return [rColor, gColor, bColor, 255];
}

function getColor(x, y, width, data) {
  const position = (y * width * 4) + (x * 4);
  const oldColor = [data[position], data[position + 1], data[position + 2], data[position + 3]];
  return oldColor;
}

function useBucket(e) {
  if (!e.target.id || e.target.id !== 'canvas') return;

  const width = state.canvasSize;
  const height = state.canvasSize;
  const canvasData = state.canvas.getContext('2d').getImageData(0, 0, width, height);
  const pxData = canvasData.data;

  const { pixelSize } = state;
  const [startX, startY] = [Math.floor(e.offsetX / pixelSize), Math.floor(e.offsetY / pixelSize)];

  const currentColor = hexToRGB(state.mainColor);

  const oldColor = getColor(startX, startY, width, pxData);

  if (currentColor.toString() === oldColor.toString()) {
    return;
  }

  const pixelStack = [[startX, startY]];

  let spanLeft;
  let spanRight;
  let y1;

  while (pixelStack.length !== 0) {
    const [x, y] = pixelStack.pop();

    y1 = y;

    while (y1 >= 0 && getColor(x, y1, width, pxData).join() === oldColor.join()) {
      y1 -= 1;
    }

    y1 += 1;
    spanLeft = 0;
    spanRight = 0;

    while (y1 < height && getColor(x, y1, width, pxData).join() === oldColor.join()) {
      const pos = (y1 * width * 4) + (x * 4);
      [pxData[pos], pxData[pos + 1], pxData[pos + 2], pxData[pos + 3]] = currentColor;


      if (spanLeft === 0 && x > 0
          && getColor(x - 1, y1, width, pxData).join() === oldColor.join()) {
        pixelStack.push([(x - 1), y1]);
        spanLeft = 1;
      } else if (spanLeft === 1
        && x > 0 && getColor(x - 1, y1, width, pxData).join() !== oldColor.join()) {
        spanLeft = 0;
      }

      if (spanRight === 0 && x < (width - 1)
          && getColor(x + 1, y1, width, pxData).join() === oldColor.join()) {
        pixelStack.push([(x + 1), y1]);
        spanRight = 1;
      } else if (spanRight === 1 && x < (width - 1)
                 && getColor(x + 1, y1, width, pxData).join() !== oldColor.join()) {
        spanRight = 0;
      }

      y1 += 1;
    }
  }

  state.ctx.putImageData(canvasData, 0, 0);
  drawOnFrame();
}

function getBucket() {
  document.getElementById('bucket').classList.add('tool_active');

  state.canvasSection.addEventListener('click', useBucket);
  state.currentListeners.set('click', useBucket);
}

export default getBucket;
