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

  const isAttackedButNotSunk = () => {
    return positionsHit.some((position) => {
      return position == "X";
    });
  };

  return {
    positions,
    hit,
    isSunk,
    isAttackedButNotSunk,
    positionsHit,

    get length() {
      return _length;
    },
  };
};

export { Ship };
