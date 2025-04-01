import { reviews } from "../data/reviews.js";
export const renderingReviews = () => {
  const reviewSectionElement = document.querySelector(".js-reveiw-section");

  let reviewHTML = "";

  reviews.forEach((review, id) => {
    reviewHTML += `          
        <div class="review-card" data-id="${id}">
                <div class="reviewer-information">
                <img
                    src="./assets/${review.image}"
                    alt="reviewwer-profifile-picture"
                    class="reviewer-profile-picture"
                />

                <div class="reviewer-details">
                    <p class="reviewer-name">${review.name}</p>
                    <p class="reviewer-email">${review.email}</p>
                </div>
                </div>

                <div class="review-text js-review-text" data-reveiwtextid="${id}">
                    ${review.review}
                </div>

                <p
                class="review-see-more-btn js-review-see-more-btn"
                data-reviewseemorebtnid="${id}"
                >
                See more
                </p>
        </div>`;
  });

  reviewSectionElement.innerHTML = reviewHTML;
};
