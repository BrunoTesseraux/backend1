function verdoppleNachVerzoegerung(zahl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(zahl)) {
        reject(new Error("Ungültige Eingabe: Es wurde keine Zahl übergeben."));
      } else {
        const verdoppelteZahl = zahl * 2;
        resolve(verdoppelteZahl);
      }
    }, 2000);
  });
}

const eingabeZahl = 5;

verdoppleNachVerzoegerung(eingabeZahl)
  .then((result) => {
    console.log(`Die verdoppelte Zahl ist: ${result}`);
  })
  .catch((error) => {
    console.error(`Fehler: ${error.message}`);
  });
