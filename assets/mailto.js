(function () {
  const form = document.querySelector("#request-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const subject = `Anfrage: ${data.get("Anfrageart") || "Kuhnert Autoverwertung"}`;
    const lines = [
      "Neue Anfrage über die Website",
      "",
      `Name: ${data.get("Name") || ""}`,
      `Telefon: ${data.get("Telefon") || ""}`,
      `E-Mail: ${data.get("E-Mail") || ""}`,
      `Anfrageart: ${data.get("Anfrageart") || ""}`,
      "",
      `Automarke: ${data.get("Automarke") || ""}`,
      `Modell / Typ: ${data.get("Modell / Typ") || ""}`,
      `Baujahr: ${data.get("Baujahr") || ""}`,
      `Rollfähig: ${data.get("Rollfähig") || ""}`,
      `Abgemeldet: ${data.get("Abgemeldet") || ""}`,
      `Standort: ${data.get("Standort") || ""}`,
      "",
      "Nachricht:",
      data.get("Nachricht") || data.get("Weitere Angaben") || ""
    ];

    window.location.href =
      "mailto:Auto-Verwertung@t-online.de" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;
  });
})();
