import Events from "../EventPubSub/EventPubSub";
import Game from "../game/Game";
import UIBoardUtil from "../UI/UIBoardUtil";
import IntelligentChoiceGenerator from "../IntelligentChoiceGenerator/IntelligentChoiceGenerator";

const GameController = ((game) => {
  const startNewGame = () => {
    game.startNewGame();
  };

  const checkAndDisplaySunkShips = (data) => {
    let { fleet, board } = data;

    for (let ship in fleet) {
      Events.emit("displayShipSunk", {
        ship: fleet[ship],
        board: board,
      });
    }
  };

  const humanPlayerTurn = (squareData) => {
    game.humanPlayer.attack(game.computerGameboard, squareData);

    let tile = squareData.tile;
    let coordinates = { x: squareData.x, y: squareData.y };

    Events.emit("updateTile", {
      tile: tile,
      board: game.computerGameboard,
      coordinates: coordinates,
    });

    checkAndDisplaySunkShips({
      fleet: game.computerFleet,
      board: document.querySelector(".computerBoard"),
    });

    return;
  };

  const computerPlayerTurn = () => {
    let guessedCoordinates;

    if (IntelligentChoiceGenerator.hasNotHit()) {
      guessedCoordinates = game.computerPlayer.getRandomCoordinateStillAvailable(
        game.humanGameboard.allCoordinates
      );

      game.computerPlayer.attack(game.humanGameboard, guessedCoordinates);

      if (
        game.humanGameboard.checkHit(guessedCoordinates.x, guessedCoordinates.y)
      ) {
        IntelligentChoiceGenerator.originalCorrectGuess = guessedCoordinates;
        IntelligentChoiceGenerator.getAdjacentCoordinates(
          guessedCoordinates,
          game.humanGameboard
        );
      }
    } else {
      guessedCoordinates = IntelligentChoiceGenerator.makeSmartGuess();

      game.computerPlayer.attack(game.humanGameboard, guessedCoordinates);

      if (
        game.humanGameboard.checkHit(guessedCoordinates.x, guessedCoordinates.y)
      ) {
        IntelligentChoiceGenerator.updateSmartGuessesIf(
          "correct",
          game.humanGameboard
        );
      } else {
        IntelligentChoiceGenerator.updateSmartGuessesIf(
          "incorrect",
          game.humanGameboard
        );
      }
    }

    Events.emit("updateTile", {
      board: game.humanGameboard,
      coordinates: guessedCoordinates,
    });

    checkAndDisplaySunkShips({
      fleet: game.humanFleet,
      board: document.querySelector(".humanBoard"),
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
        if (game.gameOver()) reject();
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
        if (game.gameOver()) reject();
      })
      .catch(() => {
        Events.emit("removeListenerToClickComputerBoard", computerBoard);

        if (game.gameWinner() === "human") {
          Events.emit("displayVictoryMessage", "You win!");
        } else if (game.gameWinner() === "computer") {
          Events.emit("displayVictoryMessage", "You lose!");
        }
      });
  };

  Events.on("gameTurn", gameTurn);

  return { gameTurn, startNewGame };
})(Game);

export default GameController;
