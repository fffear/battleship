const Player = () => {
  const attack = (gameboard, coordinates) => {
    gameboard.receiveAttack(coordinates.x, coordinates.y);
  };

  return { attack };
};

export { Player };
