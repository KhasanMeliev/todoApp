import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: "Go to the gym" },
    { id: 2, label: "Eat more fruits and vege" },
    { id: 3, label: "Pick up the kids from school" },
  ]);

  const handleAddTodo = (text) => {
    setTodos((prevTodos) => {
      const newTodo = { id: new Date().getTime(), label: text };
      return [...prevTodos, newTodo];
    });
  };

  const handleEditTodo = (todoId, updatedLabel) => {
    console.log(todoId, updatedLabel);
    setTodos((prevTodos) => {
      return prevTodos.forEach((t) => {
        if (t.id === todoId) {
          return { id: t.id, label: updatedLabel };
        }
        return t;
      });
    });
  };

  const handleRemoveTodo = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== todoId);
    });
  };

  return (
    <>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onRemove={handleRemoveTodo}
        onEdit={handleEditTodo}
      />
    </>
  );
};

export default App;
