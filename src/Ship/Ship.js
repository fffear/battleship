const Ship = length => {
  // const _determineCoordinates = (length, startingCoordinate, direction) => {
  //   const coordinates = [];
  //   if (
  //     direction === "horizontal" &&
  //     length + startingCoordinate.x.charCodeAt(0) <= 75
  //   ) {
  //     for (let i = 0; i < length; i++) {
  //       let xCoordinate = String.fromCharCode(
  //         startingCoordinate.x.charCodeAt(0) + i
  //       );
  //       coordinates.push({ x: xCoordinate, y: startingCoordinate.y });
  //     }
  //   } else if (
  //     direction === "vertical" &&
  //     length + startingCoordinate.y <= 11
  //   ) {
  //     for (let i = 0; i < length; i++) {
  //       coordinates.push({
  //         x: startingCoordinate.x,
  //         y: startingCoordinate.y + i
  //       });
  //     }
  //   }

  //   return coordinates;
  // };

  // const coordinates = _determineCoordinates(
  //   length,
  //   startingCoordinate,
  //   direction
  // );

  const positions = [];

  const positionsHit = Array.apply(null, { length: length });

  const checkHit = position => {
    return position == undefined;
  };

  const hit = number => {
    if (number < positionsHit.length) {
      positionsHit[number] = "X";
    }
  };

  const isSunk = () => {
    return !positionsHit.some(checkHit);
  };

  return { positions, hit, isSunk, positionsHit };
};

export default Ship;
