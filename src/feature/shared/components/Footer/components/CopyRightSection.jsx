/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';
// icons --
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function CopyRightSection({ paragraphColor, iconColor }) {
  const className1 = twMerge('mb-4 md:mb-0 text-sm ', paragraphColor);
  const className2 = twMerge('text-xl mr-5 hover:text-orange6', iconColor);

  return (
    <>
      <div className="w-full px-10 py-5 flex flex-col md:flex-row justify-center md:justify-between items-center border-t-2 border-slate-400">
        <p className={className1}>© 2023 , All Rights Reserved</p>

        <div className="flex items-center">
          <ul>
            <li>
              <a href="#">
                <AiFillFacebook className={className2} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <BsTwitter className={className2} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <BsInstagram className={className2} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CopyRightSection;
