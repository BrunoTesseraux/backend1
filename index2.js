function randomZahl() {
  return new Promise((resolve, reject) => {
    const zufallsZahl = Math.floor(Math.random() * 11);
    if (zufallsZahl <= 6) {
      reject(
        new Error(`Die Zahl ist ${zufallsZahl} und somit kleiner gleich 6`)
      );
    } else {
      resolve(zufallsZahl);
    }
  });
}
randomZahl()
  .then((result) => {
    console.log(`Die Zahl ist: ${result}`);
  })
  .catch((error) => {
    console.error(`Fehler: ${error.message}`);
  });
