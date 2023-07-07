/* eslint-disable react/prop-types */
import React from 'react';

function DeliveryManageMent({ data }) {
  const { headings, paras } = data;
  return (
    <>
      <div className="p-5 mb-7 bg-white border-0 rounded-xl shadow-2xl">
        <p className="w-fit px-4 py-1 mb-1 text-xs bg-blue1 border-0 rounded-full">{paras[0]}</p>

        <h1 className="mb-3 text-md text-black font-bold">{headings[0]}</h1>
        <p className="mb-3 text-sm text-gray font-medium">{paras[1]}</p>
        <button className="px-5 py-1.5 text-sm text-white font-bold border-0 rounded-md bg-blue2 hover:text-blue2 hover:bg-blue1">
          Talk To Sales
        </button>
      </div>
    </>
  );
}

export default DeliveryManageMent;
