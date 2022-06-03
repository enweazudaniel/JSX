import React from "react";
import ReactDOM from "react-dom";
const name = "hetti";
const fName = "Enweazu";
const lName = "Daniel";
const d = new Date();
const year = d.getFullYear();
ReactDOM.render(
  <div>
    <h1>My Favorite Food</h1>
    <p>
      {fName} {lName} {}
      Your lucky number {Math.floor(Math.random() * 10)}
      <ul>
        <li>Spag{name}</li>
        <li>Momos</li>
        <li>Fried Rice</li>
      </ul>
      Copyright {year}
    </p>
  </div>,
  document.getElementById("root")
);
