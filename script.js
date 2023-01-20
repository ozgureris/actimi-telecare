var videos = document.getElementsByTagName("video"),
fraction = 0.5;
function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible < fraction) {
                video.pause();
            }
    }
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  })
};
