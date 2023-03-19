import { useState } from "react";
// Components
import { Todoform } from "./Components/Todoform";
import Tasklist from "./Components/Tasklist";
import { EditTask } from "./Components/EditTask";
import "./Components/toform.css";
import UseLocalStorage from "./Hooks/UseLocalStorage";

function App() {
  const [tasks, setTasks] = UseLocalStorage("react-todo,tasks", []);
  const [editedTask, setEditedTask] = useState(null);
  const [PreviousFocusItems, setPreviousFocusItems] = useState(null);
  const [taskediting, setTaskediting] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deletTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setTaskediting(false);
    PreviousFocusItems.focus();
  };

  const openEditmode = (task) => {
    setEditedTask(task);
    setTaskediting(true);
    setPreviousFocusItems(document.activeElement);
  };

  return (
    <div className="mainContainer">
      <header className="mainConatiner">
        <h1 className="mainHeading">My Task List</h1>
      </header>
      {taskediting && (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <Todoform addTask={addTask} />
      {tasks && (
        <Tasklist
          tasks={tasks}
          deletTask={deletTask}
          toggleTask={toggleTask}
          openEditmode={openEditmode}
        />
      )}
      <p className="author">
        Made By{" "}
        <a href="https://www.linkedin.com/in/ravikantkr/" target="_blank">
          Ravikant K.
        </a>{" "}
      </p>
    </div>
  );
}

export default App;
