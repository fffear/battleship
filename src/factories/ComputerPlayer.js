import { Player } from "./Player";

const ComputerPlayer = () => {
  const prototype = Player();

  const yColumnNotEmpty = (coordinatesStillAvailable, xCoordinate) => {
    return coordinatesStillAvailable[xCoordinate].some((yCoordinate) => {
      return yCoordinate === " ";
    });
  };

  const getXCoordinates = (coordinatesStillAvailable) => {
    let arrayOfXCoordinates = [];
    for (let xCoordinate in coordinatesStillAvailable) {
      if (yColumnNotEmpty(coordinatesStillAvailable, xCoordinate)) {
        arrayOfXCoordinates.push(xCoordinate);
      }
    }

    return arrayOfXCoordinates;
  };

  const getIndexesOfY = (coordinatesStillAvailable, xCoordinate) => {
    let arrayOfYCoordinateIndexes = [];
    let arrayOfYCoordinates = coordinatesStillAvailable[xCoordinate];

    for (let i = 0; i < arrayOfYCoordinates.length; i++) {
      if (arrayOfYCoordinates[i] === " ") {
        arrayOfYCoordinateIndexes.push(i + 1);
      }
    }

    return arrayOfYCoordinateIndexes;
  };

  const selectRandomCoordinatesStillAvailable = (
    coordinatesStillAvailable,
    xCoordinate
  ) => {
    const yCoordinates = getIndexesOfY(coordinatesStillAvailable, xCoordinate);
    let yCoordinate =
      yCoordinates[Math.floor(Math.random() * yCoordinates.length)];

    return { x: xCoordinate, y: yCoordinate };
  };

  return Object.assign({}, prototype, {
    selectRandomCoordinatesStillAvailable,
    getXCoordinates,
    getIndexesOfY,
  });
};

export { ComputerPlayer };
