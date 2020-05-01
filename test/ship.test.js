import { Ship } from "../src/factories/Ship";

it("hit() mutates positionsHit", () => {
  const testShip = Ship(4);
  testShip.hit(0);
  expect(testShip.positionsHit[0]).toBe("X");
});

it("hit() doesn't mutate positionsHit if number is greater or equal to the length", () => {
  const testShip = Ship(2);
  testShip.hit(3);
  expect(testShip.positionsHit).toEqual([undefined, undefined]);
});

it("positionsHit returns an array", () => {
  const testShip = Ship(4);
  expect(testShip.positionsHit).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

it("isSunk() which returns false if there are undefined positions", () => {
  const testShip = Ship(4);
  testShip.hit(0);
  expect(testShip.isSunk()).toBe(false);
});

it("isSunk() returns true if all positions are hit", () => {
  const testShip = Ship(4);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  expect(testShip.isSunk()).toBe(true);
});

// function sum(a, b) {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });
