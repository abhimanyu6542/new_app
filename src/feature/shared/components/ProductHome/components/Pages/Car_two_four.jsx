/* eslint-disable react/prop-types */
import React from 'react';
import { IMAGE_BASE_URL } from '../../../../../../constants/url.constant';

const Car_two_four = ({ data }) => {
  const { headings, paras, image_one } = data.car_two_four;
  return (
    <div className="my-5 mx-2 p-2 bg-white flex flex-col justify-center items-center">
      <img src={`${IMAGE_BASE_URL + image_one}`} />
      <h1 className="py-2 font-bold text-xl">{headings[0]}</h1>
      <p className="mt-1 pb-3 sm:text-start text-center text-gray-500 text-base sm:text-lg font-medium">
        {paras[0]}
      </p>
    </div>
  );
};

export default Car_two_four;
