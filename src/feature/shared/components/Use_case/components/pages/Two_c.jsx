/* eslint-disable react/prop-types */
import React from 'react';
import Two_i_one from './Two_i_one';

const Two_c = ({ image, head, content }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 mx-2 mt-5 lg:w-1/3">
      <Two_i_one image={image} />
      <h1 className="py-2 text-xl font-bold">{head}</h1>
      <p className="pb-3 mt-1 text-base font-medium text-center text-gray-500 sm:text-lg">
        {content}
      </p>
    </div>
  );
};

export default Two_c;
