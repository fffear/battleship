import Events from "../EventPubSub/EventPubSub";
import Game from "../game/Game";
import UIBoardUtil from "../UI/UIBoardUtil";

const GameDisplay = ((game) => {
  let currentGame = game;
  const rootDiv = document.querySelector("#root");
  const btnContainer = document.querySelector(".btnContainer");
  let humanPlayerBoard;
  let computerPlayerBoard;

  const restartGame = (newGame) => {
    game.startNewGame();
  };

  const toggleInteractableBoard = (board) => {
    board.classList.toggle("interactableBoard");
    board.classList.toggle("nonInteractableBoard");
  };

  const createColumn = () => {
    let individualColumn = document.createElement("div");
    individualColumn.classList.add("column");
    return individualColumn;
  };

  const createYColumn = (container) => {
    let individualColumn = createColumn();
    let individualGrid = document.createElement("div");
    individualGrid.classList.add("headerTile");

    individualColumn.appendChild(individualGrid);

    for (let i = 0; i < 10; i++) {
      let individualGrid = document.createElement("div");
      individualGrid.classList.add("headerTile");
      individualGrid.textContent = i + 1;
      individualColumn.appendChild(individualGrid);
    }

    container.appendChild(individualColumn);
  };

  const createBoard = (board) => {
    const boardDiv = document.createElement("div");
    boardDiv.classList.add("board");

    createYColumn(boardDiv);

    for (let key in board) {
      let individualColumn = createColumn();
      let individualGrid = document.createElement("div");
      individualGrid.classList.add("headerTile");
      individualGrid.textContent = key;
      individualColumn.appendChild(individualGrid);

      for (let gridContent of board[key]) {
        let individualGrid = document.createElement("div");

        individualGrid.classList.add("tile");

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

  const renderGameboards = (game) => {
    let computerGameboard = createBoard(game.computerGameboard.allCoordinates);
    let humanGameboard = createBoard(game.humanGameboard.allCoordinates);
    computerGameboard.classList.add("computerBoard", "interactableBoard");
    humanGameboard.classList.add("humanBoard", "nonInteractableBoard");
    let boardContainer = document.createElement("div");
    boardContainer.classList.add("boardContainer");
    rootDiv.insertBefore(boardContainer, btnContainer);
    renderBoard(computerGameboard, boardContainer);
    renderBoard(humanGameboard, boardContainer);
    Events.emit("addListenerToClickComputerBoard", computerGameboard);
  };

  const renderUpdatedTile = (updatedData) => {
    if (updatedData["tile"] === undefined) {
      humanPlayerBoard = document.querySelector(".humanBoard");

      updatedData["tile"] = UIBoardUtil.findTile(
        humanPlayerBoard,
        updatedData["coordinates"]
      );
    }

    updatedData["tile"].textContent =
      updatedData["board"].allCoordinates[updatedData["coordinates"].x][
        updatedData["coordinates"].y - 1
      ];
  };

  const displayVictoryMessage = (msg) => {
    const victoryMessageDiv = document.createElement("div");
    victoryMessageDiv.classList.add("victoryMessage");
    victoryMessageDiv.textContent = msg;

    let boardContainer = document.querySelector(".boardContainer");
    boardContainer.appendChild(victoryMessageDiv);
  };

  Events.on("updateTile", renderUpdatedTile);
  Events.on("displayVictoryMessage", displayVictoryMessage);
  Events.on("toggleIndicatePlayerTurn", toggleInteractableBoard);

  return {
    createBoard,
    renderBoard,
    renderGameboards,
    renderUpdatedTile,
    displayVictoryMessage,
  };
})(Game);

export default GameDisplay;
