export const navBarAnimation = () => {
  const navBar = document.querySelector(".js-nav-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 300 && window.innerWidth > 600) {
      navBar.classList.add("scroll-nav");
    } else if (
      window.scrollY > window.innerHeight - 700 &&
      window.innerWidth > 600
    ) {
      navBar.classList.add("transperent-nav");
    } else if (
      window.scrollY > window.innerHeight - 150 &&
      window.innerWidth < 600
    ) {
      navBar.classList.add("scroll-nav");
    } else if (
      window.scrollY > window.innerHeight - 600 &&
      window.innerWidth < 600
    ) {
      navBar.classList.add("transperent-nav");
    } else {
      navBar.classList.remove("transperent-nav");
      navBar.classList.remove("scroll-nav");
    }
  });
};
