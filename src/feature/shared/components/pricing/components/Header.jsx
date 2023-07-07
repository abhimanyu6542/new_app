/* eslint-disable react/prop-types */
import React from 'react';

function Header({ headerContent }) {
  const { headings, paras } = headerContent;
  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-0 bg-white py-5 md:py-10 lg:py-16 flex flex-col justify-center items-center">
        <h1 className="mb-5 text-2xl lg:text-4xl text-black text-center font-bold">
          {headings[0]}
        </h1>
        <p className="text-md text-gray-500 text-center font-medium">{paras[0]}</p>
      </div>
    </>
  );
}

export default Header;
