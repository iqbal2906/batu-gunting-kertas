import React, { useState, useEffect } from "react";

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick = () => {
    const choices = ["batu", "gunting", "kertas"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "batu" && house === "gunting") {
      setPlayerWin("menang");
      setScore(score + 1);
    } else if (myChoice === "batu" && house === "kertas") {
      setPlayerWin("kalah");
      setScore(score - 1);
    } else if (myChoice === "gunting" && house === "kertas") {
      setPlayerWin("menang");
      setScore(score + 1);
    } else if (myChoice === "kertas" && house === "batu") {
      setPlayerWin("menang");
      setScore(score + 1);
    } else if (myChoice === "gunting" && house === "batu") {
      setPlayerWin("kalah");
      setScore(score - 1);
    } else if (myChoice === "kertas" && house === "gunting") {
      setPlayerWin("kalah");
      setScore(score - 1);
    } else {
      setPlayerWin("imbang");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className="game">
      Pilihanku:{myChoice} <br />
      Pilihan Musuh:{house} <br />
      Hasil:
      {playerWin === "menang" && <h2>Kamu Menang</h2>}
      {playerWin === "kalah" && <h2>Kamu Kalah</h2>}
      {playerWin === "imbang" && <h2>Seimbang</h2>}
    </div>
  );
};

export default Game;
