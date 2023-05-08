window.onload = function () {
  const video = document.getElementById("video");
  video.play();
  function toggleClass() {
    setInterval(function () {
      document.getElementById("in").classList.toggle("active");
      document.getElementById("out").classList.toggle("active");
    }, video.duration * 500);
  }
  toggleClass();
}