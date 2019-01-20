import React from 'react'
import Slider from "react-slick";

const SliderComponent = ({images = []}) => {
  const sliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((item, index) => (
        <div key={index} className="items">
          <img src={item} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;

