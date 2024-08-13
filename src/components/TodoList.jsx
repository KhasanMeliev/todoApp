import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, onEdit, onRemove }) => {
  return (
    <div className="main">
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              todo={todo}
              onEdit={onEdit}
              onRemove={() => onRemove(todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
