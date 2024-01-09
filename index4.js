function randomZahlTimeout(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 1001);
      resolve(randomNumber);
    }, timeout);
  });
}

Promise.all([randomZahlTimeout(1000), randomZahlTimeout(1500)])
  .then((results) => {
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
