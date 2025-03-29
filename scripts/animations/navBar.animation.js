export const navBarAnimation = () => {
  const navBar = document.querySelector(".js-nav-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 300) {
      navBar.classList.add("scroll-nav");
    } else {
      navBar.classList.remove("scroll-nav");
    }
  });
};
