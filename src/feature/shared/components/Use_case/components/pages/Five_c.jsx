/* eslint-disable react/prop-types */
import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Five_c = ({ head, content }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-row justify-start text-xl font-bold">
        <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
        {head}
      </div>
      <div>
        <p className="mt-1 pb-3 pl-7 text-start text-gray-500 text-base sm:text-lg font-normal">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Five_c;
