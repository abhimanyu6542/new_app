/* eslint-disable react/prop-types */
import React from 'react';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';

const First = ({ data }) => {
  const { headings, paras, image_one, image_two } = data.first;
  return (
    <div className="m-7 mt-0 lg:mb-14 lg:mx-auto py-5 w-fit lg:w-full flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center lg:items-start">
        <h1 className="py-10 pt-0 lg:w-4/5 text-3xl lg:text-[2.5rem] font-bold text-center lg:text-start font-rubik">
          {headings[0]}
        </h1>
        <p className="  text-center text-gray-500 text-lg lg:text-xl font-medium lg:text-start">
          {paras[0]}
        </p>
        <img className="py-4" src={`${IMAGE_BASE_URL + image_one}`} />
        <p className="text-gray-500 text-lg font-medium text-center lg:text-start">{paras[1]}</p>
        <button
          className="py-4 px-6 -mb-4 mt-10 w-52 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-xl"
          type="button"
        >
          Request a Demo
        </button>
      </div>
      <div className="m-2 mt-0">
        <img className="w-4/5 lg:w-[1124px] mx-auto" src={`${IMAGE_BASE_URL + image_two}`} />
      </div>
    </div>
  );
};

export default First;
