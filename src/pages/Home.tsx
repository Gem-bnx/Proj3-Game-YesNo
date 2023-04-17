import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [start, setStart] = useState(false);
  return (
    <>
      <h1>Yes No WTF Game</h1>
      <p>
        Yes or No is a fun and addicting game, perfect for playing on your own
        or with friends or family, This game contains hundreds of the best hand
        picked Yes or No questions. Vote which option you prefer and view real
        time statistics on what option was the most popular.
      </p>
      <button
        onClick={() => setStart(true)}
        className={start == false ? "display" : "hide"}
      >
        Start Game
      </button>
      <Link to="/create-game">
        <button className={start == false ? "hide" : "display"}>
          Add player
        </button>
      </Link>
    </>
  );
}

export default Home;
