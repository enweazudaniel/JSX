import React from "react";
import ReactDOM from "react-dom";
const name = "hetti";
ReactDOM.render(
  <div>
    <h1>My Favorite Food</h1>
    <p>
      <ul>
        <li>Spag{name}</li>
        <li>Momos</li>
        <li>Fried Rice</li>
      </ul>
    </p>
  </div>,
  document.getElementById("root")
);
