const btnScroll = document.querySelector(".scrollToTop");

btnScroll.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
