import React from "react";
import { useState } from "react";

export const Todoform = ({ addTask }) => {
  const [Task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: Task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <div className="formArea">
      <form onSubmit={handleFormSubmit} className="formContainer">
        <div className="inputWrapper">
          <input
            type="text"
            id="Task"
            className="input"
            value={Task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task..."
          />
        </div>
        <div className="inputBtn">
          <button className="submitBtn" type="submit">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
