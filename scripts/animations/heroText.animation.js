export const heroTextAnimation = () => {
  const letterF = document.querySelector(".js-fitness-f");

  const animateOnHold = () => {
    setTimeout(() => {
      letterF.classList.add("fitness-F-animation");

      setTimeout(() => {
        letterF.classList.remove("fitness-F-animation");
        animateOnHold();
      }, 4000);
    }, 4000);
  };

  animateOnHold();
};

const type = (element, letter) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.textContent += letter;
      resolve();
    }, 80);
  });
};

export const typeTextAnimation = async () => {
  const textElement = document.querySelector(".js-type-text");

  const text =
    "xpert coaching, top equipment, and a supportive community.".split("");

  textElement.textContent = "E";

  for (const letter of text) {
    await type(textElement, letter);
  }
};

export const startTypingAnimation = () => {
  setTimeout(async () => {
    await typeTextAnimation();
    startTypingAnimation();
  }, 6000);
};
