import { randomGridPostion } from "./gird.js";
import { onSnake, expandSnake } from "./Snake.js";

let food = { x: 10, y: 1 };
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = randomGridPostion();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
function getRamdomFoodPosition() {
  let newFoodPostition;
  while (newFoodPostition == null || onSnake(newFoodPostition)) {
    newFoodPostition = randomGridPostion();
  }
  return newFoodPostition;
}
