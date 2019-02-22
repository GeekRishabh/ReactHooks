import React, { useState, useEffect } from "react";

export default function Form(props) {
  const { addTodo } = props;
  const [value, setValue] = useState(""); // getting global

  const handleSubmit = event => {
    event.preventDefault(); // synthetic envent

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  const handleOnChange = event => setValue(event.target.value); // change value for isCompleted

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleOnChange}
        placeholder="Enter your task"
      />
    </form>
  );
}
