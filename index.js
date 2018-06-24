const scrollPage = ()=> {
  const pageHeight = window.outerHeight;
  document.querySelectorAll(".invisible").forEach((invis) => {
    if(pageHeight >= invis.getBoundingClientRect().top + (.1 * pageHeight)) {
      invis.classList.toggle("invisible", false);
    }
  });
}

window.addEventListener("scroll", scrollPage);
scrollPage();
