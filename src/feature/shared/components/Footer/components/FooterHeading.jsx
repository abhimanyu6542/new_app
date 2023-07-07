/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';
// image --
import Img from '../../../../../assets/footer-shape.png';

function FooterHeading({ headingColor }) {
  const className1 = twMerge('w-full', headingColor);

  return (
    <>
      <div className={className1}>
        <div className="">
          <img src={Img} alt="decoration" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-10 text-3xl md:text-6xl font-semibold text-center">
            It’s easy to get <br /> started. Start now.
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-8/12 md:w-80 p-2 md:p-5 md:mr-3 mb-3 md:mb-0 text-white bg-violet1 border-0 rounded-lg outline-none"
            />
            <button className="w-8/12 md:w-auto p-2 md:p-5 bg-orange6 border-0 rounded-lg hover:bg-orange-500">
              Start For Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterHeading;
