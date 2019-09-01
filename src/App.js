import React from "react";
import "./App.css";

import TodoList from "./TodoList";

const details = {
  header: "Todoifier",
  headerColor: "red"
};

const headerDisplay = ({
  header: title = "Todo List",
  headerColor: color = "blue",
  background: background = "none"
}) => <h2 style={{ color: color, background: background }}>{title}</h2>;

const moreDetails = {
  ...details,
  header: "Best Todoifier",
  background: "black"
};

const App = () => (
  <div className="App">
    {headerDisplay(moreDetails)}
    <br />
    <TodoList />
  </div>
);

export default App;
