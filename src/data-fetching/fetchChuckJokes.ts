export interface ChuckNorrisJokeResponse {
  id: string;
  value: string;
}
const getRandomChuckNorrisFact = async (): Promise<
  ChuckNorrisJokeResponse | string
> => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (!response.ok) {
      throw new Error(`HTTP error. Try again later!`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Request error:", error);
    return "Uuups, there is some error 😢 Try again later!";
  }
};

export default getRandomChuckNorrisFact;
