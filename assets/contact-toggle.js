(function () {
  const buttons = Array.from(document.querySelectorAll(".inquiry-option"));
  const form = document.querySelector("#request-form");
  const submit = document.querySelector(".inquiry-submit");
  const typeInput = document.querySelector("#art");
  const root = document.querySelector(".inquiry-section");
  const standort = document.querySelector("#standort");

  if (!buttons.length || !form || !root || !submit || !typeInput) return;

  function setMode(mode) {
    const isCar = mode === "Autoentsorgung";
    root.classList.toggle("is-car", isCar);
    typeInput.value = mode;
    submit.textContent = isCar ? "Entsorgungsanfrage senden" : "Ersatzteilanfrage senden";
    if (standort) standort.required = isCar;

    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.inquiry === mode);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.inquiry));
  });

  setMode("Ersatzteilanfrage");
})();
