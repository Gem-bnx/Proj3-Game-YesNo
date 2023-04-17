import React, { useState } from "react";
import { Table, Button } from "antd";
import { IState as IProps } from "../pages/Create";
import { TiDelete } from "react-icons/ti";
function PlayersList({ players }: IProps) {
  const add = () : JSX.Element[]=> {
    players.map((player, index) => {
      return {
        no:index,
        name: player.name,
        del: <Button>Del</Button>
      };
    });
  };
  const dataSource = ;
  const columns = [
    { title: "No.", dataIndex: "no" },
    { title: "Player", dataIndex: "name" },
    { title: "Action", dataIndex: "del" },
  ];
  return (
    <div className="">
      <div className="create__display">
        <Table columns={columns} dataSource={dataSource} bordered />
      </div>
      <Button>Add more player</Button>
      <div className="create__round">
        <label>Total round</label>
        <input placeholder="The number of round"></input>
        <Button>Start</Button>
      </div>
    </div>
  );
}

export default PlayersList;
