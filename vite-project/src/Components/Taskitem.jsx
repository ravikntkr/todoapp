import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Taskitem = ({ task, deletTask, toggleTask, openEditmode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };
  return (
    <li className="taskitems">
      <div className="taskitemInner">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
          name={task.name}
          id={task.id}
          className="checkbox"
        />
        <label htmlFor={task.id} className="tasklistitemtxt">
          {task.name}
          <div class="checkmark"></div>
        </label>
      </div>
      <div className="btnGroup">
        <button className="edit" onClick={() => openEditmode(task)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        {/* Delete button */}
        <button className="delete" onClick={() => deletTask(task.id)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default Taskitem;
