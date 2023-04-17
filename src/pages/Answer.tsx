import React from "react";
import { Button } from "antd";
function Answer() {
  return (
    <>
      <h1>Yes No WTF Game</h1>
      <p>Player: ..., ...</p>
      <p>Round ...</p>
      <div className="result">
        <p>Result: [...NO/YES/EMPTY]</p>
        <p>Winer: ...</p>
      </div>
      <Button className="btn--summary">Summary</Button>
    </>
  );
}

export default Answer;
