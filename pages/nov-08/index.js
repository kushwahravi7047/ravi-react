import React, { useState } from "react";
export default function MyApp() {
  return (
    <div>
      <h2>Start</h2>
      <MyButton />
    </div>
  );
}

function MyButton() {
  zd;
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
