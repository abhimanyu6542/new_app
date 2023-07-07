/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {IMAGE_BASE_URL} from '../../../../../constants/url.constant';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default class Carousal_one_uc extends Component {
  render() {
    const count = this.props.windowSize >= 764 ? 5 : 2;
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
      <div className="flex flex-col justify-center px-1 mx-3 mb-10 bg-white rounded-lg shadow-lg pt-7 lg:mx-0 h-28">
        <Slider {...settings}>
          <div className="flex items-center justify-center">
            <img className="mt-2 w-28 lg:w-36" src={`${IMAGE_BASE_URL + this.props.data.image1}`} />
          </div>
          <div className="flex items-center justify-center">
            <img className="mt-5 w-28 lg:w-36" src={`${IMAGE_BASE_URL + this.props.data.image2}`} />
          </div>
          <div className="flex items-center justify-center">
            <img className="mt-5 w-28 lg:w-36" src={`${IMAGE_BASE_URL + this.props.data.image3}`} />
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 mt-3 mb-6 lg:w-16 lg:mt-0" src={`${IMAGE_BASE_URL + this.props.data.image4}`} />
          </div>
          <div className="flex items-center justify-center">
            <img className="mt-3 w-28 lg:w-36" src={`${IMAGE_BASE_URL + this.props.data.image5}`} />
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 mt-3 mb-6 lg:w-16 lg:mt-0" src={`${IMAGE_BASE_URL + this.props.data.image6}`} />
          </div>
        </Slider>
      </div>
    );
  }
}
