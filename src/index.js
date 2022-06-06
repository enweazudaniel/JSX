import React from "react";
import ReactDOM from "react-dom";
const name = "hetti";
const fName = "Enweazu";
const lName = "Daniel";
const d = new Date();
const year = d.getFullYear();
ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Food</h1>
    <img
      className="food-img"
      alt="spaghetti"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1eJylAOoW16FYeF_t5-xneKlemWuPEAHGFyF9o_G61vb-hJwhu2qJLPMaMVnjod9ZVg&usqp=CAU"
    />
  </div>,
  document.getElementById("root")
);
