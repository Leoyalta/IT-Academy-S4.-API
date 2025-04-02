interface JokeReport {
  joke: string;
  score: number;
  date: string;
}

const reportJokes: JokeReport[] = [];

const evaluateJoke = (joke: string, score: number): void => {
  if (!joke || joke === "error") return;

  const existingJoke = reportJokes.find((obj) => obj.joke === joke);

  if (existingJoke) {
    existingJoke.score = score;
    existingJoke.date = new Date().toISOString();
  } else {
    reportJokes.push({
      joke,
      score,
      date: new Date().toISOString(),
    });
  }

  console.log("Rated jokes:", reportJokes);
};

export default evaluateJoke;
