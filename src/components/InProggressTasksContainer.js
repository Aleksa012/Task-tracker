import React from "react";
import "./Containers.css";

import Board from "./Board";

function InProggressTasksContainer(props) {
  return (
    <Board
      title="Half Done"
      className="task-container in-progress_container"
    ></Board>
  );
}

export default InProggressTasksContainer;
