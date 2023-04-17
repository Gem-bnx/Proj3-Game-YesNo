import React from "react";
import { Button } from "antd";
function Submit() {
  return (
    <>
      <h1>Yes No WTF Game</h1>
      <p>...'s turn</p>
      <div className="submit__form">
        <div>
          <label>Round ...</label>
          <Button className="btn--yes">YES</Button>
          <Button className="btn--no">NO</Button>
        </div>
      </div>
      <Button className="btn--submit">Submit Answer</Button>
    </>
  );
}

export default Submit;
