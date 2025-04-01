export const seeMoreFunctionalityForReviews = () => {
  const reviewTextElements = document.querySelectorAll(".js-review-text");

  reviewTextElements.forEach((text) => {
    const ogText = text.innerHTML;
    const numberOfCharacters = ogText.split("");
    let newText = ogText;

    if (numberOfCharacters.length > 362) {
      newText = newText.slice(0, 320) + "...";

      document.querySelectorAll(".js-review-see-more-btn").forEach((btn) => {
        if (btn.dataset.reviewseemorebtnid === text.dataset.reveiwtextid) {
          btn.addEventListener("click", () => {
            if (text.innerHTML.split("").length <= 350) {
              text.innerHTML = ogText;
              btn.innerHTML = "See less";
              text.classList.add("responsive-text-incresae");
            } else {
              text.innerHTML = newText;
              btn.innerHTML = "See more";
              text.classList.remove("responsive-text-incresae");
            }
          });
        }
      });
    } else {
      document.querySelectorAll(".js-review-see-more-btn").forEach((btn) => {
        if (btn.dataset.reviewseemorebtnid === text.dataset.reveiwtextid) {
          btn.classList.add("mut-see-more-btn");
          //   btn.addEventListener("click", () => {});
        }
      });
    }

    text.innerHTML = newText;
  });
};
