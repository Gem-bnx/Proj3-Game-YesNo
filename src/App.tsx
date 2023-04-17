import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Submit from "./pages/Submit";
import Answer from "./pages/Answer";
import Summary from "./pages/Summary";
import "./App.css"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create-game" element={<Create></Create>}></Route>
        <Route path="/submit-answer" element={<Submit></Submit>}></Route>
        <Route path="/answer" element={<Answer></Answer>}></Route>
        <Route path="/result" element={<Summary></Summary>}></Route>
      </Routes>
    </>
  );
}

export default App;
