import {
  Ship,
  Gameboard,
  Player,
  ComputerPlayer,
} from "../factories/factoryFunctions";

const Game = (() => {
  let humanPlayer = Player();
  let computerPlayer = ComputerPlayer();
  let _computerGameboard = Gameboard();
  let _humanGameboard = Gameboard();
  let _humanFleet = {
    carrier: Ship(5),
    battleship: Ship(4),
    cruiser: Ship(3),
    submarine: Ship(3),
    destroyer: Ship(2),
  };

  let _computerFleet = {
    carrier: Ship(5),
    battleship: Ship(4),
    cruiser: Ship(3),
    submarine: Ship(3),
    destroyer: Ship(2),
  };

  const startNewGame = () => {
    _computerGameboard = Gameboard();
    _humanGameboard = Gameboard();

    _humanFleet = {
      carrier: Ship(5),
      battleship: Ship(4),
      cruiser: Ship(3),
      submarine: Ship(3),
      destroyer: Ship(2),
    };

    _computerFleet = {
      carrier: Ship(5),
      battleship: Ship(4),
      cruiser: Ship(3),
      submarine: Ship(3),
      destroyer: Ship(2),
    };
  };

  const gameOver = () => {
    if (_computerGameboard.allShipsSunk()) {
      return true;
    } else if (_humanGameboard.allShipsSunk()) {
      return true;
    } else {
      return false;
    }
  };

  const gameWinner = () => {
    if (_computerGameboard.allShipsSunk()) {
      return "human";
    } else if (_humanGameboard.allShipsSunk()) {
      return "computer";
    } else {
      return "no winner";
    }
  };

  return {
    get computerGameboard() {
      return _computerGameboard;
    },

    get humanGameboard() {
      return _humanGameboard;
    },

    get humanFleet() {
      return _humanFleet;
    },

    get computerFleet() {
      return _computerFleet;
    },

    humanPlayer,
    computerPlayer,
    startNewGame,
    gameOver,
    gameWinner,
  };
})();

export default Game;
