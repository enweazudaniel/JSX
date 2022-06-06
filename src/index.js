import React from "react";
import ReactDOM from "react-dom";

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
    <h1 className="heading">Here is my Favorite Food</h1>
    <img
      className="food-img"
      alt="spaghetti"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1eJylAOoW16FYeF_t5-xneKlemWuPEAHGFyF9o_G61vb-hJwhu2qJLPMaMVnjod9ZVg&usqp=CAU"
    />
  </div>,
  document.getElementById("root")
);
