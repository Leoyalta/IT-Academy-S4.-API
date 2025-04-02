import evaluateJoke from "./evaluateJoke";
import getNextJoke from "./utlils/getNextJoke";

const showJokeBox = document.querySelector(".joke-box") as HTMLElement;
const rateBox = document.querySelector(".rate-box") as HTMLElement;
const nextBtn = document.querySelector(".btn-joke") as HTMLButtonElement;
const rateBtns = document.querySelectorAll(
  ".rate-btn"
) as NodeListOf<HTMLButtonElement>;

let currentJoke: string = "";

const showJokeFunc = async (): Promise<void> => {
  const data = await getNextJoke();
  console.log(data);

  if (showJokeBox && rateBox) {
    if (typeof data === "object" && data !== null && "joke" in data) {
      showJokeBox.textContent = data.joke;
      currentJoke = data.joke;
      rateBox.classList.remove("is-hidden");
    } else {
      showJokeBox.textContent = "Failed to load the joke. Try again later!";
      rateBox.classList.add("is-hidden");
    }
  }
};

rateBtns.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLButtonElement;
    const score = parseInt(target.getAttribute("data-score") || "0", 10);

    if (currentJoke) {
      evaluateJoke(currentJoke, score);
    }
  });
});

if (nextBtn) {
  nextBtn.addEventListener("click", showJokeFunc);
}

export default showJokeFunc;
