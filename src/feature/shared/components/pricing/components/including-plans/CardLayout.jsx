/* eslint-disable react/prop-types */
import React from 'react';

function CardLayout({ iconName, heading }) {
  return (
    <>
      <div className="w-32 md:w-60 flex flex-col items-center justify-center">
        <div className="p-4 mb-2 text-2xl text-blue2 bg-blue1 border-0 rounded-full">
          {iconName}
        </div>
        <h1 className="text-md md:text-xl text-black text-center font-bold">{heading} </h1>
      </div>
    </>
  );
}

export default CardLayout;
