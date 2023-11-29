import React from "react";
const styles = {
  Header: {
    fontSize: "25px",
    color: "red",
    backgroundColor: "green",
    margin: "auto",
    width: "50%",
    border: "3px solid yellow",
    padding: "10px",
  },
};
export default function Header() {
  return (
    <div style={styles.Header}>
      <div>Home:</div>
      <div>File</div>
      <div>Help</div>
    </div>
  );
}
