import { addRandomCell, clearCells, handleButtonChange } from "./domFunctions";
import { getTotalPoints, isGameOver, isWin } from "./helpers";
import { moveUp, moveDown, moveLeft, moveRight } from "./moveFunctions";

export const rows = document.getElementsByClassName("field-row");
export const cells = document.getElementsByClassName("field-cell");

const button = document.querySelector(".button");
const message = document.querySelectorAll(".message");
const score = document.querySelector(".game-score");

let isPlaying = false;

const resetTheGame = () => {
  button.removeEventListener("click", resetTheGame);

  clearCells();
  score.textContent = 0;
  handleButtonChange(button, "Start");
  message[0].classList.add("hidden");
  message[1].classList.add("hidden");
  message[2].classList.remove("hidden");
  button.addEventListener("click", startTheGame);

  isPlaying = false;
};

const startTheGame = () => {
  button.removeEventListener("click", startTheGame);

  addRandomCell();
  handleButtonChange(button, "Restart");
  button.addEventListener("click", resetTheGame);
  message[2].classList.add("hidden");

  isPlaying = true;
};

button.addEventListener("click", startTheGame);

document.addEventListener("keydown", (e) => {
  if (!isPlaying) {
    return;
  }

  if (isGameOver(cells)) {
    message[0].classList.remove("hidden");
    isPlaying = false;

    return;
  }

  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      break;
  }

  score.textContent = getTotalPoints(cells);

  if (isWin(cells)) {
    message[1].classList.remove("hidden");
    isPlaying = false;
  }
});

// MOBILE - SWIPE

const swipeArea = document.querySelector(".game-field");
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

swipeArea.addEventListener("touchstart", (event) => {
  event.preventDefault();
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

swipeArea.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;
  touchEndY = event.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  if (!isPlaying) {
    return;
  }

  if (isGameOver(cells)) {
    message[0].classList.remove("hidden");
    isPlaying = false;

    return;
  }

  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = touchEndY - touchStartY;
  const minSwipeDistance = 25;
  const isHorizontalSwipe = Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY);

  if (isHorizontalSwipe) {
    const isRightSwipe = swipeDistanceX > minSwipeDistance;
    const isLeftSwipe = swipeDistanceX < -minSwipeDistance;

    if (isRightSwipe) {
      moveRight();
    } else if (isLeftSwipe) {
      moveLeft();
    }
  } else {
    const isDownSwipe = swipeDistanceY > minSwipeDistance;
    const isUpSwipe = swipeDistanceY < -minSwipeDistance;

    if (isDownSwipe) {
      moveDown();
    } else if (isUpSwipe) {
      moveUp();
    }
  }

  score.textContent = getTotalPoints(cells);

  if (isWin(cells)) {
    message[1].classList.remove("hidden");
    isPlaying = false;
  }
}
