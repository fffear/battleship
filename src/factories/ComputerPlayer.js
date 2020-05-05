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

  const getRandomCoordinateStillAvailable = (coordinatesStillAvailable) => {
    let xCoordinates = getXCoordinates(coordinatesStillAvailable);

    const randomXCoordinate =
      xCoordinates[Math.floor(Math.random() * xCoordinates.length)];

    let randomCoordinates = selectRandomCoordinatesStillAvailable(
      coordinatesStillAvailable,
      randomXCoordinate
    );

    return randomCoordinates;
  };

  const test = () => {
    return 100;
  };

  return Object.assign({}, prototype, {
    getXCoordinates,
    getIndexesOfY,
    selectRandomCoordinatesStillAvailable,
    getRandomCoordinateStillAvailable,
    test,
  });
};

export { ComputerPlayer };
