const Ship = (length, startingCoordinate, direction) => {
  const _length = length;
  const positionsHit = [];

  const _determineCoordinates = (length, startingCoordinate, direction) => {
    const coordinates = [];
    if (
      direction === "horizontal" &&
      length + startingCoordinate.x.charCodeAt(0) <= 75
    ) {
      for (let i = 0; i < length; i++) {
        let xCoordinate = String.fromCharCode(
          startingCoordinate.x.charCodeAt(0) + i
        );
        coordinates.push({ x: xCoordinate, y: startingCoordinate.y });
      }
    } else if (
      direction === "vertical" &&
      length + startingCoordinate.y <= 11
    ) {
      for (let i = 0; i < length; i++) {
        coordinates.push({
          x: startingCoordinate.x,
          y: startingCoordinate.y + i
        });
      }
    }

    return coordinates;
  };

  const coordinates = _determineCoordinates(
    length,
    startingCoordinate,
    direction
  );

  const hit = position => {
    positionsHit.push(coordinates[position - 1]);
  };

  const isSunk = () => {
    return length === positionsHit.length;
  };

  return { hit, isSunk, positionsHit, coordinates };
};

export default Ship;
