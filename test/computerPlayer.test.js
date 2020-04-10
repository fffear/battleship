import ComputerPlayer from "../src/Player/ComputerPlayer";
import Gameboard from "../src/Gameboard/Gameboard";
import Ship from "../src/Ship/Ship";

it("getXCoordinates() returns all yCoordinates in an array", () => {
  const testGameboard = Gameboard();
  const testComputerPlayer = ComputerPlayer();
  const testShip = Ship(2);
  expect(
    testComputerPlayer.getXCoordinates(testGameboard.allCoordinates)
  ).toEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
});

it("getIndexesOfY() returns all the indexes of xCoordinates in an array", () => {
  const testGameboard = Gameboard();
  const testComputerPlayer = ComputerPlayer();
  const testShip = Ship(2);
  testGameboard.placeShip(testShip, { x: "A", y: 1 }, "horizontal");
  testGameboard.receiveAttack("A", 1);
  expect(
    testComputerPlayer.getIndexesOfY(testGameboard.allCoordinates, "A")
  ).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it("computer player should know whether a move is legal (i.e. it shouldn’t shoot the same coordinate twice)", () => {
  const testGameboard = Gameboard();
  const testComputerPlayer = ComputerPlayer();
  const testShip = Ship(2);
  testGameboard.placeShip(testShip, { x: "A", y: 1 }, "horizontal");

  testComputerPlayer.attack(testGameboard, { x: "A", y: 2 });

  const testObject = testComputerPlayer.selectRandomCoordinatesStillAvailable(
    testGameboard.allCoordinates,
    "A"
  );

  expect(
    testComputerPlayer.getIndexesOfY(testGameboard.allCoordinates, "A")
  ).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);

  // expect(testObject.y).not.toBe(1);
});
