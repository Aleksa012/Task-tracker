import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./AddTaskForm.css";

function AddTaskForm(props) {
  const [inputTask, setInputTask] = useState({ text: "", id: 0 });
  const [isValid, setIsValid] = useState(false);

  function getTask(e) {
    e.preventDefault();
    setInputTask({ ...inputTask, text: e.target.value });

    if (e.target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return createPortal(
    <Backdrop onCloseForm={props.onCloseForm}>
      <form className="task-form">
        <input onChange={getTask} value={inputTask.text} />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onCloseForm(false);
          }}
        >
          close
        </button>
        {isValid && (
          <button
            onClick={(e) => {
              e.preventDefault();
              props.onAddTask({ ...inputTask, id: Math.random() });
              props.onCloseForm(false);
            }}
          >
            confirm
          </button>
        )}
      </form>
    </Backdrop>,
    document.getElementById("modal")
  );
}

export default AddTaskForm;

function Backdrop(props) {
  return (
    <div
      onClick={(e) => {
        if (!e.target.classList.contains("backdrop")) return;
        e.preventDefault();
        props.onCloseForm(false);
      }}
      className="backdrop"
    >
      {props.children}
    </div>
  );
}
