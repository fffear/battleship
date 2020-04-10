import Events from "./EventPubSub/EventPubSub";
import styles from "./index.css";
import GameDisplayStyles from "./GameDisplay/GameDisplay.css";
import Game from "./Game/Game";
import GameDisplay from "./GameDisplay/GameDisplay";
import GameController from "./GameController/GameController";

// Add event listener to computer player board to attack square

// let rootDiv = document.createElement("div");
// rootDiv.setAttribute("id", "root");
// document.body.appendChild(rootDiv);

let rootDiv = document.querySelector("#root");
let boardContainer = document.querySelector(".board-container");

// let boardContainer = document.createElement("div");
// boardContainer.classList.add("board-container");
boardContainer.classList.add(styles.boardContainer);
rootDiv.appendChild(boardContainer);

// console.log(Game);

// GameController.startNewGame(Game());

// GameDisplay.renderGameboards();

// let game = Game();

// let board1 = GameDisplay.createBoard(
//   game.gameboard1.allCoordinates,
//   boardContainer
// );

// let board2 = GameDisplay.createBoard(
//   game.gameboard2.allCoordinates,
//   boardContainer
// );

// GameDisplay.renderBoard(board1, boardContainer);
// GameDisplay.renderBoard(board2, boardContainer);

// let playerGameboard = document.querySelector(`.${GameDisplayStyles.board}`);

// console.log(playerGameboard);

// playerGameboard.addEventListener("click", e => {
//   let coordinates = GameInteraction.attackSquare(e);

//   if (!coordinates) return;

//   game.player1.attack(game.gameboard1, coordinates);

//   GameDisplay.renderUpdatedTile(coordinates.tile, game.gameboard1, coordinates);
// });

// let div = document.querySelector("div");
// div.classList.add(styles.diffBack);
// console.log(div);
