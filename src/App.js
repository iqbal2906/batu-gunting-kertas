import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header, Play, Game, Modal, Footer } from "./components";

const App = () => {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route
            path="/game"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
