const scrollPage = () => {
  const pageHeight = window.outerHeight;
  document.querySelectorAll(".invisible").forEach(invis => {
    invis.classList.add("fadeIn");
    if (pageHeight >= invis.getBoundingClientRect().top + 0.1 * pageHeight) {
      invis.classList.toggle("invisible", false);
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", scrollPage);
  scrollPage();
});
