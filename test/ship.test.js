import Ship from "../src/Ship/Ship";

it("ship has a hit method which takes a number and marks that position as hit", () => {
  const testShip = Ship(4);
  testShip.hit(2);
  expect(testShip.positions[1]).toBe("hit");
});

it("ship has sunk method which returns false if there are undefined positions", () => {
  const testShip = Ship(4);
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(false);
});

it("ship has sunk method which returns true if all positions are hit", () => {
  const testShip = Ship(4);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(true);
});
