import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos(todos.concat([inputValue]));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((t, currentIndex) => index !== currentIndex));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="container-flex">
      <h1>My To-Do List</h1>
      <div className="container">
        <ul>
          <li>
            <input
              type="text"
              onChange={handleChange}
              value={inputValue}
              onKeyPress={handleKeyPress}
              placeholder="Add your task here"
            />
          </li>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <i
                className="fas fa-trash-alt"
                onClick={() => handleDeleteTodo(index)}
              ></i>
            </li>
          ))}
        </ul>
        <div>Tasks: {todos.length}</div>
        <button onClick={handleDeleteAll}>Delete all</button>
      </div>
    </div>
  );
};

export default Home;
