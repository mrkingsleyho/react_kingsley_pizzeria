import React from "react";

function MenuItem({ image, name, price, reviews }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <p> Reviews: {reviews} </p>
    </div>
  );
}

export default MenuItem;
