import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import NewTasksContainer from "./components/NewTasksContainer";
import InProggressTasksContainer from "./components/InProggressTasksContainer";
import FinishedTasksContainer from "./components/FinishedTasksContainer";

function App() {
  return (
    <Container>
      <NewTasksContainer />
      <InProggressTasksContainer />
      <FinishedTasksContainer />
    </Container>
  );
}

export default App;
