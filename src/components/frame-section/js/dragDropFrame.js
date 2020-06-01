import changeCurrentFrame from './changeCurrentFrame';
import swapFrames from './swapFrames';
import saveFrame from './saveFrame';

function dragDropFrame(e) {
  if (!e.target.classList.contains('frame__button_move')) return;

  const frames = document.getElementById('frames');
  const grabFrame = e.target.parentElement;
  const positionX0 = grabFrame.offsetLeft;
  const positionX = e.clientX;
  const positionY0 = grabFrame.offsetTop;

  const frameShadow = document.createElement('div');
  frameShadow.className = 'frame-shadow';
  frameShadow.style.left = `${positionX0}px`;
  frameShadow.style.top = `${positionY0}px`;
  frames.appendChild(frameShadow);

  grabFrame.style.zIndex = 1;
  const startPositionY = e.clientY;

  let targetElement = e.target;

  function onMouseMove(event) {
    const newPositionY = event.clientY - startPositionY;
    grabFrame.style.top = `${newPositionY}px`;

    grabFrame.style.zIndex = -1;
    const newTargetElement = document.elementFromPoint(positionX, event.clientY);
    grabFrame.style.zIndex = 1;

    if (targetElement === null || newTargetElement.parentElement !== targetElement.parentElement) {
      if (document.querySelector('.frame-target')) {
        document.querySelector('.frame-target').classList.remove('frame-target');
      }

      if (newTargetElement.classList.contains('frame__canvas')) {
        targetElement = newTargetElement;
        newTargetElement.parentElement.classList.add('frame-target');
      } else {
        targetElement = null;
      }
    }
  }

  function onMouseUp(event) {
    grabFrame.style.zIndex = -1;
    const targetElem = document.elementFromPoint(positionX, event.clientY);
    grabFrame.style.zIndex = 1;
    const dropFrame = targetElem.parentElement;

    frameShadow.remove();
    grabFrame.style.removeProperty('z-index');
    grabFrame.style.removeProperty('top');

    if (dropFrame.classList.contains('frame')) {
      dropFrame.classList.remove('frame-target');

      const indexGrabFrame = Array.from(grabFrame.parentNode.children).indexOf(grabFrame);
      const indexDropFrame = Array.from(dropFrame.parentNode.children).indexOf(dropFrame);
      swapFrames(grabFrame, dropFrame, indexGrabFrame, indexDropFrame);

      const allFrame = Array.from(document.querySelectorAll('.frame'));

      allFrame.forEach((item) => {
        saveFrame(item);
      });

      changeCurrentFrame(event);
    }

    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

export default dragDropFrame;
