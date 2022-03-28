import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <span>Batu</span>
        <span>Gunting</span>
        <span>Kertas</span>
      </div>
      <div className="score-box">
        <span>Skor</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
