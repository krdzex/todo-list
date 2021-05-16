import './App.css';
import React from "react";
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div className="App-wrapper">
      <h2 style={{ color: "white" }}>What is your plan for today?</h2>
      <TodoList />
    </div>

  );
}

export default App;
