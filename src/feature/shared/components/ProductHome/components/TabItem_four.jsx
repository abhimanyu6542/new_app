/* eslint-disable react/prop-types */
import { list } from 'postcss';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';

const TabItem_four = ({ data }) => {
  const { headings, paras, lists, image_one } = data.tabItem_four;
  return (
    <div className="sm:px-14 mb-3 sm:mb-10 flex flex-col-reverse sm:flex-row-reverse items-center">
      <div className="px-2">
        <h1 className="text-xl sm:text-[2rem] font-bold text-start font-rubik">{headings[0]}</h1>
        <p className="w-16 mt-1 mb-3 h-[3px] bg-blue-600 text-start"></p>
        <p className="text-gray-500 w-5/6 text-sm sm:text-lg font-medium text-start">{paras[0]}</p>
        <ul className="my-3 text-gray-500 text-sm sm:text-lg font-medium">
          <li>
            <div className="flex flex-row">
              <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
              {lists[0]}
            </div>
          </li>
          <li>
            <div className="flex flex-row">
              <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
              {lists[1]}
            </div>
          </li>
          <li>
            <div className="flex flex-row">
              <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
              {list[2]}
            </div>
          </li>
        </ul>
      </div>
      <img className="sm:w-6/12 p-5 lg:h-[500px] w-11/12" src={`${IMAGE_BASE_URL + image_one}`} />
    </div>
  );
};

export default TabItem_four;
