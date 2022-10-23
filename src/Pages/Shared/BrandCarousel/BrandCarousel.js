import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/Brands/b1.jpeg";
import Brand2 from "../../../assets/Brands/b2.jpeg";

const BrandCarousel = () => {
  return (
    <Carousel className="border-rounded">
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
