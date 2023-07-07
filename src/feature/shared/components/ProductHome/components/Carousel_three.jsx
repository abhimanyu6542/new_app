/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Car_three_com from './Car_three_com';

export default class Carousel_three extends Component {
  render() {
    const data = this.props.data;
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Car_three_com data={data} />
          </div>
          <div>
            <Car_three_com data={data} />
          </div>
          <div>
            <Car_three_com data={data} />
          </div>
          <div>
            <Car_three_com data={data} />
          </div>
          <div>
            <Car_three_com data={data} />
          </div>
        </Slider>
      </div>
    );
  }
}
