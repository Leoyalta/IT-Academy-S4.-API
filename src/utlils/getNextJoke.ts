import getJoke from "../data-fetching/fetchAPI";
import transformJokeData from "./transformJokeData";
import getRandomChuckNorrisFact from "../data-fetching/fetchChuckJokes";
const getNextJoke = async () => {
  const joke = await getRandomChuckNorrisFact();
  const dadJoke = await getJoke();
  const chuckNorrisJoke = transformJokeData(joke);

  if (Math.random() > 0.5) {
    return chuckNorrisJoke;
  }
  return dadJoke;
};
export default getNextJoke;
