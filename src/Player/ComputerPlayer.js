import Player from "./Player";

const ComputerPlayer = () => {
  const prototype = Player();

  const getIndexesOfY = coordinatesStillAvailable => {
    return coordinatesStillAvailable.reduce((array, value, index) => {
      if (value !== undefined) {
        array.push(index);
      }
      return array;
    }, []);
  };

  const selectRandomCoordinatesStillAvailable = coordinatesStillAvailable => {
    const yCoordinates = getIndexesOfY(coordinatesStillAvailable);

    let yCoordinate =
      yCoordinates[Math.floor(Math.random() * yCoordinates.length)];
    let xCoordinate =
      coordinatesStillAvailable[yCoordinate][
        Math.floor(
          Math.random() * coordinatesStillAvailable[yCoordinate].length
        )
      ];
    return { x: xCoordinate, y: yCoordinate };
  };

  return Object.assign({}, prototype, {
    selectRandomCoordinatesStillAvailable
  });
};

export default ComputerPlayer;
