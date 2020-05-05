import Events from "../EventPubSub/EventPubSub";
import { Gameboard } from "../factories/Gameboard";

const IntelligentChoiceGenerator = (() => {
  let _previousGuessCorrect = false;
  let coordinateClues = [];
  let currentClue;
  let _originalCorrectGuess = undefined;
  let _smartGuesses = [];

  const resetSmartGuesses = () => {
    _smartGuesses = [];
  };

  const hasNotHit = () => {
    return _originalCorrectGuess === undefined && _smartGuesses.length === 0;
  };

  const resetData = () => {
    _originalCorrectGuess = undefined;
    _smartGuesses = [];
  };

  const resetOriginalCorrectGuess = () => {
    if (_smartGuesses.length === 0) {
      _originalCorrectGuess = undefined;
    }
  };

  const getAdjacentHorizontalCoordinate = (coordinate, direction) => {
    let xShiftFactor = direction === "left" ? -1 : 1;
    let shiftedXValue = String.fromCharCode(
      coordinate.x.charCodeAt(0) + xShiftFactor
    );
    return { x: shiftedXValue, y: coordinate.y };
  };

  const getAdjacentVerticalCoordinate = (coordinate, direction) => {
    let yShiftFactor = direction === "up" ? -1 : 1;
    let shiftedYValue = coordinate.y + yShiftFactor;
    return { x: coordinate.x, y: shiftedYValue };
  };

  const isCoordinateAvailable = (coordinate, gameboard) => {
    return gameboard.allCoordinates[coordinate.x][coordinate.y - 1] != " "
      ? false
      : true;
  };

  const isCornerCoordinate = (coordinate) => {
    return (coordinate.x === "A" &&
      (coordinate.y === 1 || coordinate.y === 10)) ||
      (coordinate.x === "J" && (coordinate.y === 1 || coordinate.y === 10))
      ? true
      : false;
  };

  const isBoundaryCoordinate = (coordinate) => {
    return (
      ((coordinate.y === 1 || coordinate.y === 10) &&
        coordinate.x != "A" &&
        coordinate.x != "J") ||
      (coordinate.y > 1 &&
        coordinate.y < 10 &&
        (coordinate.x === "A" || coordinate.x === "J"))
    );
  };

  const isMiddleCoordinate = (coordinate) => {
    return !isCornerCoordinate(coordinate) && !isBoundaryCoordinate(coordinate);
  };

  const getAdjacentCoordinatesForCorner = (coordinate) => {
    let verticalShiftFactor = coordinate.y === 1 ? "down" : "up";
    let horizontalShiftFactor;

    if (coordinate.x === "A") {
      horizontalShiftFactor = "right";
    } else if (coordinate.x === "J") {
      horizontalShiftFactor = "left";
    }

    _smartGuesses.push(
      getAdjacentHorizontalCoordinate(coordinate, horizontalShiftFactor),
      getAdjacentVerticalCoordinate(coordinate, verticalShiftFactor)
    );
  };

  const getAdjacentCoordinatesForCornerOnInitialGuess = (
    coordinate,
    gameboard
  ) => {
    getAdjacentCoordinatesForCorner(coordinate);

    _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
      return isCoordinateAvailable(coordinates, gameboard);
    });
  };

  const getAdjacentCoordinatesForBoundary = (coordinate) => {
    let horizontalShiftFactor;

    if (coordinate.x != "A" && coordinate.x != "J") {
      let verticalShiftFactor = coordinate.y === 1 ? "down" : "up";

      _smartGuesses.push(
        getAdjacentHorizontalCoordinate(coordinate, "left"),
        getAdjacentHorizontalCoordinate(coordinate, "right"),
        getAdjacentVerticalCoordinate(coordinate, verticalShiftFactor)
      );
    } else if (coordinate.x === "A" || coordinate.x === "J") {
      horizontalShiftFactor = coordinate.x === "A" ? "right" : "left";

      if (coordinate.y > 1 && coordinate.y < 10) {
        _smartGuesses.push(
          getAdjacentHorizontalCoordinate(coordinate, horizontalShiftFactor),
          getAdjacentVerticalCoordinate(coordinate, "up"),
          getAdjacentVerticalCoordinate(coordinate, "down")
        );
      }
    }
  };

  const getAdjacentCoordinatesForBoundaryOnInitialGuess = (
    coordinate,
    gameboard
  ) => {
    getAdjacentCoordinatesForBoundary(coordinate);

    _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
      return isCoordinateAvailable(coordinates, gameboard);
    });
  };

  const getAdjacentCoordinatesForMiddle = (coordinate) => {
    _smartGuesses.push(
      getAdjacentHorizontalCoordinate(coordinate, "left"),
      getAdjacentHorizontalCoordinate(coordinate, "right"),
      getAdjacentVerticalCoordinate(coordinate, "up"),
      getAdjacentVerticalCoordinate(coordinate, "down")
    );
  };

  const getAdjacentCoordinatesForMiddleOnInitialGuess = (
    coordinate,
    gameboard
  ) => {
    getAdjacentCoordinatesForMiddle(coordinate);

    _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
      return isCoordinateAvailable(coordinates, gameboard);
    });
  };

  const getAdjacentCoordinates = (coordinate, gameboard) => {
    if (isCornerCoordinate(coordinate)) {
      getAdjacentCoordinatesForCornerOnInitialGuess(coordinate, gameboard);
    } else if (isBoundaryCoordinate(coordinate)) {
      getAdjacentCoordinatesForBoundaryOnInitialGuess(coordinate, gameboard);
    } else if (isMiddleCoordinate(coordinate)) {
      getAdjacentCoordinatesForMiddleOnInitialGuess(coordinate, gameboard);
    }
  };

  const getOrientation = (coordinate) => {
    if (_originalCorrectGuess.y === coordinate.y) {
      return "horizontal";
    } else if (_originalCorrectGuess.x === coordinate.x) {
      return "vertical";
    }
  };

  const makeSmartGuess = () => {
    if (_originalCorrectGuess !== undefined && _smartGuesses.length !== 0) {
      return _smartGuesses[0];
    }
  };

  const updateSmartGuessesOnCorrectGuess = (currentGuess, gameboard) => {
    if (getOrientation(currentGuess) === "horizontal") {
      _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
        return coordinates.y === currentGuess.y;
      });

      if (
        String.fromCharCode(_originalCorrectGuess.x.charCodeAt(0)) >
        String.fromCharCode(currentGuess.x.charCodeAt(0))
      ) {
        if (currentGuess.x !== "A") {
          _smartGuesses.push(
            getAdjacentHorizontalCoordinate(currentGuess, "left")
          );

          _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
            return isCoordinateAvailable(coordinates, gameboard);
          });

          _smartGuesses.reverse();
        }
      } else {
        if (currentGuess.x !== "J") {
          _smartGuesses.push(
            getAdjacentHorizontalCoordinate(currentGuess, "right")
          );

          _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
            return isCoordinateAvailable(coordinates, gameboard);
          });
        }
      }
    } else {
      //  vertical
      _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
        return coordinates.x === currentGuess.x;
      });

      if (_originalCorrectGuess.y > currentGuess.y) {
        if (currentGuess.y !== 1) {
          _smartGuesses.push(getAdjacentVerticalCoordinate(currentGuess, "up"));

          _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
            return isCoordinateAvailable(coordinates, gameboard);
          });

          _smartGuesses.reverse();
        }
      } else {
        if (currentGuess.y !== 10) {
          _smartGuesses.push(
            getAdjacentVerticalCoordinate(currentGuess, "down")
          );

          _smartGuesses = _smartGuesses.filter((coordinates, idx, arr) => {
            return isCoordinateAvailable(coordinates, gameboard);
          });
        }
      }
    }
  };

  const updateSmartGuessesIf = (status, gameboard) => {
    if (status === "incorrect") {
      _smartGuesses.reverse().pop();
      _smartGuesses.reverse();
    } else {
      let currentGuess = _smartGuesses.reverse().pop();

      updateSmartGuessesOnCorrectGuess(currentGuess, gameboard);
    }

    if (_smartGuesses.length === 0) {
      _originalCorrectGuess = undefined;
    }
  };

  Events.on("resetIntelligentChoiceData", resetData);

  return {
    get previousGuessCorrect() {
      return _previousGuessCorrect;
    },

    set previousGuessCorrect(bool) {
      _previousGuessCorrect = bool;
    },

    get originalCorrectGuess() {
      return _originalCorrectGuess;
    },

    set originalCorrectGuess(coordinate) {
      _originalCorrectGuess = coordinate;
    },

    get smartGuesses() {
      return _smartGuesses;
    },

    hasNotHit,
    isCornerCoordinate,
    isBoundaryCoordinate,
    isMiddleCoordinate,
    isCoordinateAvailable,
    resetSmartGuesses,
    getAdjacentCoordinates,
    getAdjacentCoordinatesForCornerOnInitialGuess,
    getAdjacentCoordinatesForBoundaryOnInitialGuess,
    getAdjacentCoordinatesForMiddleOnInitialGuess,
    makeSmartGuess,
    updateSmartGuessesIf,
    getOrientation,
  };
})();

export default IntelligentChoiceGenerator;
