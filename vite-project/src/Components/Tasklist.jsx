import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = ({ tasks, deletTask, toggleTask, openEditmode }) => {
  return (
    <ul className="tastList">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <Taskitem
            key={task.id}
            task={task}
            deletTask={deletTask}
            toggleTask={toggleTask}
            openEditmode={openEditmode}
          />
        ))}
    </ul>
  );
};

export default Tasklist;
