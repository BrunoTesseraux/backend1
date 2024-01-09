function quadration(zahl) {
  return new Promise((resolve, reject) => {
    if (isNaN(zahl)) {
      reject(new Error("Ungültige Eingabe: Es wurde keine Zahl übergeben."));
    } else {
      const quadrierteZahl = zahl * zahl;
      resolve(quadrierteZahl);
    }
  });
}

function wiederholung(startZahl, repetitions) {
  let aktuellerWert = Promise.resolve(startZahl);

  for (let i = 0; i < repetitions; i++) {
    aktuellerWert = aktuellerWert.then((result) => {
      console.log(result);
      return quadration(result);
    });
  }

  aktuellerWert.catch((error) => {
    console.error(error.message);
  });
}

const startZahl = 2;
const repetitions = 5;

wiederholung(startZahl, repetitions);
