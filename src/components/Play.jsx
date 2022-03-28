import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice }) => {
  const handleChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/game">
        <div data-id="batu" onClick={handleChoice} className="icon icon--paper">
          Batu
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="gunting"
          onClick={handleChoice}
          className="icon icon--paper"
        >
          Gunting
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="kertas"
          onClick={handleChoice}
          className="icon icon--paper"
        >
          Kertas
        </div>
      </Link>
    </div>
  );
};

export default Play;
