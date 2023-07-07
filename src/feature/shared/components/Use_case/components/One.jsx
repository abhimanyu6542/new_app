/* eslint-disable react/prop-types */
import React from 'react';
import {IMAGE_BASE_URL} from '../../../../../constants/url.constant';

const One = ({ data }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-center pt-5 mt-0 m-7 lg:mx-auto w-fit lg:w-full lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full lg:items-start">
        <h1 className="py-5 pt-0 lg:w-4/5 text-3xl lg:text-[2.5rem] font-bold text-center lg:text-start font-rubik">
          {data.heading}
        </h1>
        <p className="text-lg font-medium text-center text-gray-500 lg:text-xl lg:text-start">
          {data.paragraph}         
        </p>
        <button
          className="px-6 py-4 mt-4 text-xl font-bold text-white bg-blue-600 lg:mt-6 w-52 hover:bg-blue-500 rounded-xl"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="relative m-2 mt-0">
        <img className="w-4/5 lg:w-[900px] mx-auto" src={`${IMAGE_BASE_URL + data.image1}`} />
        <img className='max-w-[80%] absolute top-[60%] transform -translate-y-1/2 h-4/5' src={`${IMAGE_BASE_URL + data.image2}`} />
      </div>
    </div>
  );
};

export default One;
