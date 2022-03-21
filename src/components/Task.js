import React, { useState } from "react";
import "./Task.css";

function Task(props) {
  const [barFill, setBarFill] = useState("");

  function dragStart(e) {
    e.dataTransfer.setData("card_id", e.target.id);

    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  }

  function dragOver(e) {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="card"
    >
      <div className="wrapper">
        <div className="bar"></div>
        <div className={`bar bar-fill${barFill}`}></div>
      </div>
      <p className="text">{props.text}</p>
    </div>
  );
}

export default Task;
