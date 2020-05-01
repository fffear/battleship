import { Gameboard, Ship } from "../src/factories/factoryFunctions";

describe("Gameboard", () => {
  let testGameboard;
  let testShip;
  let testShip2;

  beforeEach(() => {
    testGameboard = Gameboard();
    testShip = Ship(4);
    testShip2 = Ship(2);
    testGameboard.placeShip(testShip, { x: "A", y: 2 }, "horizontal");
    testGameboard.placeShip(testShip2, { x: "A", y: 9 }, "vertical");
  });

  test("positions in individual ships are assigned", () => {
    expect(testShip.positions).toEqual([
      { x: "A", y: 2 },
      { x: "B", y: 2 },
      { x: "C", y: 2 },
      { x: "D", y: 2 },
    ]);
    expect(testShip2.positions).toEqual([
      { x: "A", y: 9 },
      { x: "A", y: 10 },
    ]);
  });

  test("placeShip places ship coordinates in 'ships' array", () => {
    expect(testGameboard.ships).toEqual([testShip, testShip2]);
  });

  test("receiveAttack() takes coordinates, and sends ‘hit()' to the correct ship", () => {
    testGameboard.receiveAttack("B", 2);
    expect(testGameboard.allCoordinates["B"][1]).toBe("X");
    expect(testShip.positionsHit).toEqual([
      undefined,
      "X",
      undefined,
      undefined,
    ]);
  });

  test("receiveAttack() takes coordinates, and records missed shot on grid", () => {
    testGameboard.receiveAttack("B", 1);
    expect(testGameboard.allCoordinates["B"][0]).toBe("\u2022");
  });

  test("allShipsSunk() returns false if all Ships not sunk", () => {
    testGameboard.receiveAttack("B", 2);
    expect(testGameboard.allShipsSunk()).toBe(false);
  });

  test("allShipsSunk() returns true if all Ships are sunk", () => {
    testGameboard.receiveAttack("A", 2);
    testGameboard.receiveAttack("B", 2);
    testGameboard.receiveAttack("C", 2);
    testGameboard.receiveAttack("D", 2);
    testGameboard.receiveAttack("A", 9);
    testGameboard.receiveAttack("A", 10);
    expect(testGameboard.allShipsSunk()).toBe(true);
  });
});
