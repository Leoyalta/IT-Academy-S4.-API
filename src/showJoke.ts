import fetchAPI from "./fetchAPI";

const showJokeBox = document.querySelector(".joke-box");

const showJokeFunc = async () => {
  await fetchAPI()
    .then((data) => {
      console.log(data);

      showJokeBox.innerHTML = data.joke;
    })
    .catch((err) => {
      console.log(err);

      showJokeBox.innerHTML = err.joke;
    });
};
export default showJokeFunc;
