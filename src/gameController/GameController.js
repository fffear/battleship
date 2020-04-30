import Events from "../EventPubSub/EventPubSub";
import Game from "../game/Game";

const GameController = ((game) => {
  const startNewGame = () => {
    game.startNewGame();
  };

  const humanPlayerTurn = (squareData) => {
    game.humanPlayer.attack(game.computerGameboard, squareData);

    let tile = squareData.tile;
    let coordinates = { x: squareData.x, y: squareData.y };
    // console.log("From human Player Turn:");
    // console.log(squareData);

    Events.emit("updateTile", {
      tile: tile,
      board: game.computerGameboard,
      coordinates: coordinates,
    });

    return;
  };

  const computerPlayerTurn = () => {
    let xCoordinates = game.computerPlayer.getXCoordinates(
      game.humanGameboard.allCoordinates
    );

    const randomXCoordinate =
      xCoordinates[Math.floor(Math.random() * xCoordinates.length)];

    let randomCoordinates = game.computerPlayer.selectRandomCoordinatesStillAvailable(
      game.humanGameboard.allCoordinates,
      randomXCoordinate
    );
    console.log("From computer Player Turn:");
    console.log(randomCoordinates);

    game.computerPlayer.attack(game.humanGameboard, randomCoordinates);

    Events.emit("updateTile", {
      board: game.humanGameboard,
      coordinates: randomCoordinates,
    });
  };

  const gameTurn = (squareData) => {
    let computerBoard = document.querySelector(".computerBoard");
    let humanBoard = document.querySelector(".humanBoard");

    new Promise((resolve, reject) => {
      humanPlayerTurn(squareData);
      Events.emit("removeListenerToClickComputerBoard", computerBoard);
      Events.emit("toggleIndicatePlayerTurn", computerBoard);
      Events.emit("toggleIndicatePlayerTurn", humanBoard);
      resolve();
    })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            computerPlayerTurn();
            Events.emit("addListenerToClickComputerBoard", computerBoard);
            Events.emit("toggleIndicatePlayerTurn", computerBoard);
            Events.emit("toggleIndicatePlayerTurn", humanBoard);
            resolve();
          }, 1000);
        });
      })
      .then(() => {
        if (game.gameOver()) {
          Events.emit("removeListenerToClickComputerBoard", computerBoard);

          if (game.gameWinner() === "human") {
            console.log("You win!");
            Events.emit("displayVictoryMessage", "You win!");
          } else if (game.gameWinner() === "computer") {
            console.log("You lose!");
            Events.emit("displayVictoryMessage", "You lose!");
          }
        }
      });
  };

  Events.on("gameTurn", gameTurn);

  return { gameTurn, startNewGame };
})(Game);

export default GameController;
