import React from "react";
import { useState, useEffect } from "react";

export const EditTask = ({ editedTask, updateTask, closeEditMode }) => {
  const [updateTaskName, setupdateTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updateTaskName });
  };

  return (
    <div
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
      className="editformConatainerMain"
    >
      <h1 className="edittaskHeading">Update Task</h1>
      <form className="editformContainer" onSubmit={handleFormSubmit}>
        <div className="editinputWrapper">
          <input
            type="text"
            id="editTask"
            className="editinput"
            value={updateTaskName}
            onInput={(e) => setupdateTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task..."
          />
        </div>
        <button className="editinputBtn" type="submit">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </div>
  );
};
