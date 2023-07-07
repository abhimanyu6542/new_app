/* eslint-disable react/prop-types */
import React from 'react';

const FeatureCard = ({ heading, description, icon }) => {
  return (
    <>
      <div className="sm:w-96 w-60 shadow-xl bg-[#ffffff] rounded-xl sm:h-72 h-80 sm:p-2 m-6 mx-auto">
        <div className="ml-3 mt-3">
          <h1 className="h-14 w-14 rounded-full text-center self-center mt-6">
            <img src={icon} alt="icon" />
          </h1>
          <h1 className="my-3 text-[#323B4B] font-bold text-2xl leading-7">{heading}</h1>
          <p className="text-[#5F6673] font-medium leading-7">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
