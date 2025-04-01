import { ChuckNorrisJokeResponse } from "../data-fetching/fetchChuckJokes";

interface TransformedJoke {
  joke: string;
  id: string;
}

const transformJokeData = (data: ChuckNorrisJokeResponse): TransformedJoke => {
  return {
    joke: data.value,
    id: data.id,
  };
};

export default transformJokeData;
