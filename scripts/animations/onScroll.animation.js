import { snapBackToCurrentLocationLink } from "./navLinks.animation.js";

export const onScrollAnimations = () => {
  const observeAndAnimate = (element, revealClass) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //   console.log(element, "is being observed");
          entry.target.classList.add(revealClass);
        } else {
          entry.target.classList.remove(revealClass);
        }
      });
    });

    observer.observe(element);
  };

  const aboutUsTitleElement = document.querySelector(".js-about-us-title");
  const aboutUsTextElement = document.querySelector(".js-about-us-text");

  const servicesTitleElement = document.querySelector(".js-services-title");
  const serviceCards = document.querySelectorAll(".js-service-card");

  const reviewsTitle = document.querySelector(".js-review-title");

  const contactUsTitle = document.querySelector(".js-contact-us-title");
  const contactEntries = document.querySelectorAll(
    ".js-contact-information-entry"
  );
  const contactForm = document.querySelector(".js-contact-us-form");

  const leftFooter = document.querySelector(".js-left-footer-content");
  const rightFooter = document.querySelector(".js-right-footer");
  const footerLinks = document.querySelectorAll(".js-footer-link");

  observeAndAnimate(aboutUsTitleElement, "show-title");
  observeAndAnimate(aboutUsTextElement, "show-about-us-text");

  observeAndAnimate(servicesTitleElement, "showServices-title");
  serviceCards.forEach((card) => {
    observeAndAnimate(card, "show-service");
  });

  observeAndAnimate(reviewsTitle, "show-review-title");

  observeAndAnimate(contactUsTitle, "show-contact-us-title");
  contactEntries.forEach((entry) => {
    observeAndAnimate(entry, "show-contact-information-entry");
  });
  observeAndAnimate(contactForm, "show-contact-form");

  observeAndAnimate(leftFooter, "show-left-footer");
  observeAndAnimate(rightFooter, "show-right-footer");
  footerLinks.forEach((link) => {
    observeAndAnimate(link, "show-footer-link-el");
  });
};

export const snapSections = () => {
  const observeAndMoveLInkCursor = (element, linkToSnap) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // observer.disconnect();
          navigateAnimation(linkToSnap);
        }
      });
    });

    observer.observe(element);
  };

  const navigateAnimation = (linkToSnap) => {
    const navLinkElements = document.querySelectorAll(".js-nav-link");
    navLinkElements.forEach((link) => link.classList.remove("isOn"));

    linkToSnap.classList.add("isOn");
    snapBackToCurrentLocationLink();
  };

  const aboutSection = document.querySelector(".js-about-us-title");
  const aboutLink = document.querySelector(".js-about-link");

  const homeSection = document.querySelector(".js-home-seciton");
  const homeLink = document.querySelector(".js-home-link");

  const servicesSection = document.getElementById(".js-service-section");
  const servicesLink = document.querySelector(".js-services-link");

  const reviewsSection = document.getElementById(".js-service-section");
  const reviewsLink = document.querySelector(".js-services-link");

  observeAndMoveLInkCursor(aboutSection, aboutLink);
  observeAndMoveLInkCursor(homeSection, homeLink);
  // observeAndMoveLInkCursor(servicesSection, servicesLink);
};
