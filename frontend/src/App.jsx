import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {

  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className="task-div">
        <input type="text" name="todo" id="todo" />
        <button type="button">Add Task</button>
      </div>
    </>
  )
}

