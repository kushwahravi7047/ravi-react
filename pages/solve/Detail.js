import React from "react";
import Products from "./products";
import Newproduct from "./newproduct";

const Detail = () => {
  const products = [
    {
      id: "p1",
      title: "Ravi B Kushwah",
      amount: 100,
      date: new Date(2023, 5, 10),
    },
    {
      id: "p2",
      title: "Ravi B Kushwah",
      amount: 100,
      date: new Date(2023, 5, 10),
    },
    {
      id: "p3",
      title: "Ravi B Kushwah",
      amount: 100,
      date: new Date(2023, 5, 10),
    },
    {
      id: "p4",
      title: "Ravi B Kushwah",
      amount: 100,
      date: new Date(2023, 5, 10),
    },
  ];
  return (
    <div>
      <Newproduct />
      <Products item={products} />
    </div>
  );
};
export default Detail;
