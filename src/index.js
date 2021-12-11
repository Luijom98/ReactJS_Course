import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Luis Jose</h1>
      <p>I like coding, exercice and chess</p>
      <ol>
        <li>Spain</li>
        <li>Amsterdam</li>
        <li>Italy</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
