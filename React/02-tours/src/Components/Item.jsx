import React, { useState } from "react";

const Tour = ({ id, image, name, info, price }) => {
  return (
    <div className="single-item">
      <img src={image} alt={name} />
      <footer>
        <div className="item-info">
          <h4>{name}</h4>
          <h4 className="item-price">${price}</h4>
        </div>
        <p>{info}</p>
      </footer>
    </div>
  );
};

export default Tour;
