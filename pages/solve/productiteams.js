import React, { useState } from "react";
import Productdate from "./productdate";
import Card from "./card";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("popcon");
    console.log("buttom clicked");
  }
  return (
    <Card className="product-item">
      <Productdate date={props.date} />
      <div className="product-item_description">
        <h2>{props.title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Card</button>
    </Card>
  );
};
export default ProductItem;
