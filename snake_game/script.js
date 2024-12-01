import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./Snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./gird.js";
//--------------------------------------------------------------------------\\
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    alert("you lost");
  }
  window.requestAnimationFrame(main); // Game loop
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  // Control the frame rate based on SNAKE_SPEED
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update(); // Update game state
  draw(); // Render the game
}

// Start the game loop
window.requestAnimationFrame(main);

function update() {
  updateSnake(); // Update snake logic
  updateFood(); // Update food logic
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard); // Draw the snake
  drawFood(gameBoard); // Draw the food
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
