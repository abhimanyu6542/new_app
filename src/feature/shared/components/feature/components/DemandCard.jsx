/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const DemandCard = ({ heading, description, icon, link }) => {
  console.log(link);
  return (
    <>
      <div className="sm:w-64 shadow-xl w-full bg-[#ffffff] rounded-xl sm:h-72 h-64 sm:p-2 m-6 mx-auto">
        <div className="ml-3 mt-3">
          <h1 className="h-14 w-14 rounded-full text-center self-center mt-5">
            <img src={icon} alt="icon" />
          </h1>
          <h1 className="my-3 text-[#323B4B] font-bold text-2xl leading-7">{heading}</h1>
          <p className="text-[#5F6673] font-medium leading-7">{description}</p>
          <div className="flex justify-start items-center my-5">
            <Link href={link} className="text-[#377DFF] font-medium text-xl leading-7">
              Read More
            </Link>
            <AiOutlineArrowRight className="ml-1 w-5 h-5 text-[#377DFF] font-medium text-xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemandCard;
