import Events from "../EventPubSub/EventPubSub";
import styles from "../GameDisplay/GameDisplay.css";
import Game from "../Game/Game";

const GameController = (game => {
  const startNewGame = newGame => {
    game.startNewGame();
    Events.emit("startNewGame", game);
  };

  const humanPlayerTurn = squareData => {
    game.humanPlayer.attack(game.computerGameboard, squareData);

    let tile = squareData.tile;
    let coordinates = { x: squareData.x, y: squareData.y };

    Events.emit("updateTile", {
      tile: tile,
      board: game.computerGameboard,
      coordinates: coordinates
    });

    return;
  };

  const computerPlayerTurn = () => {
    let xCoordinates = game.computerPlayer.getXCoordinates(
      game.computerGameboard.allCoordinates
    );

    const randomXCoordinate =
      xCoordinates[Math.floor(Math.random() * xCoordinates.length)];

    let randomCoordinates = game.computerPlayer.selectRandomCoordinatesStillAvailable(
      game.computerGameboard.allCoordinates,
      randomXCoordinate
    );

    game.computerPlayer.attack(game.humanGameboard, randomCoordinates);

    Events.emit("updateTile", {
      board: game.humanGameboard,
      coordinates: randomCoordinates
    });
  };

  const gameTurn = squareData => {
    new Promise((resolve, reject) => {
      humanPlayerTurn(squareData);
      resolve();
    })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(computerPlayerTurn());
          }, 1000);
        });
      })
      .then(() => {
        game.gameOver();
      });
  };

  // const gameTurn = options => {
  //   const { player, enemyGameboard, coordinates } = options;
  // };

  Events.on("gameTurn", gameTurn);

  return { gameTurn, startNewGame };
})(Game);

export default GameController;
