import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  isDone = true;

  // const praStyle = { textDecoration: "line-through" };

  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Click to line-through</button>
      <button onClick={unStrike}>Click to line-through</button>
    </div>
  );
}

export default App;
