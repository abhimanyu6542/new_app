/* eslint-disable react/prop-types */
import React from 'react';

const Car_three_com = ({ data }) => {
  const { headings, paras } = data.car_three_com;
  return (
    <div className="flex flex-col p-3 m-10 mb-20 bg-white rounded-lg shadow-md md:mx-auto md:w-fit lg:w-4/6 md:flex-row">
      <div className="flex flex-col items-center justify-center m-5">
        <iframe
          className="w-40 h-20 md:w-60 md:h-32"
          src="https://www.youtube.com/embed/IUN664s7N-c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="text-lg pt-2 font-semibold">{headings[0]}</h1>
        <p className="text-base font-medium">{paras[0]}</p>
      </div>
      <div className="text-base font-medium text-center text-gray-500 md:m-5 md:text-start sm:text-lg">
        <p>{paras[1]}</p>
      </div>
    </div>
  );
};

export default Car_three_com;
