import UIBoardUtil from "../UI/UIBoardUtil";

const RandomShipPlacement = (() => {
  const getRandomNumber = (bottomNum, topNum) => {
    return Math.floor(Math.random() * (topNum - (bottomNum - 1))) + bottomNum;
  };

  const getRandomOrientation = () => {
    let randomNum = getRandomNumber(0, 1);
    return randomNum === 0 ? "horizontal" : "vertical";
  };

  const getRandomStartingCoordinates = (ship, orientation) => {
    if (orientation === "horizontal") {
      let randomNum = getRandomNumber(65, 75 - ship.length);
      let xCoordinate = String.fromCharCode(randomNum);
      let yCoordinate = getRandomNumber(1, 10);

      return { x: xCoordinate, y: yCoordinate };
    } else {
      let randomNum = getRandomNumber(65, 74);
      let xCoordinate = String.fromCharCode(randomNum);
      let yCoordinate = getRandomNumber(1, 11 - ship.length);
      return { x: xCoordinate, y: yCoordinate };
    }
  };

  const getAllShipCoordinates = (ship, randomOrientation) => {
    let startingCoordinates = getRandomStartingCoordinates(
      ship,
      randomOrientation
    );

    let allShipCoordinates = UIBoardUtil.determineShipCoordinates(
      ship.length,
      randomOrientation,
      startingCoordinates
    );

    return allShipCoordinates;
  };

  const checkShipCoordinatesOccupied = (gameboard, coordinates) => {
    for (let coordinate of coordinates) {
      if (gameboard.checkHit(coordinate.x, coordinate.y)) {
        return true;
      }
    }
    return false;
  };

  const placeShipOnBoardIfCoordinatesAvailable = (gameboard, ship) => {
    let shipCoordinatesOccupied = true;
    let allShipCoordinates;
    let randomOrientation;
    do {
      randomOrientation = getRandomOrientation();
      allShipCoordinates = getAllShipCoordinates(ship, randomOrientation);
      if (!checkShipCoordinatesOccupied(gameboard, allShipCoordinates)) {
        shipCoordinatesOccupied = false;
      }
    } while (shipCoordinatesOccupied);

    gameboard.placeShip(ship, allShipCoordinates[0], randomOrientation);
    console.log(allShipCoordinates);
  };

  return {
    placeShipOnBoardIfCoordinatesAvailable,
  };
})();

export default RandomShipPlacement;
