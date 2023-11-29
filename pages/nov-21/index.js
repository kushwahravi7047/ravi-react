import React, { useState } from "react";

function ChangingIn() {
  const [numberTable, setNumberTable] = useState([]);
  const Update = () => {
    let newValue = numberTable.length == 0 ? 0 : numberTable[0];
    setNumberTable([newValue + 1, ...numberTable]);
  };
  const handleRemoveItem = (index) => {
    const newNumberTable = numberTable.filter((ntValue, ntIndex) => {
      return ntIndex !== index;
    });

    setNumberTable([...newNumberTable]);
  };
  const handleEditItem = (index) => {
    const newUpdatedValue = +prompt("enter a value", numberTable[index]);
    const newArray = numberTable.map((ntValue, ntIndex) => {
      if (ntIndex === index) {
        return newUpdatedValue;
      }
      return ntValue;
    });
    setNumberTable(newArray);
  };
  return (
    <center style={{ marginTop: "20PX" }}>
      <ul>
        {numberTable.map((num, index) => {
          return (
            <div key={index} style={{ marginTop: "20px" }}>
              <span style={{ marginRight: "20px" }}>{num}</span>
              <button
                style={{
                  marginLeft: "20px",
                  background: "yellow",
                  border: "dotted",
                }}
                onClick={() => handleRemoveItem(index)}
              >
                DELETE
              </button>
              <button
                style={{
                  marginLeft: "10px",
                  background: "blue",
                  border: "solid",
                }}
                onClick={() => handleEditItem(index)}
              >
                CHANGE
              </button>
            </div>
          );
        })}
        <div style={{ marginTop: "40px", color: "green" }}>
          <button onClick={Update}>UPDATE</button>
        </div>
      </ul>
    </center>
  );
}

export default ChangingIn;
