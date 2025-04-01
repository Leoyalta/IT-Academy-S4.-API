interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}
const getJoke = async (): Promise<JokeResponse | string> => {
  const options: RequestInit = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch("https://icanhazdadjoke.com/", options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: JokeResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Request error:", error);
    return "Uuups, there is some error 😢 Try again later!";
  }
};

export default getJoke;
