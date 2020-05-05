import IntelligentChoiceGenerator from "../src/IntelligentChoiceGenerator/IntelligentChoiceGenerator";
import {
  Gameboard,
  Ship,
  ComputerPlayer,
} from "../src/factories/factoryFunctions";

describe("Intelligent Choice Generator", () => {
  let gameboard = Gameboard();
  let ship = Ship(5);
  let compPlayer = ComputerPlayer();

  beforeEach(() => {
    gameboard = Gameboard();
    ship = Ship(5);
    compPlayer = ComputerPlayer();
  });

  afterEach(() => {
    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.originalCorrectGuess = undefined;
    IntelligentChoiceGenerator.previousGuessCorrect = false;
  });

  test("isCornerCoordinate() should return 'true' or 'false' given a coordinate parameter", () => {
    let isCorner = IntelligentChoiceGenerator.isCornerCoordinate({
      x: "A",
      y: 1,
    });
    expect(isCorner).toBe(true);

    isCorner = IntelligentChoiceGenerator.isCornerCoordinate({
      x: "J",
      y: 10,
    });
    expect(isCorner).toBe(true);

    isCorner = IntelligentChoiceGenerator.isCornerCoordinate({
      x: "I",
      y: 10,
    });
    expect(isCorner).toBe(false);
  });

  test("isBoundaryCoordinate() should return 'true' or 'false' given a coordinate parameter", () => {
    let isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "B",
      y: 1,
    });
    expect(isBoundary).toBe(true);

    isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "C",
      y: 10,
    });
    expect(isBoundary).toBe(true);

    isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "A",
      y: 8,
    });
    expect(isBoundary).toBe(true);

    isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "J",
      y: 6,
    });
    expect(isBoundary).toBe(true);

    isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "A",
      y: 1,
    });
    expect(isBoundary).toBe(false);

    isBoundary = IntelligentChoiceGenerator.isBoundaryCoordinate({
      x: "C",
      y: 4,
    });
    expect(isBoundary).toBe(false);
  });

  test("isMiddleCoordinate() should return 'true' or 'false' given a coordinate parameter", () => {
    let isMiddle = IntelligentChoiceGenerator.isMiddleCoordinate({
      x: "B",
      y: 2,
    });
    expect(isMiddle).toBe(true);

    isMiddle = IntelligentChoiceGenerator.isMiddleCoordinate({
      x: "J",
      y: 1,
    });
    expect(isMiddle).toBe(false);

    isMiddle = IntelligentChoiceGenerator.isMiddleCoordinate({
      x: "F",
      y: 10,
    });
    expect(isMiddle).toBe(false);
  });

  test("getAdjacentCoordinates() should push adjacent coordinates of a given coordinate parameter to 'smartGuesses'", () => {
    // Corner Coordinates
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "A", y: 1 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "B", y: 1 },
      { x: "A", y: 2 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "A", y: 10 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "B", y: 10 },
      { x: "A", y: 9 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "J", y: 1 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "I", y: 1 },
      { x: "J", y: 2 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "J", y: 10 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "I", y: 10 },
      { x: "J", y: 9 },
    ]);

    // Boundary Coordinates
    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "B", y: 1 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "A", y: 1 },
      { x: "C", y: 1 },
      { x: "B", y: 2 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "D", y: 10 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "C", y: 10 },
      { x: "E", y: 10 },
      { x: "D", y: 9 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "A", y: 5 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "B", y: 5 },
      { x: "A", y: 4 },
      { x: "A", y: 6 },
    ]);

    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "J", y: 7 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "I", y: 7 },
      { x: "J", y: 6 },
      { x: "J", y: 8 },
    ]);

    // Middle Coordinates
    IntelligentChoiceGenerator.resetSmartGuesses();
    IntelligentChoiceGenerator.getAdjacentCoordinates(
      { x: "B", y: 2 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "A", y: 2 },
      { x: "C", y: 2 },
      { x: "B", y: 1 },
      { x: "B", y: 3 },
    ]);
  });

  test("getAdjacentCoordinatesForCornerOnInitialGuess() should push available adjacent coordinates of a given coordinate parameter to 'smartGuesses'", () => {
    let gameboard = Gameboard();
    let ship = Ship(5);
    let compPlayer = ComputerPlayer();

    gameboard.placeShip(ship, { x: "A", y: 1 }, "horizontal");
    compPlayer.attack(gameboard, { x: "J", y: 9 });

    IntelligentChoiceGenerator.getAdjacentCoordinatesForCornerOnInitialGuess(
      { x: "J", y: 10 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "I", y: 10 },
    ]);
    IntelligentChoiceGenerator.resetSmartGuesses();
  });

  test("getAdjacentCoordinatesForBoundaryOnInitialGuess() should push available adjacent coordinates of a given coordinate parameter to 'smartGuesses'", () => {
    let gameboard = Gameboard();
    let ship = Ship(5);
    let compPlayer = ComputerPlayer();
    gameboard.placeShip(ship, { x: "E", y: 10 }, "horizontal");
    compPlayer.attack(gameboard, { x: "E", y: 9 });
    IntelligentChoiceGenerator.getAdjacentCoordinatesForBoundaryOnInitialGuess(
      { x: "E", y: 10 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "D", y: 10 },
      { x: "F", y: 10 },
    ]);
    IntelligentChoiceGenerator.resetSmartGuesses();
  });

  test("getAdjacentCoordinatesForMiddleOnInitialGuess() should push available adjacent coordinates of a given coordinate parameter to 'smartGuesses'", () => {
    let gameboard = Gameboard();
    let ship = Ship(5);
    let compPlayer = ComputerPlayer();
    gameboard.placeShip(ship, { x: "F", y: 4 }, "horizontal");
    compPlayer.attack(gameboard, { x: "F", y: 3 });
    compPlayer.attack(gameboard, { x: "F", y: 5 });
    compPlayer.attack(gameboard, { x: "E", y: 4 });

    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "F", y: 4 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "G", y: 4 }]);
    IntelligentChoiceGenerator.resetSmartGuesses();
  });

  test("isCoordinateAvailable() should return 'true' or 'false' given a coordinate parameter and gameboard", () => {
    let gameboard = Gameboard();
    let ship = Ship(5);
    let compPlayer = ComputerPlayer();

    gameboard.placeShip(ship, { x: "A", y: 1 }, "horizontal");
    compPlayer.attack(gameboard, { x: "A", y: 1 });
    compPlayer.attack(gameboard, { x: "A", y: 2 });

    let coordinateAvailabilityResult = IntelligentChoiceGenerator.isCoordinateAvailable(
      { x: "A", y: 1 },
      gameboard
    );
    expect(coordinateAvailabilityResult).toBe(false);

    coordinateAvailabilityResult = IntelligentChoiceGenerator.isCoordinateAvailable(
      { x: "E", y: 6 },
      gameboard
    );
    expect(coordinateAvailabilityResult).toBe(true);

    coordinateAvailabilityResult = IntelligentChoiceGenerator.isCoordinateAvailable(
      { x: "A", y: 2 },
      gameboard
    );
    expect(coordinateAvailabilityResult).toBe(false);
  });

  test("makeSmartGuess() returns a coordinate from 'smartGuesses' if available, or returns false", () => {
    gameboard.placeShip(ship, { x: "F", y: 4 }, "horizontal");
    compPlayer.attack(gameboard, { x: "F", y: 4 });
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "F", y: 4 };
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "F", y: 4 },
      gameboard
    );
    expect(IntelligentChoiceGenerator.makeSmartGuess()).toEqual({
      x: "E",
      y: 4,
    });

    // if guess is incorrect, remove first element of smartGuesses and update previousGuessCorrect
    // if gameboard.checkhit(x, y) false, reverse array and remove last element, and reverse again
  });

  test("getOrientation() returns either 'horizontal' or 'vertical' based on current and initial guess", () => {
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "F", y: 4 };

    expect(IntelligentChoiceGenerator.getOrientation({ x: "E", y: 4 })).toBe(
      "horizontal"
    );
    expect(IntelligentChoiceGenerator.getOrientation({ x: "F", y: 5 })).toBe(
      "vertical"
    );
  });

  test("updateSmartGuessesIf() should update 'smartGuesses' if current guess is incorrect", () => {
    // gameboard.placeShip(ship, { x: "F", y: 4 }, "horizontal");
    // compPlayer.attack(gameboard, { x: "F", y: 4 });
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "F", y: 4 };
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "F", y: 4 },
      gameboard
    );

    let currentGuess = IntelligentChoiceGenerator.makeSmartGuess();
    compPlayer.attack(gameboard, currentGuess);
    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);

    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "G", y: 4 },
      { x: "F", y: 3 },
      { x: "F", y: 5 },
    ]);

    // i need a function which logically deduces to remove an incorrect guess from smartGuesses

    // if correct guess
    //     - find orientation
    //     - remove the current guess
    //     - then remove any coordinate in smartGuesses not of the same orientation
    //     - find next coordinate based on initialGuess and current guess
  });

  test("updateSmartGuessesIf() should update 'smartGuesses' if current guess is correct and horizontal", () => {
    // ship starts on 'F4', has a length of 5, and is horizontal
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "G", y: 4 };
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "G", y: 4 },
      gameboard
    );

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);

    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "E", y: 4 },
      { x: "H", y: 4 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "H", y: 4 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "I", y: 4 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "J", y: 4 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);

    // ship starts on 'A1', has a length of 3, and is horizontal
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "B", y: 1 };
    IntelligentChoiceGenerator.getAdjacentCoordinatesForBoundaryOnInitialGuess(
      { x: "B", y: 1 },
      gameboard
    );

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "C", y: 1 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "D", y: 1 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);

    // ship starts on 'BH', has a length of 2, and is horizontal, with 'A4' already taken
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "H", y: 2 };
    compPlayer.attack(gameboard, { x: "G", y: 2 });
    compPlayer.attack(gameboard, { x: "J", y: 2 });
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "H", y: 2 },
      gameboard
    );

    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "I", y: 2 },
      { x: "H", y: 1 },
      { x: "H", y: 3 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);
  });

  test("updateSmartGuessesIf() should update 'smartGuesses' if current guess is correct and vertical", () => {
    // ship starts on 'E6', has a length of 3, and is vertical
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "E", y: 7 };
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "E", y: 7 },
      gameboard
    );

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "E", y: 6 },
      { x: "E", y: 8 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "E", y: 5 },
      { x: "E", y: 8 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "E", y: 8 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "E", y: 9 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);

    // ship starts on 'A1', has a length of 3, and is vertical
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "A", y: 2 };
    compPlayer.attack(gameboard, { x: "A", y: 4 });
    IntelligentChoiceGenerator.getAdjacentCoordinatesForBoundaryOnInitialGuess(
      { x: "A", y: 2 },
      gameboard
    );

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "A", y: 1 },
      { x: "A", y: 3 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([{ x: "A", y: 3 }]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);

    // ship starts on 'H9', has a length of 2, and is vertical
    IntelligentChoiceGenerator.originalCorrectGuess = { x: "H", y: 9 };
    compPlayer.attack(gameboard, { x: "G", y: 9 });
    compPlayer.attack(gameboard, { x: "I", y: 9 });
    IntelligentChoiceGenerator.getAdjacentCoordinatesForMiddleOnInitialGuess(
      { x: "H", y: 9 },
      gameboard
    );

    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "H", y: 8 },
      { x: "H", y: 10 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("incorrect", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([
      { x: "H", y: 10 },
    ]);

    IntelligentChoiceGenerator.updateSmartGuessesIf("correct", gameboard);
    expect(IntelligentChoiceGenerator.smartGuesses).toEqual([]);
  });
});
