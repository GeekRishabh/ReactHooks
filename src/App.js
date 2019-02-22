import React, { Component, useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks for test",
      isComplete: false
    },
    {
      text: "testing code",
      isComplete: false
    },
    {
      text: "Experiment",
      isComplete: true
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    newTodos[index].isComplete = !newTodos[index].isComplete;

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-list">
          <h1 className="title">React Hooks Example</h1>
        </div>
        <div className="Todo-form">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <Form addTodo={addTodo} />
        </div>
      </header>
    </div>
  );
}
