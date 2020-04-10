import Player from "../src/Player/Player";
import Gameboard from "../src/Gameboard/Gameboard";
import Ship from "../src/Ship/Ship";

it("player attack enemy gameboard", () => {
  const testGameboard = Gameboard();
  const testPlayer = Player();
  const testShip = Ship(2);
  testGameboard.placeShip(testShip, { x: "A", y: 1 }, "horizontal");

  testPlayer.attack(testGameboard, { x: "A", y: 2 });

  expect(testGameboard.allCoordinates["A"][1]).toBe("M");
});
