const fetchAPI = async () => {
  const options = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await fetch("https://icanhazdadjoke.com/", options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request error:", error);
    return { joke: "Uuups, there is some error 😢" };
  }
};
export default fetchAPI;
