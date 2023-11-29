import react from "react";
const styless = {
  Footer: {
    fontSize: "25px",
    color: "red",
    backgroundColor: "green",
    margin: "auto",
    width: "50%",
    border: "3px solid yellow",
    padding: "10px",
  },
};
export default function Footer() {
  return (
    <div style={styless.Footer}>
      <div>about Us</div>
      <div>Contact us</div>
      <div>Download App</div>
    </div>
  );
}
