import React from "react";
import "./Containers.css";

import Board from "./Board";

function FinishedTasksContainer(props) {
  return (
    <Board
      title="Done"
      className="task-container finished-tasks_container"
    ></Board>
  );
}

export default FinishedTasksContainer;
