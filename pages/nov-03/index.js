import React from "react";
import UserList from "./user";
import { Button } from "react-bootstrap";

export default function Ravi() {
  return (
    <>
      <div>
        <img src="images/imagess.jpg" alt="logo" />
        <UserList />
        <div>hello world this is new change in this code</div>
        <Button variant="primary" style={{ color: "red" }}>
          Ravi
        </Button>
        {""}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
      </div>
    </>
  );
}
