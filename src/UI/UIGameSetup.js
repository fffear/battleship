import Events from "../EventPubSub/EventPubSub";
import Game from "../game/Game";
import GameDisplay from "../gameDisplay/GameDisplay";
import UIMoveShip from "./UIMoveShip";
import UIBoardUtil from "./UIBoardUtil";
import RandomShipPlacement from "../randomShipPlacement/randomShipPlacement";

const UIGameSetup = ((game) => {
  const rootDiv = document.querySelector("#root");
  const btnContainer = document.querySelector(".btnContainer");

  const createBtn = (btnName) => {
    const btn = document.createElement("button");
    btn.classList.add(btnName + "Btn");
    btn.textContent = btnName.replace(/^\w/, (c) => c.toUpperCase());

    btnContainer.appendChild(btn);

    return btn;
  };

  const removeBtn = (btnName) => {
    const btn = document.querySelector(`.${btnName}Btn`);
    btn.parentNode.removeChild(btn);

    return btn;
  };

  const createSetupContainer = () => {
    let setupContainer = document.createElement("div");
    setupContainer.classList.add("setupContainer");

    rootDiv.insertBefore(setupContainer, btnContainer);
  };

  const removeSetupContainer = () => {
    let setupContainer = document.querySelector(".setupContainer");
    setupContainer.parentNode.removeChild(setupContainer);
  };

  const setupFleetContainer = () => {
    const setupContainer = document.querySelector(".setupContainer");
    const fleetContainer = document.createElement("div");
    fleetContainer.classList.add("fleet");

    const fleetHeading = document.createElement("div");
    fleetHeading.textContent = "Fleet";
    fleetHeading.setAttribute(
      "style",
      "text-align: center; font-size: 1.5rem;"
    );

    const listOfFleet = document.createElement("ul");
    listOfFleet.classList.add("listOfFleet");

    fleetContainer.appendChild(fleetHeading);
    fleetContainer.appendChild(listOfFleet);
    setupContainer.appendChild(fleetContainer);
  };

  const setupFleetDisplay = (listOfFleet) => {
    for (let shipName in game.humanFleet) {
      let shipItem = document.createElement("li");
      shipItem.classList.add("shipItem");
      let ship = document.createElement("div");
      ship.classList.add("ship");
      ship.setAttribute("id", shipName);
      ship.setAttribute("draggable", "true");

      for (let i = 0; i < Game.humanFleet[shipName].positionsHit.length; i++) {
        const shipSquare = document.createElement("div");
        shipSquare.classList.add("square");
        ship.appendChild(shipSquare);
      }

      shipItem.appendChild(ship);
      shipItem.innerHTML += shipName.replace(/^\w/, (c) => c.toUpperCase());
      listOfFleet.appendChild(shipItem);
    }
  };

  const createBoard = (board) => {
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

        individualGrid.addEventListener("dragover", MoveShip.allowDrop);
        individualGrid.addEventListener("drop", MoveShip.drop);
        individualGrid.addEventListener("dragend", MoveShip.dragend);

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

  const placeShipsRandomlyOnComputerBoard = () => {
    for (let ship in game.computerFleet) {
      RandomShipPlacement.placeShipOnBoardIfCoordinatesAvailable(
        game.computerGameboard,
        game.computerFleet[ship]
      );
    }
  };

  const removeGamePlayListeners = (event) => {
    let computerBoard = document.querySelectorAll(".board")[0];
    Events.emit("removeListenerToClickComputerBoard", computerBoard);

    const boardContainer = document.querySelector(".boardContainer");
    boardContainer.parentNode.removeChild(boardContainer);

    let playBtn = createBtn("play");
    playBtn.addEventListener("click", removePlayAndSetupShips);

    let resetBtn = removeBtn("reset");
    resetBtn.removeEventListener("click", removeGamePlayListeners);
  };

  const removeSetupListeners = (event) => {
    let shipCopies = document.querySelectorAll('[id$="-copy"]');
    shipCopies = Array.from(shipCopies);

    if (shipCopies.length === 5) {
      for (let ship of shipCopies) {
        UIMoveShip.removeChangeShipOrientationListener(ship);
      }

      for (let ship of shipCopies) {
        UIMoveShip.removeDragOnShipListener(ship);
      }
      let humanBoard = document.querySelector(".board");

      humanBoard.removeEventListener("dragover", UIMoveShip.dragOver);
      humanBoard.removeEventListener("drop", UIMoveShip.drop);
      humanBoard.removeEventListener("dragend", UIMoveShip.dragend);

      let startBtn = removeBtn("start");
      startBtn.removeEventListener("click", removeSetupListeners);

      let resetBtn = createBtn("reset");
      resetBtn.addEventListener("click", removeGamePlayListeners);

      for (let ship of shipCopies) {
        let startingTile = ship.parentNode;
        let shipData = UIBoardUtil.getDataFromShip(ship);

        game.humanGameboard.placeShip(
          game.humanFleet[ship.id.slice(0, -5)],
          shipData.startingCoordinates,
          shipData.orientation
        );
      }

      placeShipsRandomlyOnComputerBoard();

      removeSetupContainer();
      GameDisplay.renderGameboards(game);
    }
  };

  const removePlayAndSetupShips = () => {
    let playBtn = removeBtn("play");
    playBtn.removeEventListener("click", removePlayAndSetupShips);
    let startBtn = createBtn("start");

    createSetupContainer();
    let setupContainer = document.querySelector(".setupContainer");
    setupFleetContainer();
    let listOfFleet = document.querySelector(".listOfFleet");
    setupFleetDisplay(listOfFleet);

    let ships = document.querySelectorAll(".ship");

    game.startNewGame();
    Events.emit("resetIntelligentChoiceData");

    let humanBoard = GameDisplay.createBoard(
      game.humanGameboard.allCoordinates
    );

    GameDisplay.renderBoard(humanBoard, setupContainer);

    for (let i = 0; i < ships.length; i++) {
      ships[i].addEventListener("dragstart", UIMoveShip.dragStart);
    }

    humanBoard.addEventListener("dragover", UIMoveShip.dragOver);
    humanBoard.addEventListener("drop", UIMoveShip.drop);
    humanBoard.addEventListener("dragend", UIMoveShip.dragend);

    startBtn.addEventListener("click", removeSetupListeners);
  };

  let playBtn = createBtn("play");
  playBtn.addEventListener("click", removePlayAndSetupShips);

  // add drag event to shipCopy when placed onto ship
  Events.on("addDragToShipCopy", UIMoveShip.addDragToShipCopy);

  // remove event listener from ship
  Events.on(
    "removeListenerFromOriginalShip",
    UIMoveShip.removeDragOnShipListener
  );

  // add click to change shipCopy orientation
  Events.on("addClickToChangeOrientation", UIMoveShip.changeShipOrientation);
})(Game);

export default UIGameSetup;
