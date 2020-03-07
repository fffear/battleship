const Ship = length => {
  const _length = length;
  const _positions = Array.from(new Array(length));
  // length
  // where ship has been hit
  // sunk

  let positions = _positions;
  const hit = position => {
    _positions[position - 1] = "hit";
  };
  const isSunk = () => {
    return _positions.every(position => {
      return position == "hit";
    });
  };

  return { hit, isSunk, positions };
};

export default Ship;
