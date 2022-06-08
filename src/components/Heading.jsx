import React from "react";

function Heading() {
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
  return <h1 className="heading">Here is my Favorite Food</h1>;
}

export default Heading;
