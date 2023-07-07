/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';

function Company({ headingColor, paragraphColor }) {
  const className1 = twMerge(
    'mb-2 md:mb-7 text-xl md:text-lg text-center md:text-start font-semibold',
    headingColor
  );
  const className2 = twMerge('text-sm text-white font-semibold hover:underline', paragraphColor);

  return (
    <>
      <div className="mb-10 md:mb-0">
        <h1 className={className1}>Company</h1>

        <ul>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className={className2}>
              About us
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className={className2}>
              Privacy Policy
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className={className2}>
              Terms & condition
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="#" className={className2}>
              Rider
            </a>
          </li>
          <li className="mb-3 text-center md:text-start">
            <a href="/contact" className={className2}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Company;
