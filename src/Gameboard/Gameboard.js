const Gameboard = () => {
  const ships = [];
  const missedAttacks = [];

  const placeShip = ship => {
    ships.push(ship);
  };

  const receiveAttack = (x, y) => {
    if (checkHit(x, y) === true) {
      hitShip(x, y);
    } else {
      missedAttacks.push({ x: x, y: y });
    }
  };

  // determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship
  const checkHit = (x, y) => {
    return ships.some(ship => {
      return ship.coordinates.some(coordinate => {
        return coordinate.x === x && coordinate.y === y;
      });
    });
  };

  const hitShip = (x, y) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coordinates.length; j++) {
        if (
          ships[i].coordinates[j].x === x &&
          ships[i].coordinates[j].y === y
        ) {
          ships[i].hit(j + 1);
        }
      }
    }
  };

  const shipsSunk = () => {
    return ships.every(ship => {
      return ship.isSunk();
    });
  };

  // 1. place ships at specific coordinates by calling the ship factory function
  // 2. receiveAttack function that takes a pair of coordinates, determines whether or
  //    not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
  //    or records the coordinates of the missed shot.
  // 3. Gameboards should keep track of missed attacks so they can display them properly.
  // 4. Gameboards should be able to report whether or not all of their ships have been sunk.

  return {
    placeShip,
    ships,
    receiveAttack,
    missedAttacks,
    checkHit,
    hitShip,
    shipsSunk
  };
};

export default Gameboard;
