import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="enter todo..."
      />
      <button
        onClick={() => {
          onAdd(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
