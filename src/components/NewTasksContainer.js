import React, { useState } from "react";
import "./Containers.css";

import Board from "./Board";
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

function NewTasksContainer() {
  const [showForm, setShowForm] = useState(false);
  const [newTasks, SetNewTasks] = useState([]);

  function getNewTask(input) {
    SetNewTasks((prevTasks) => [...prevTasks, input]);
  }

  return (
    <Board title="Add Tasks" className="task-container new-tasks_container">
      {newTasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} />
      ))}
      <button
        className="add-task_btn"
        onClick={(e) => {
          e.preventDefault();
          setShowForm(true);
        }}
      >
        + Task
      </button>
      {showForm && (
        <AddTaskForm onCloseForm={setShowForm} onAddTask={getNewTask} />
      )}
    </Board>
  );
}

export default NewTasksContainer;
