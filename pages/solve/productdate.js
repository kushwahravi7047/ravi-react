import React from "react";

const ProductDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getfullyear();

  return (
    <div className="product-date">
      <div className="product-date_month">{month}</div>
      <div className="product-date_year">{year}</div>
      <div className="product-date_day">{day}</div>
    </div>
  );
};
export default ProductDate;
