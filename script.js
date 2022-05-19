const btnScroll = document.querySelector(".scrollToTop");

btnScroll.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true
})

sr.reveal('.trend-item', { delay: 350, origin: 'left' })
sr.reveal('.featured-item', { delay: 350, origin: 'right' })

sr.reveal('.blog-item', ".footer-item", { delay: 200, origin: 'bottom' })

