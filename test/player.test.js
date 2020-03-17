import Player from "../src/Player/Player";
import Gameboard from "../src/Gameboard/Gameboard";
import Ship from "../src/Ship/Ship";

it("player attack enemy gameboard", () => {
  const testGameboard = Gameboard();
  const testPlayer = Player();
  const testShip = Ship(2, { x: "A", y: 1 }, "horizontal");
  testGameboard.placeShip(testShip);

  testPlayer.attack(testGameboard, { x: "A", y: 2 });

  expect(testGameboard.missedAttacks).toEqual([{ x: "A", y: 2 }]);
});

// it("computer player makes random plays", () => {});

// it("computer player should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice)", () => {});
