import React, { useState } from "react";

const TodoCard = ({ todo, onRemove, onEdit }) => {
  const [newLabel, setNewLabel] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="todoItem">
      {isEditing ? (
        <>
          <input
            autoFocus
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            onBlur={() => setIsEditing(false)}
          />
          <i
            className="fa-regular fa-trash-can"
            onClick={() => {
              onEdit(todo.id, newLabel);
              setIsEditing(false);
            }}
          ></i>
        </>
      ) : (
        <p>{todo.label}</p>
      )}
      <div className="actionsContainer">
        <i 
          className="fa-solid fa-pen-to-square"
          onClick={() => setIsEditing(true)}
        ></i>
        <i className="fa-regular fa-trash-can" onClick={onRemove}></i>
      </div>
    </li>
  );
};

export default TodoCard;
