import Ship from "../Ship/Ship";
import Player from "../Player/Player";
import ComputerPlayer from "../Player/ComputerPlayer";
import Gameboard from "../Gameboard/Gameboard";
// import GameDisplay from "../GameDisplay/GameDisplay";

const Game = (() => {
  let humanPlayer = Player();
  let computerPlayer = ComputerPlayer();
  let computerGameboard = Gameboard();
  let humanGameboard = Gameboard();

  const startNewGame = () => {
    player1 = Player();
    player2 = Player();

    gameboard1 = Gameboard();
    gameboard2 = Gameboard();
  };

  const gameOver = () => {
    if (computerGameboard.allShipsSunk()) {
      console.log("You Win!");
      return "";
    } else if (humanGameboard.allShipsSunk()) {
      console.log("Computer Win!");
      return "";
    } else {
      console.log("No ships");
    }
  };

  return {
    computerGameboard,
    humanGameboard,
    humanPlayer,
    computerPlayer,
    startNewGame,
    gameOver
  };
})();

export default Game;
