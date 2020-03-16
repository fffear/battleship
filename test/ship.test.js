import Ship from "../src/Ship/Ship";

it("ship has a hit method which takes a number and marks that position as hit", () => {
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  testShip.hit(2);
  testShip.hit(3);
  expect(testShip.positionsHit).toEqual([
    { x: "B", y: 1 },
    { x: "C", y: 1 }
  ]);
});

it("ship has sunk method which returns false if there are undefined positions", () => {
  const testShip = Ship(4, { x: "A", y: 1 }, "vertical");
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(false);
});

it("ship has sunk method which returns true if all positions are hit", () => {
  const testShip = Ship(4, { x: "A", y: 1 }, "vertical");
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(true);
});

it("should track the coordinates it's placed on horizontally", () => {
  const testShip = Ship(4, { x: "A", y: 1 }, "horizontal");
  expect(testShip.coordinates).toEqual([
    { x: "A", y: 1 },
    { x: "B", y: 1 },
    { x: "C", y: 1 },
    { x: "D", y: 1 }
  ]);
});

it("should track the coordinates it's placed on vertically", () => {
  const testShip = Ship(4, { x: "A", y: 1 }, "vertical");
  expect(testShip.coordinates).toEqual([
    { x: "A", y: 1 },
    { x: "A", y: 2 },
    { x: "A", y: 3 },
    { x: "A", y: 4 }
  ]);
});

it("should also track the coordinates it's been hit", () => {});
