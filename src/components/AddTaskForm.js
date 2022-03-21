import React, { useState } from "react";

function AddTaskForm(props) {
  const [inputTask, setInputTask] = useState({ text: "", id: 0 });

  function getTask(e) {
    e.preventDefault();
    setInputTask({ ...inputTask, text: e.target.value });
  }

  return (
    <form>
      <input onChange={getTask} value={inputTask.text} />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.onCloseForm(false);
        }}
      >
        close
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.onAddTask({ ...inputTask, id: Math.random() });
          props.onCloseForm(false);
        }}
      >
        confirm
      </button>
    </form>
  );
}

export default AddTaskForm;
