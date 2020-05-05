import Events from "../EventPubSub/EventPubSub";
import UIBoardUtil from "./UIBoardUtil";

const UIMoveShip = (() => {
  const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
    event.effectAllowed = "copyMove";

    if (event.target.id.slice(-5) === "-copy") {
      let startingCoordinates = UIBoardUtil.getStartingCoordinates(
        event.target.parentElement
      );
      let stringifiedCoordinate = JSON.stringify(startingCoordinates);

      event.dataTransfer.setData("coordinate", stringifiedCoordinate);

      let dataFromShip = UIBoardUtil.getDataFromShip(event.target);

      UIBoardUtil.removeOccupySquare(
        dataFromShip.board,
        dataFromShip.shipLength,
        dataFromShip.orientation,
        dataFromShip.startingCoordinates
      );

      event.target.classList.remove("unselectedShipCopy");
      event.target.classList.add("selectedShipCopy");
    }
  };

  const dragOver = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    if (data !== "" && data.slice(-5) === "-copy") {
      let shipCopy = document.getElementById(data);
      UIBoardUtil.moveShipCopy(event, data, shipCopy);
    }
  };

  const drop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    if (data !== "") {
      let ship = document.getElementById(data);
      UIBoardUtil.dropShip(event, data, ship);
    }
  };

  const dragend = (event) => {
    UIBoardUtil.dragEnd(event);
  };

  const changeOccupySquareOnOrientationChange = (ship) => {
    let shipData = UIBoardUtil.getDataFromShip(ship);

    UIBoardUtil.removeOccupySquare(
      shipData.board,
      shipData.shipLength,
      shipData.orientation,
      shipData.startingCoordinates
    );
    ship.classList.toggle("verticalShip");

    shipData = UIBoardUtil.getDataFromShip(ship);

    UIBoardUtil.occupySquare(
      shipData.board,
      shipData.shipLength,
      shipData.orientation,
      shipData.startingCoordinates
    );
  };

  const changeShipCopyOrientation = (event) => {
    let ship = event.target.parentElement;
    let shipData = UIBoardUtil.getDataFromShip(ship);
    shipData.orientation =
      shipData.orientation === "vertical" ? "horizontal" : "vertical";

    if (
      !UIBoardUtil.shipOverrideBoardOnSwitchToVertical(event) &&
      !UIBoardUtil.shipOnOccupiedSquaresOnChangeOrientation(
        shipData.board,
        shipData.shipLength,
        shipData.orientation,
        shipData.startingCoordinates
      )
    ) {
      changeOccupySquareOnOrientationChange(ship);
    } else if (
      !UIBoardUtil.shipOverrideBoardOnSwitchToHorizontal(event) &&
      !UIBoardUtil.shipOnOccupiedSquaresOnChangeOrientation(
        shipData.board,
        shipData.shipLength,
        shipData.orientation,
        shipData.startingCoordinates
      )
    ) {
      changeOccupySquareOnOrientationChange(ship);
    }
  };

  const addDragToShipCopy = (shipCopy) => {
    shipCopy.addEventListener("dragstart", dragStart);
  };

  const changeShipOrientation = (ship) => {
    ship.addEventListener("click", changeShipCopyOrientation);
  };

  const removeChangeShipOrientationListener = (ship) => {
    ship.removeEventListener("click", changeShipCopyOrientation);
  };

  const removeDragOnShipListener = (ship) => {
    ship.removeEventListener("dragstart", dragStart);
  };

  return {
    dragStart,
    dragOver,
    drop,
    dragend,
    changeShipOrientation,
    removeChangeShipOrientationListener,
    removeDragOnShipListener,
    addDragToShipCopy,
  };
})();

export default UIMoveShip;
