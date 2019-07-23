import React from 'react';
import Slider from 'react-slick';

export default class ImageSlider extends React.Component {
  render() {
    var images = this.props.images;
    var imageKey = this.props.imageKey;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
    };
    return (
      <Slider {...settings}>
        {images.map((image, i) => <img src={image} key={imageKey} alt=""></img>)}
      </Slider>
    );
  }
}