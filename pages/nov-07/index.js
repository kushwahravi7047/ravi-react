import React from "react";
import style from "./style.module.css";

function clickMe() {
  alert("you click me !");
}

export default function App() {
  return (
    <div>
      <button onClick={"click me"}>Button</button>
    </div>
  );
}
