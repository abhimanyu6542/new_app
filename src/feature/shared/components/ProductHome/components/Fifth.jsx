/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';

const Fifth = ({ data }) => {
  const { headings, anchor, image_one, image_two, image_three, image_four } = data.fifth;
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="w-11/12 flex flex-col sm:flex-row justify-center items-center">
        <div className="m-3 border-t border-orange-400 bg-white flex flex-col justify-center items-center rounded-lg">
          <h1 className="py-2 font-bold text-xl">{headings[0]}</h1>
          <img className="p-2" src={`${IMAGE_BASE_URL + image_one}`} />
          <a
            href="#"
            className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
          >
            {anchor[0]} <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
        <div className="m-3 border-t border-green-400 bg-white flex flex-col justify-center items-center rounded-lg">
          <h1 className="py-2 font-bold text-xl">{headings[1]}</h1>
          <img className="p-2" src={`${IMAGE_BASE_URL + image_two}`} />
          <a
            href="#"
            className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
          >
            {anchor[1]} <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
      </div>
      <div className="w-11/12 flex flex-col sm:flex-row justify-center items-center">
        <div className="m-3 border-t border-blue-400 bg-white flex flex-col justify-center items-center rounded-lg">
          <h1 className="py-2 font-bold text-xl">{headings[2]}</h1>
          <img className="p-2" src={`${IMAGE_BASE_URL + image_three}`} />
          <a
            href="#"
            className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
          >
            {anchor[2]} <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
        <div className="m-3 border-t border-purple-400 bg-white flex flex-col justify-center items-center rounded-lg">
          <h1 className="py-2 font-bold text-xl">{headings[3]}</h1>
          <img className="p-2" src={`${IMAGE_BASE_URL + image_four}`} />
          <a
            href="#"
            className="my-2 text-blue-600 flex text-start text-sm sm:text-lg font-semibold hover:border-b hover:border-blue-500"
          >
            {anchor[3]} <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
