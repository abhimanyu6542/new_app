/* eslint-disable react/prop-types */
import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

function MarketPlaceTab({ data }) {
  const { paras, lists } = data;
  return (
    <>
      <div className="text-sm md:text-md text-gray font-medium">
        <p className="mb-3">{paras[0]}</p>
        <ul>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" />
            {lists[0]} <span className="font-bold">{lists[1]}</span>
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" />
            {lists[2]} <span className="font-bold">{lists[3]}</span>
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" />
            {lists[4]} <span className="font-bold">{lists[5]}</span>
          </li>
          <li className="mb-3 flex items-start">
            <BsCircleFill className="mr-3 mt-2 text-[9px] text-blue2" />
            {lists[6]} <span className="font-bold">{lists[7]}</span>
          </li>
        </ul>
        <p className="mb-3">
          {paras[1]} <span className="font-bold">{paras[2]}</span>{' '}
        </p>
        <p className="mb-3">{paras[3]}</p>
      </div>
    </>
  );
}

export default MarketPlaceTab;
