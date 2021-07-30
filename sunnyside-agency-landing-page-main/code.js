const menuBtn = document.querySelector(".menuButton");
const navigation = document.querySelector(".header__ul");
const menuBars = document.querySelectorAll(".menuButton__bar");
menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("activeNav");
  menuBars.forEach((element) => {
    element.classList.toggle("barOn");
  });
});
const arrow = document.querySelector(".arrowDown");
const footerLogo = document.querySelector(".footer__logo");
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t * t + b;
    t -= 2;
    return (-c / 2) * (t * t * t * t - 2) + b;
  }

  requestAnimationFrame(animation);
}
arrow.addEventListener("click", () => {
  smoothScroll(".about", 1000);
});
footerLogo.addEventListener("click", () => {
  smoothScroll(".header", 1000);
});
