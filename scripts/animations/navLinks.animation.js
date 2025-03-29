export const snapBackToCurrentLocationLink = () => {
  const navLinksContainerElement = document.querySelector(
    ".js-nav-links-container"
  );
  const navLinkTrackerElement = document.querySelector(".js-nav-link-tracker");
  const navLinkElements = document.querySelectorAll(".js-nav-link");

  navLinkElements.forEach((link) => {
    if (link.classList.contains("isOn")) {
      const linkPositon = link.getBoundingClientRect();
      const cotainerPositon = navLinksContainerElement.getBoundingClientRect();

      const linkCenter =
        linkPositon.left - cotainerPositon.left + linkPositon.width / 4;

      navLinkTrackerElement.style.left = `${linkCenter}px`;
    }
  });
};

export const navLinksAnimation = () => {
  const navLinksContainerElement = document.querySelector(
    ".js-nav-links-container"
  );
  const navLinkTrackerElement = document.querySelector(".js-nav-link-tracker");
  const navLinkElements = document.querySelectorAll(".js-nav-link");

  navLinkElements.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const linkPositon = link.getBoundingClientRect();
      const cotainerPositon = navLinksContainerElement.getBoundingClientRect();

      const linkCenter =
        linkPositon.left - cotainerPositon.left + linkPositon.width / 4;

      navLinkTrackerElement.style.left = `${linkCenter}px`;
    });

    navLinksContainerElement.addEventListener("mouseleave", () => {
      snapBackToCurrentLocationLink();
    });
  });
};
