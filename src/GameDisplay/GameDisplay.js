import Player from "../Player/Player";
import styles from "./GameDisplay.css";
import Events from "../EventPubSub/EventPubSub";
import Game from "../Game/Game";

const GameDisplay = (game => {
  let currentGame = game;

  const restartGame = game => {
    currentGame = game;
  };

  const createColumn = () => {
    let individualColumn = document.createElement("div");
    individualColumn.classList.add(styles.column);
    return individualColumn;
  };

  const createYColumn = container => {
    let individualColumn = createColumn();
    let individualGrid = document.createElement("div");
    individualGrid.classList.add(styles.HeaderTile);

    individualColumn.appendChild(individualGrid);

    for (let i = 0; i < 10; i++) {
      let individualGrid = document.createElement("div");
      individualGrid.classList.add(styles.HeaderTile);
      individualGrid.textContent = i + 1;
      individualColumn.appendChild(individualGrid);
    }

    container.appendChild(individualColumn);
  };

  const createBoard = board => {
    const boardDiv = document.createElement("div");
    boardDiv.classList.add(styles.board);

    createYColumn(boardDiv);

    for (let key in board) {
      let individualColumn = createColumn();
      let individualGrid = document.createElement("div");
      individualGrid.classList.add(styles.HeaderTile);
      individualGrid.textContent = key;
      individualColumn.appendChild(individualGrid);

      for (let gridContent of board[key]) {
        let individualGrid = document.createElement("div");
        individualGrid.classList.add(styles.tile);
        individualGrid.textContent = gridContent;
        individualColumn.appendChild(individualGrid);
        boardDiv.appendChild(individualColumn);
      }
    }

    return boardDiv;
  };

  const renderBoard = (board, container) => {
    container.appendChild(board);
  };

  const renderGameboards = game => {
    let board1 = createBoard(game.computerGameboard.allCoordinates);
    let board2 = createBoard(game.humanGameboard.allCoordinates);
    let boardContainer = document.querySelector(".board-container");
    renderBoard(board1, boardContainer);
    renderBoard(board2, boardContainer);
  };

  renderGameboards(currentGame);

  Events.on("startNewGame", restartGame);
  Events.on("startNewGame", renderGameboards);

  let computerPlayerBoard = document.querySelectorAll(`.${styles.board}`)[0];
  let humanPlayerBoard = document.querySelectorAll(`.${styles.board}`)[1];

  const findTile = (board, coordinates) => {
    let columns = Array.from(board.childNodes);

    for (let column of columns) {
      if (column.firstChild.innerText === coordinates.x) {
        let tilesInColumn = Array.from(column.childNodes);

        for (let i = 0; i < tilesInColumn.length; i++) {
          if (coordinates.y === i) return tilesInColumn[i];
        }
      }
    }
  };

  const renderUpdatedTile = updatedData => {
    if (updatedData["tile"] === undefined) {
      updatedData["tile"] = findTile(
        humanPlayerBoard,
        updatedData["coordinates"]
      );
    }

    updatedData["tile"].textContent =
      updatedData["board"].allCoordinates[updatedData["coordinates"].x][
        updatedData["coordinates"].y - 1
      ];
  };

  const initiateGameTurn = event => {
    let xCoordinate = event.target.parentElement.firstChild.textContent;

    if (xCoordinate === "") return;

    let gridArray = Array.prototype.slice.call(
      event.target.parentElement.childNodes
    );

    let yCoordinate = gridArray.findIndex(square => {
      return square === event.target;
    });

    if (yCoordinate === 0) return;

    Events.emit("gameTurn", {
      x: xCoordinate,
      y: yCoordinate,
      tile: event.target
    });

    // computerPlayerBoard.removeEventListener("click", initiateGameTurn);
  };

  computerPlayerBoard.addEventListener("click", initiateGameTurn);

  Events.on("updateTile", renderUpdatedTile);

  return { renderBoard, renderGameboards, createBoard, renderUpdatedTile };
})(Game);

export default GameDisplay;
