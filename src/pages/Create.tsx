import React, { useState } from "react";
import { Table, Button } from "antd";
import PlayersList from "../components/PlayersList";
export interface IState {
  players :{
    name: string
  }[]
}
function Create() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  const [players, setplayers] = useState<IState["players"]>([{name:"Ngoc"}]);
  
  const [start, setStart] = useState(false);
  const handleAdd = () => {};
  const handleStart = () => {};
  return (
    <>
      <h1>Yes No WTF Game</h1>
      <p>
        Yes or No is a fun and addicting game, perfect for playing on your own
        or with friends or family, This game contains hundreds of the best hand
        picked Yes or No questions. Vote which option you prefer and view real
        time statistics on what option was the most popular.
      </p>
      <div
        className={display == false ? "display create__add" : "hide create__add"}
      >
        <p>Please enter a new game</p>
        <label>New game</label>
        <input
          placeholder="Enter name..."
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Button onClick={() => setDisplay(true)}>OK</Button>
        <Button>Cancel</Button>
      </div>
      <PlayersList players={players} ></PlayersList>
    </>
  );
}

export default Create;
