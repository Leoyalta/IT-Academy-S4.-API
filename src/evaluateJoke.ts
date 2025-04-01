const reportJokes = [];
const evaluateJoke = (joke, score) => {
  if (!joke || joke === "error") return;

  const existingJoke = reportJokes.find((obj) => obj.joke === joke);

  if (existingJoke) {
    existingJoke.score = score;
    existingJoke.date = new Date().toISOString();
  } else {
    reportJokes.push({
      joke: joke,
      score: score,
      date: new Date().toISOString(),
    });
  }

  console.log("Rated jokes:", reportJokes);
};

export default evaluateJoke;
