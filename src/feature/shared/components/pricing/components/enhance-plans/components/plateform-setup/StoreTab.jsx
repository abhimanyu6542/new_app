/* eslint-disable react/prop-types */
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

function StoreTab({ data }) {
  const { paras, lists } = data;
  return (
    <>
      <div className="text-sm md:text-md text-gray font-medium">
        <p className="mb-3">
          {paras[0]} <span className="font-bold">{paras[1]}</span> {paras[2]}
        </p>
        <ul>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[0]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[1]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[2]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[3]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[4]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[5]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[6]}
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" /> {lists[7]}
          </li>
        </ul>
        <p className="mb-3">{paras[3]}</p>
      </div>
    </>
  );
}

export default StoreTab;
