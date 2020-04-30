import Events from "../EventPubSub/EventPubSub";
import UIBoardUtil from "../UI/UIBoardUtil";

const UIGameInteraction = (() => {
  console.log("UI Game Interaction");

  const initiateGameTurn = (event) => {
    let tile = event.target;
    let selectedCoordinates = UIBoardUtil.getStartingCoordinates(tile);

    if (
      selectedCoordinates.x === "" ||
      selectedCoordinates.y === 0 ||
      tile.textContent !== " "
    ) {
      return;
    }

    Events.emit("gameTurn", {
      x: selectedCoordinates.x,
      y: selectedCoordinates.y,
      tile: event.target,
    });
  };

  const removeClickListenerOnComputerBoard = (computerBoard) => {
    computerBoard.removeEventListener("click", initiateGameTurn);
  };

  const addClickListenerOnComputerBoard = (computerBoard) => {
    computerBoard.addEventListener("click", initiateGameTurn);
  };

  Events.on("addListenerToClickComputerBoard", addClickListenerOnComputerBoard);
  Events.on(
    "removeListenerToClickComputerBoard",
    removeClickListenerOnComputerBoard
  );

  // let playerGameboard = document.querySelector(`.${GameDisplayStyles.board}`);
})();

export default UIGameInteraction;
