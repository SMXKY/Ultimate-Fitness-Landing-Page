export const hamburgerMenuAnimation = () => {
  const hamburgerMenuButton = document.querySelector(".js-harmbuger-menu");
  const sideBarElement = document.querySelector(".js-side-bar");

  hamburgerMenuButton.addEventListener("click", () => {
    if (!sideBarElement.classList.contains("side-bar-out")) {
      sideBarElement.classList.add("side-bar-out");
      hamburgerMenuButton.classList.add("hamburger-menu-open");
    } else {
      sideBarElement.classList.remove("side-bar-out");
      hamburgerMenuButton.classList.remove("hamburger-menu-open");
    }
  });
};
