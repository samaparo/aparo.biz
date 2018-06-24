const scrollPage = ()=> {
  const pageHeight = window.outerHeight;
  const windowScroll = window.scrollY;
  document.querySelectorAll(".invisible").forEach((invis) => {
    if(pageHeight + windowScroll >= invis.getBoundingClientRect().top + (.05 * pageHeight)) {
      invis.classList.toggle("invisible", false);
    }
  });
}

window.addEventListener("scroll", scrollPage);
scrollPage();
