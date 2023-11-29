import React from "react";
import ProductItem from "./productiteams";
import Card from "./card";

const Products = (props) => {
  return (
    <Card className="products">
      <productItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <productItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />

      <productItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />

      <productItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Products;
