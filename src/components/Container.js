import React, { useState } from "react";

import "./Container.css";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;
