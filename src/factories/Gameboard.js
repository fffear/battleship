const Gameboard = () => {
  const createGrid = () => {
    const grid = {};

    for (let i = 0; i < 10; i++) {
      let xCoordinate = String.fromCharCode(65 + i);
      grid[xCoordinate] = [...Array(10)].map((x) => " ");
    }

    return grid;
  };

  const allCoordinates = createGrid();
  const ships = [];

  const placeShip = (ship, coordinates, orientation) => {
    const shipLength = ship.positionsHit.length;
    if (
      orientation === "horizontal" &&
      shipLength + coordinates.x.charCodeAt(0) <= 75
    ) {
      for (let i = 0; i < shipLength; i++) {
        let xCoordinate = String.fromCharCode(coordinates.x.charCodeAt(0) + i);
        ship.positions.push({ x: xCoordinate, y: coordinates.y });
      }
    } else if (orientation === "vertical" && shipLength + coordinates.y <= 11) {
      for (let i = 0; i < shipLength; i++) {
        ship.positions.push({
          x: coordinates.x,
          y: coordinates.y + i,
        });
      }
    }
    ships.push(ship);
  };

  const receiveAttack = (x, y) => {
    if (checkHit(x, y)) {
      allCoordinates[x][y - 1] = "X";
      hitShip(x, y);
    } else {
      allCoordinates[x][y - 1] = "\u2022";
    }
  };

  const checkHit = (x, y) => {
    return ships.some((ship) => {
      return ship.positions.some((coordinates) => {
        return coordinates.x === x && coordinates.y === y;
      });
    });
  };

  const hitShip = (x, y) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].positions.length; j++) {
        if (ships[i].positions[j].x === x && ships[i].positions[j].y === y) {
          ships[i].hit(j);
        }
      }
    }
  };

  const allShipsSunk = () => {
    if (ships.length === 0) return false;

    return ships.every((ship) => {
      return ship.isSunk();
    });
  };

  return {
    allCoordinates,
    placeShip,
    checkHit,
    ships,
    receiveAttack,
    allShipsSunk,
  };
};

export { Gameboard };
