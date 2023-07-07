/* eslint-disable react/prop-types */
import React from 'react';

const Six_c = ({ image, head, content }) => {
  return (
    <div className="py-10 pb-10 px-7 my-3 lg:my-10 mx-4 bg-white rounded-xl hover:shadow-lg">
      <img className="pb-5" src={image} />
      <h1 className="text-2xl font-bold text-start">{head}</h1>
      <p className="py-3 pb-5 text-gray-500 text-lg lg:text-lg font-medium text-start">{content}</p>
    </div>
  );
};

export default Six_c;
