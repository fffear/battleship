import { Ship, Gameboard, Player } from "../src/factories/factoryFunctions";

it("player attack enemy gameboard", () => {
  const testGameboard = Gameboard();
  const testPlayer = Player();
  const testShip = Ship(2);
  testGameboard.placeShip(testShip, { x: "A", y: 1 }, "horizontal");

  testPlayer.attack(testGameboard, { x: "A", y: 2 });

  expect(testGameboard.allCoordinates["A"][1]).toBe("\u2022");
});
