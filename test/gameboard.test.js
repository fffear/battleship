import Gameboard from "../src/Gameboard/Gameboard";
import Ship from "../src/Ship/Ship";

it("placeShip places ship coordinates in 'ships' array", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  const testShip2 = Ship(2, { x: "A", y: 2 }, "horizontal");
  testGameboard.placeShip(testShip);
  testGameboard.placeShip(testShip2);
  expect(testGameboard.ships).toEqual([testShip, testShip2]);
});

it("receiveAttack takes coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);
  testGameboard.receiveAttack("B", 1);
  expect(testShip.positionsHit).toEqual([{ x: "B", y: 1 }]);
});

it("receiveAttack adds coordinates of missed attacks so they can display them properly", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);
  testGameboard.receiveAttack("A", 2);
  expect(testGameboard.missedAttacks).toEqual([{ x: "A", y: 2 }]);
});

it("checkHit returns true if coordinates are occupied by a ship", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);
  expect(testGameboard.checkHit("B", 1)).toBe(true);
});

it("hitShip changes positions hit on testShip", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);
  testGameboard.hitShip("A", 1);
  expect(testShip.positionsHit).toEqual([{ x: "A", y: 1 }]);
});

it("shipsSunk returns true if all ships are sunk", () => {
  const testGameboard = Gameboard();
  const testShip = Ship(2, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);
  testGameboard.receiveAttack("A", 1);
  testGameboard.receiveAttack("B", 1);

  expect(testGameboard.shipsSunk()).toBe(true);
});
