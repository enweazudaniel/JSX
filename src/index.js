import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

const name = "hetti";
const fName = "Enweazu";
const lName = "Daniel";
const d = new Date();
const currentTime = d.getHours();
const year = d.getFullYear();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
