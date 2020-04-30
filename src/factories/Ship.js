const Ship = (length) => {
  const positions = [];

  const positionsHit = Array.apply(null, { length: length });

  const checkHit = (position) => {
    return position == undefined;
  };

  const hit = (number) => {
    if (number < positionsHit.length) {
      positionsHit[number] = "X";
    }
  };

  const isSunk = () => {
    return !positionsHit.some(checkHit);
  };

  return { positions, hit, isSunk, positionsHit };
};

export { Ship };