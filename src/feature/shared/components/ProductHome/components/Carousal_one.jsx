/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';

export default class Carousal_one extends Component {
  render() {
    const count = this.props.windowSize >= 764 ? 5 : 2;
    const data = this.props.data;
    const { image_one, image_two, image_three, image_four, image_five, image_six } =
      data.carousal_one;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: count,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
    };
    return (
      <div className="pt-7 px-1 mx-3 lg:mx-0 mb-10 h-28 bg-white rounded-lg shadow-lg flex flex-col justify-center">
        <Slider {...settings}>
          <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-2" src={`${IMAGE_BASE_URL + image_one}`} />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-5" src={`${IMAGE_BASE_URL + image_two}`} />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-5" src={`${IMAGE_BASE_URL + image_three}`} />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-8 lg:w-16 mb-6 mt-3 lg:mt-0" src={`${IMAGE_BASE_URL + image_four}`} />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-28 lg:w-36 mt-3" src={`${IMAGE_BASE_URL + image_five}`} />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-8 lg:w-16 mb-6 mt-3 lg:mt-0" src={`${IMAGE_BASE_URL + image_six}`} />
          </div>
        </Slider>
      </div>
    );
  }
}
