import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <div className="carousel-img-container">
        <img src={item.img} alt="" className="carousel-img" />
      </div>
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

export default CarouselItem;
