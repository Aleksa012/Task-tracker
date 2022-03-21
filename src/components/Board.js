import React, { useState } from "react";

import Task from "./Task";

function Board(props) {
  function drop(e) {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("card_id");
    const card = document.getElementById(cardId);
    const progressBar = card.querySelector(".bar-fill");
    card.style.display = "block";

    e.target.appendChild(card);

    if (e.target.className.includes("in-progress_container")) {
      progressBar.classList.add("bar-fill_half");
      progressBar.classList.remove("bar-fill_full");
    } else if (e.target.className.includes("finished-tasks_container")) {
      progressBar.classList.add("bar-fill_full");
      progressBar.classList.remove("bar-fill_half");
    } else if (e.target.className.includes("new-tasks_container")) {
      progressBar.classList.remove("bar-fill_half");
      progressBar.classList.remove("bar-fill_full");
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  return (
    <div onDrop={drop} onDragOver={dragOver} className={props.className}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Board;
