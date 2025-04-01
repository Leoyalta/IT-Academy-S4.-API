import evaluateJoke from "./evaluateJoke";
import getNextJoke from "./utlils/getNextJoke";

const showJokeBox = document.querySelector(".joke-box");
const rateBox = document.querySelector(".rate-box");
const nextBtn = document.querySelector(".btn-joke");
const rateBtns = document.querySelectorAll(".rate-btn");

let currentJoke = "";

const showJokeFunc = async () => {
  const data = await getNextJoke();
  console.log(data);

  if (data && data.joke) {
    showJokeBox.textContent = data.joke;
    currentJoke = data.joke;
    rateBox.classList.remove("is-hidden");
  } else {
    showJokeBox.textContent = "Failed to load the joke. Try again later!";
    rateBox.classList.add("is-hidden");
  }
};

rateBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const score = parseInt(event.target.getAttribute("data-score"));
    evaluateJoke(currentJoke, score);
  });
});

nextBtn.addEventListener("click", showJokeFunc);

export default showJokeFunc;
