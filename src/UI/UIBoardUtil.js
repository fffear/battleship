import Events from "../EventPubSub/EventPubSub";

const UIBoardUtil = (() => {
  const getStartingCoordinates = (tile) => {
    let xCoordinate = tile.parentElement.firstChild.textContent;
    let gridArray = Array.prototype.slice.call(tile.parentElement.childNodes);

    let yCoordinate = gridArray.findIndex((square) => {
      return square === tile;
    });

    return { x: xCoordinate, y: yCoordinate };
  };

  const getDataFromShip = (ship) => {
    let orientation = ship.classList.contains("verticalShip")
      ? "vertical"
      : "horizontal";
    let shipLength = ship.childElementCount;
    let board = ship.parentElement.parentElement.parentElement;
    let startingCoordinates = getStartingCoordinates(ship.parentElement);

    return { orientation, shipLength, board, startingCoordinates };
  };

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

  const determineShipCoordinates = (
    shipLength,
    orientation,
    startingCoordinates
  ) => {
    let coordinates = [];

    if (orientation === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        coordinates.push({
          x: String.fromCharCode(startingCoordinates["x"].charCodeAt(0) + i),
          y: startingCoordinates["y"],
        });
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        coordinates.push({
          x: startingCoordinates["x"],
          y: startingCoordinates["y"] + i,
        });
      }
    }

    return coordinates;
  };

  const removeOccupySquare = (
    board,
    shipLength,
    orientation,
    startingCoordinates
  ) => {
    let coordinates = determineShipCoordinates(
      shipLength,
      orientation,
      startingCoordinates
    );

    for (let i = 0; i < shipLength; i++) {
      let square = findTile(board, coordinates[i]);
      square.classList.remove("occupied");
    }
  };

  const occupySquare = (
    board,
    shipLength,
    orientation,
    startingCoordinates
  ) => {
    let coordinates = determineShipCoordinates(
      shipLength,
      orientation,
      startingCoordinates
    );

    for (let i = 0; i < shipLength; i++) {
      let square = findTile(board, coordinates[i]);
      square.classList.add("occupied");
    }
  };

  const shipOnOccupiedSquaresOnChangeOrientation = (
    board,
    shipLength,
    orientation,
    startingCoordinates
  ) => {
    let coordinates = determineShipCoordinates(
      shipLength,
      orientation,
      startingCoordinates
    );

    for (let i = 1; i < shipLength; i++) {
      let square = findTile(board, coordinates[i]);
      if (square.classList.contains("occupied")) {
        return true;
      }
    }
  };

  // this function will be to determine if a placed ship will be placed on occupied squares
  const shipPlacedOnOccupiedSquares = (
    board,
    shipLength,
    orientation,
    startingCoordinates
  ) => {
    let coordinates = determineShipCoordinates(
      shipLength,
      orientation,
      startingCoordinates
    );

    // There is a problem with shipPlacedOnOccupiedSquares
    // I need to take into account if the ship overrides the board

    //console.log(coordinates);

    for (let i = 0; i < shipLength; i++) {
      let square = findTile(board, coordinates[i]);
      // console.log(square);
      if (square.classList.contains("occupied")) {
        return true;
      }
    }
  };

  // vertical ship will override board if it switches to vertical
  const shipOverrideBoardOnSwitchToVertical = (event) => {
    let shipLength = event.target.parentElement.childElementCount;

    if (!event.target.parentElement.classList.contains("verticalShip")) {
      let boardGrid = event.target.parentElement.parentElement;
      let gridArray = Array.prototype.slice.call(
        event.target.parentElement.parentElement.parentElement.childNodes
      );

      let yCoordinate = gridArray.findIndex((square) => {
        return square === boardGrid;
      });

      return yCoordinate + shipLength > 10 + 1;
    } else {
      return true;
    }
  };

  // horizontal ship will override board if it switches to horizontal
  const shipOverrideBoardOnSwitchToHorizontal = (event) => {
    let shipLength = event.target.parentElement.childElementCount;

    if (event.target.parentElement.classList.contains("verticalShip")) {
      let xCoordinate =
        event.target.parentElement.parentElement.parentElement.firstChild
          .textContent;
      let xAsNumber = xCoordinate.charCodeAt(0);

      return xAsNumber + shipLength > 75;
    } else {
      return true;
    }
  };

  // check if ship overflow horiontally on drop
  const shipOverflowHorizontally = (xCoordinate, shipLength) => {
    let xAsNumber = xCoordinate.charCodeAt(0);
    return xAsNumber + shipLength > 74 + 1;
  };

  // check if ship overflow vertically on drop
  const shipOverflowVertically = (yCoordinate, shipLength) => {
    return yCoordinate + shipLength > 10 + 1;
  };

  const dropShip = (event, data, ship) => {
    console.log("drop original ship");
    let shipLength = ship.childElementCount;
    let orientation = ship.classList.contains("verticalShip")
      ? "vertical"
      : "horizontal";

    if (data.slice(-5) !== "-copy") {
      let tile = event.target;
      let board = tile.parentElement.parentElement;
      let startingCoordinates = getStartingCoordinates(tile);
      // console.log(startingCoordinates);

      if (
        startingCoordinates.x === "" ||
        startingCoordinates.y === 0 ||
        event.target.classList.contains("square") ||
        shipOverflowHorizontally(startingCoordinates.x, shipLength) ||
        shipPlacedOnOccupiedSquares(
          board,
          shipLength,
          orientation,
          startingCoordinates
        )
      ) {
        console.log("Do nothing");
      } else {
        let startingCoordinates = getStartingCoordinates(tile);

        if (!shipOverflowHorizontally(startingCoordinates["x"], shipLength)) {
          occupySquare(board, shipLength, orientation, startingCoordinates);
          Events.emit("removeListenerFromOriginalShip", ship);

          let nodeCopy = document.getElementById(data).cloneNode(true);
          nodeCopy.id += "-copy";
          nodeCopy.classList.add("unselectedShipCopy");
          event.target.appendChild(nodeCopy);

          ship.classList.add("shipPlaced");
          // console.log(ship);

          Events.emit("addDragToShipCopy", nodeCopy);
          Events.emit("addClickToChangeOrientation", nodeCopy);
        }
      }
    }
    // else if (data.slice(-5) === "-copy") {
    // let tile = event.target;
    // let startingCoordinates = getStartingCoordinates(tile);
    // if (
    //   orientation === "horizontal" &&
    //   !shipOverflowHorizontally(startingCoordinates["x"], shipLength)
    // ) {
    //   ship.classList.remove("selectedShipCopy");
    //   ship.classList.add("unselectedShipCopy");
    // } else if (
    //   orientation === "vertical" &&
    //   !shipOverflowVertically(startingCoordinates["y"], shipLength)
    // ) {
    //   ship.classList.remove("selectedShipCopy");
    //   ship.classList.add("unselectedShipCopy");
    // }
    //}
  };

  const moveShipCopy = (event, data, shipCopy) => {
    let shipLength = shipCopy.childElementCount;

    if (shipCopy.classList.contains("verticalShip")) {
      if (
        data.slice(-5) === "-copy" &&
        event.target.classList.contains("tile")
      ) {
        let tile = event.target;
        let coordinates = getStartingCoordinates(tile);

        if (!shipOverflowVertically(coordinates.y, shipLength)) {
          event.target.appendChild(shipCopy);
        }
      }
    } else {
      if (
        data.slice(-5) === "-copy" &&
        event.target.classList.contains("tile")
      ) {
        let tile = event.target;
        let coordinates = getStartingCoordinates(tile);

        if (!shipOverflowHorizontally(coordinates.x, shipLength)) {
          event.target.appendChild(shipCopy);
        }
      }
    }
  };

  const dragEnd = (event) => {
    let ship = event.target;
    let orientation = ship.classList.contains("verticalShip")
      ? "vertical"
      : "horizontal";
    let shipLength = ship.childElementCount;
    let board = ship.parentElement.parentElement.parentElement;
    let startingCoordinates = getStartingCoordinates(ship.parentElement);

    ship.classList.remove("selectedShipCopy");
    ship.classList.add("unselectedShipCopy");

    if (
      shipPlacedOnOccupiedSquares(
        board,
        shipLength,
        orientation,
        startingCoordinates
      )
    ) {
      let stringifiedData = event.dataTransfer.getData("coordinate");
      let originalCoordinates = JSON.parse(stringifiedData);

      let originalTile = findTile(board, originalCoordinates);
      originalTile.appendChild(ship);
      occupySquare(board, shipLength, orientation, originalCoordinates);
    } else {
      occupySquare(board, shipLength, orientation, startingCoordinates);
    }
  };

  return {
    getStartingCoordinates,
    getDataFromShip,
    findTile,
    determineShipCoordinates,
    removeOccupySquare,
    occupySquare,
    shipOnOccupiedSquaresOnChangeOrientation,
    shipPlacedOnOccupiedSquares,
    shipOverrideBoardOnSwitchToVertical,
    shipOverrideBoardOnSwitchToHorizontal,
    shipOverflowHorizontally,
    shipOverflowVertically,
    dropShip,
    dragEnd,
    moveShipCopy,
  };
})();

export default UIBoardUtil;
