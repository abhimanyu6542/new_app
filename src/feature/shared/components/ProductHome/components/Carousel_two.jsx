/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Car_two_one from './Pages/Car_two_one';
import Car_two_two from './Pages/Car_two_two';
import Car_two_three from './Pages/Car_two_three';
import Car_two_four from './Pages/Car_two_four';
import Car_two_five from './Pages/Car_two_five';

export default class Carousel_two extends Component {
  render() {
    const count = this.props.windowSize >= 764 ? 3 : 1;
    const data = this.props.data;
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: count,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Car_two_one data={data} />
          </div>
          <div>
            <Car_two_two data={data} />
          </div>
          <div>
            <Car_two_three data={data} />
          </div>
          <div>
            <Car_two_four data={data} />
          </div>
          <div>
            <Car_two_five data={data} />
          </div>
        </Slider>
      </div>
    );
  }
}
