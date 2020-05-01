const Ship = (length) => {
  const positions = [];
  const _length = length;

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

  return {
    positions,
    hit,
    isSunk,
    positionsHit,

    get length() {
      return _length;
    },
  };
};

export { Ship };
