/* eslint-disable react/prop-types */
import React from 'react';

const Three_c = ({ head, content }) => {
  return (
    <div className="lg:w-1/3 mt-5 mx-2 p-2 bg-white rounded-lg flex flex-col justify-center items-center hover:shadow-lg">
      <h1 className="py-2 font-bold text-xl text-center">{head}</h1>
      <p className="mt-1 pb-8 text-center text-gray-500 text-base sm:text-lg font-medium">
        {content}
      </p>
    </div>
  );
};

export default Three_c;
