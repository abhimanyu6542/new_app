/* eslint-disable react/prop-types */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';

const Fourth = ({ data }) => {
  const { headings, paras, lists, image_one, image_two } = data.fourth;
  return (
    <div className="my-10 pt-12 flex flex-col lg:flex-row">
      <div className="mx-5 mb-5 md:w-1/2 bg-white hover:shadow-2xl rounded-lg">
        <div className="p-3 flex flex-col justify-between">
          <img src={`${IMAGE_BASE_URL + image_one}`} />
          <h1 className="pt-5 pb-3 text-xl sm:text-[2rem] font-bold text-start font-rubik">
            {headings[0]}
          </h1>
          <p className="w-5/6 pt-1 text-gray-500 text-sm sm:text-lg font-medium text-start">
            {paras[0]}
          </p>
          <p className=" mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium">
            {paras[1]}
          </p>
          <a
            href="#"
            className="text-blue-600 flex text-start text-sm sm:text-lg font-semibold my-2"
          >
            Learn More <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
      </div>
      <div className="mx-5 mb-5 md:w-1/2 bg-white hover:shadow-2xl rounded-lg">
        <div className="p-3 flex flex-col justify-between">
          <img src={`${IMAGE_BASE_URL + image_two}`} />
          <h1 className="pt-5 pb-3 text-xl sm:text-[2rem] font-bold text-start font-rubik">
            {headings[1]}
          </h1>
          <p className="w-5/6 pt-1 text-gray-500 text-sm sm:text-lg font-medium text-start">
            {paras[2]}
          </p>
          <ul className="list-disc px-5">
            <li className=" mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium">
              {lists[0]}
            </li>
            <li className=" mt-3 text-start text-gray-500 text-sm sm:text-lg font-medium">
              {lists[1]}
            </li>
          </ul>
          <a
            href="#"
            className="text-blue-600 flex text-start text-sm sm:text-lg font-semibold my-2"
          >
            Learn More <BsArrowRight className="ml-2 mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
