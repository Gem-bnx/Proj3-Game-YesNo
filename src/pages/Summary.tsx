import React from "react";
import {Table} from "antd"
function Summary() {
    const dataSource = [
        {
          no: "1",
          name: "XinChao", 
          date: "April 16, 2023 10:14 AM",
          answer: "YES,NO",
          result: "NO,NO",
          score: 1
        }
      ];
      const columns1 = [
        { title: "No", dataIndex: "no" },
        { title: "Name", dataIndex: "name" },
        { title: "Date", dataIndex: "date" },
        { title: "Answer", dataIndex: "answer" },
        { title: "Results", dataIndex: "result" },
      ];
      const columns2 = [
        {title: "Summary", dataIndex:"name"},
        {title: "Correct percent", dataIndex:"..."},
        {title: "Total score", dataIndex:"score"},
      ]
  return (
    <>
      <h1>Yes No WTF Game</h1>
      <h2>Final result</h2>
      <label>Search</label>
      <input type="text" placeholder="Player's name"></input>
      <Table columns={columns1} dataSource={dataSource}></Table>
      <Table columns={columns2} dataSource={dataSource}></Table>
      <p>The match is drawn!</p>
    </>
  );
}

export default Summary;
