/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Two_i_one = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt="One Image" className="w-full h-auto" />

      {hovered && (
        <div className="absolute inset-0 bg-black opacity-80 flex justify-center items-center">
          <button
            type="button"
            className="w-1/2 bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-700"
          >
            Try Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Two_i_one;
