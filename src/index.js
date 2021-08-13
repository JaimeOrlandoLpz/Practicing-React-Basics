//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
const style = {
  color: "green"
};
function determineMessage() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour <= 11) {
    style.color = "red";
    return "Morning";
  } else if (hour >= 12 && hour <= 18) {
    return "Afternoon";
  } else {
    style.color = "blue";
    return "Night";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={style}>
      Good {determineMessage()}
    </h1>
  </div>,
  document.getElementById("root")
);
