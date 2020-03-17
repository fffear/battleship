import ComputerPlayer from "../src/Player/ComputerPlayer";
import Gameboard from "../src/Gameboard/Gameboard";
import Ship from "../src/Ship/Ship";

// it("computer player selects random coordinates", () => {
//   const testGameboard = Gameboard();
//   const testComputerPlayer = ComputerPlayer();
//   const testShip = Ship(2, { x: "A", y: 1 }, "horizontal");
//   testGameboard.placeShip(testShip);

//   const randomCoordinates = testComputerPlayer.selectRandomCoordinates();

//   expect(randomCoordinates.y).toBeGreaterThanOrEqual(1);
//   expect(randomCoordinates.y).toBeLessThanOrEqual(10);
//   expect(randomCoordinates.x).toMatch(/[ABCDEFGHIJ]/);
// });

it("computer player should know whether a move is legal (i.e. it shouldn’t shoot the same coordinate twice)", () => {
  const testGameboard = Gameboard();
  const testComputerPlayer = ComputerPlayer();
  const testShip = Ship(2, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);

  testComputerPlayer.attack(testGameboard, { x: "A", y: 2 });

  const testObject = testComputerPlayer.selectRandomCoordinatesStillAvailable(
    testGameboard.coordinatesYetToBeAttacked
  );

  if (testObject.y === 2) {
    expect(testObject.x).toMatch(/[BCDEFGHIJ]/);
  }
});
