import React, { useState } from "react";

function Admin() {
  const [formdata, setFormData] = useState();

  const handleChange = (keyName, value) => {
    setFormData({ ...formdata, [keyName]: value });
  };

  return (
    <div>
      <label>Full Name:</label>
      <input
        style={{ marginTop: "30px", border: "solid" }}
        type="text"
        name="Full Name"
        placeholder="Enter Full Name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <hr></hr>
      <div>
        <label>Email Address:</label>
        <input
          style={{ marginTop: "10px", border: "solid" }}
          name="email"
          placeholder="Enter Email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>
    </div>
  );
}
export default Admin;
