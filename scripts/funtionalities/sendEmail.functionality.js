export const sendEmailFunctionality = () => {
  const contactSubmitBtn = document.querySelector(".js-contat-submit-btn");

  contactSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailInfo = {
      name: document.querySelector(".js-conatc-name").value,
      email: document.querySelector(".js-contact-email").value,
      subject: document.querySelector(".js-email-subject").value,
      body: document.querySelector(".js-email-body").value,
    };

    const emailTemplate = `
    Name: ${emailInfo.name}
    Email: ${emailInfo.email}
    
    ${emailInfo.body}
    `;

    const mailtoLink = `mailto:tallamichael007@gmail.com?subject=${encodeURIComponent(
      emailInfo.subject
    )}&body=${encodeURIComponent(emailTemplate)}`;

    window.location.href = mailtoLink;

    document.querySelector(".js-conatc-name").value = "";
    document.querySelector(".js-contact-email").value = "";
    document.querySelector(".js-email-subject").value = "";
    document.querySelector(".js-email-body").value = "";
  });
};
