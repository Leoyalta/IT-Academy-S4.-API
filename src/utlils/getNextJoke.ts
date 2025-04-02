import getJoke from "../data-fetching/fetchAPI";
import transformJokeData from "./transformJokeData";
import getRandomChuckNorrisFact from "../data-fetching/fetchChuckJokes";

interface Joke {
  joke: string;
  id: string;
}

const createErrorJoke = (message: string): Joke => ({
  joke: message,
  id: "error",
});

const getNextJoke = async (): Promise<Joke | string> => {
  const joke = await getRandomChuckNorrisFact();
  let dadJoke = await getJoke();

  if (typeof joke === "string") {
    return createErrorJoke(joke);
  }

  const chuckNorrisJoke = transformJokeData(joke);

  if (typeof dadJoke === "string") {
    dadJoke = createErrorJoke(dadJoke);
  }

  return Math.random() > 0.5 ? chuckNorrisJoke : dadJoke;
};

export default getNextJoke;
