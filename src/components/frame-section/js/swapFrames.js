function swapFrames(frame1, frame2, index1, index2) {
  if (index1 < index2) {
    frame2.insertAdjacentElement('afterend', frame1);
  } else {
    frame2.insertAdjacentElement('beforebegin', frame1);
  }
}

export default swapFrames;
