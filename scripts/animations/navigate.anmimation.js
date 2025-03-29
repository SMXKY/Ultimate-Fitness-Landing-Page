const extractText = (element) => {
  if (element.querySelector(".js-link-text")) {
    return element.querySelector(".js-link-text").innerHTML;
  }

  return element.innerHTML;
};

const reciprocate = (link) => {
  const navLinkElementsSideBar = document.querySelectorAll(
    ".js-nav-link-side-bar"
  );
  const navLinkElements = document.querySelectorAll(".js-nav-link");

  if (link.classList.contains("js-nav-link")) {
    navLinkElementsSideBar.forEach((navLink) => {
      if (extractText(link) === extractText(navLink)) {
        navLink.click();
      }
    });

    return;
  }

  navLinkElements.forEach((navLink) => {
    if (extractText(link) === extractText(navLink)) {
      navLink.click();
    }
  });
};

export const navigateAnimation = () => {
  const navLinkElements = document.querySelectorAll(".js-nav-link");

  navLinkElements.forEach((link) => {
    link.addEventListener("click", () => {
      navLinkElements.forEach((link) => link.classList.remove("isOn"));
      link.classList.add("isOn");
      reciprocate(link);
    });
  });
};

export const sideBarNavigateAnimation = () => {
  const navLinkElements = document.querySelectorAll(".js-nav-link-side-bar");

  navLinkElements.forEach((link) => {
    link.addEventListener("click", () => {
      navLinkElements.forEach((link) =>
        link.classList.remove("side-bar-link-isOn")
      );

      // console.log("side-bar-link-isOn");
      link.classList.add("side-bar-link-isOn");
    });
  });
};
