import React from "react";

function Newproductform() {
  return (
    <form>
      <div className="'new-product_title">
        <label>title</label>
        <input type="text"></input>
      </div>
      <div className="new-product_date">
        <label>Date</label>
        <input type="date"></input>
      </div>
      <div className="new-product_button">
        <button type="sumit">Add Product</button>
      </div>
    </form>
  );
}

export default Newproductform;
