export const autoScrollAnimation = () => {
  const reviewContainerElement = document.querySelector(".js-reveiw-section");

  let scrollAnimationId;

  const autoScroll = () => {
    if (
      reviewContainerElement.scrollLeft + reviewContainerElement.clientWidth >=
      reviewContainerElement.scrollWidth - 1
    ) {
      //   reviewContainerElement.scrollLeft = 0;
      cancelAnimationFrame(scrollAnimationId);
      reviewContainerElement.scroll({ left: 0, behavior: "smooth" });
      autoScroll();
    } else {
      reviewContainerElement.scrollLeft += 1;
    }

    scrollAnimationId = requestAnimationFrame(autoScroll);
  };

  reviewContainerElement.addEventListener("mouseover", () => {
    cancelAnimationFrame(scrollAnimationId);
  });

  reviewContainerElement.addEventListener("mouseout", () => {
    autoScroll();
  });
};
