function toggleFullScreen() {
  const animatedPreview = document.getElementById('animated-preview');
  if (!document.fullscreenElement) {
    animatedPreview.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export default toggleFullScreen;
