let currentStep = 1;

function nextStep() {
  const currentForm = document.getElementById(`form-step-${currentStep}`);
  const nextForm = document.getElementById(`form-step-${currentStep + 1}`);
  const currentStepElement = document.getElementById(`step-${currentStep}`);
  const nextStepElement = document.getElementById(`step-${currentStep + 1}`);

  if (currentForm.checkValidity()) {
    currentForm.classList.add("hidden");
    nextForm.classList.remove("hidden");

    currentStepElement.classList.remove("active");
    nextStepElement.classList.add("active");

    currentStep++;

    if (currentStep === 3) {
      // Review step
      document.getElementById("review-email").textContent =
        document.getElementById("email").value;
      const selectedService = document
        .querySelector('input[name="service"]:checked')
        .nextElementSibling.querySelector(".font-semibold").textContent;
      document.getElementById("review-service").textContent = selectedService;
    }
  } else {
    currentForm.reportValidity();
  }
}
