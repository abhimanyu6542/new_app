/* eslint-disable react/prop-types */
import React from 'react';

const Eight_c = ({ image, head, name }) => {
  return (
    <a href="#" className="lg:w-1/4">
      <div className="mt-5 mx-2 p-3 bg-white rounded-t-lg hover:shadow-lg">
        <img src={image} />
        <div>
          <h1 className="py-2 font-bold text-xl hover:text-blue-500">{head}</h1>
          <p className="mt-1 pb-3 text-start text-gray-500 text-sm font-medium">{name}</p>
        </div>
      </div>
    </a>
  );
};

export default Eight_c;
