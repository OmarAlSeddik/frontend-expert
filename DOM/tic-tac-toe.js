const gameHeading = document.getElementById("game-heading");
const restartButton = document.getElementById("restart-button");
const slots = document.querySelectorAll(".game-square");

let turn = 1;
let gameFinished = false;

const gameWon = (player) => {
  return (
    (slots[0].textContent === player &&
      slots[1].textContent === player &&
      slots[2].textContent === player) ||
    (slots[3].textContent === player &&
      slots[4].textContent === player &&
      slots[5].textContent === player) ||
    (slots[6].textContent === player &&
      slots[7].textContent === player &&
      slots[8].textContent === player) ||
    (slots[0].textContent === player &&
      slots[3].textContent === player &&
      slots[6].textContent === player) ||
    (slots[1].textContent === player &&
      slots[4].textContent === player &&
      slots[7].textContent === player) ||
    (slots[2].textContent === player &&
      slots[5].textContent === player &&
      slots[8].textContent === player) ||
    (slots[0].textContent === player &&
      slots[4].textContent === player &&
      slots[8].textContent === player) ||
    (slots[2].textContent === player &&
      slots[4].textContent === player &&
      slots[6].textContent === player)
  );
};

const checkCondition = (player) => {
  if (gameWon(player)) {
    for (const slot of slots) {
      slot.disabled = true;
    }
    gameHeading.textContent =
      player === "X" ? "Player 1 Won!" : "Player 2 Won!";
    restartButton.style.display = "block";
    turn = 1;
    gameFinished = true;
  }
  if (turn === 9) {
    for (const slot of slots) {
      slot.disabled = true;
    }
    gameHeading.textContent = "Tie Game!";
    restartButton.style.display = "block";
    turn = 1;
    gameFinished = true;
  }
};

const play = (event) => {
  if (turn % 2 === 1) {
    event.target.textContent = "X";
    gameHeading.textContent = "Player 2's Turn";
    checkCondition("X");
  }
  if (turn % 2 === 0) {
    event.target.textContent = "O";
    gameHeading.textContent = "Player 1's Turn";
    checkCondition("O");
  }
  if (!gameFinished) {
    event.target.disabled = true;
    turn++;
  }
};

const restart = () => {
  for (const slot of slots) {
    slot.disabled = false;
    slot.textContent = "";
  }
  gameFinished = false;
  restartButton.style.display = "none";
  gameHeading.textContent = "Player 1's Turn";
};

for (const slot of slots) {
  slot.addEventListener("click", play);
}

restartButton.addEventListener("click", restart);
