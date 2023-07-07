/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';
// icons --
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function ContactDetails({ headingColor, paragraphColor, iconColor }) {
  const className1 = twMerge(
    'mb-2 md:mb-7 text-gray3 text-xl md:text-lg text-center md:text-start font-semibold',
    headingColor
  );
  const className2 = twMerge(
    'mb-7 text-white flex items-center justify-center md:justify-start',
    paragraphColor
  );
  const className3 = twMerge(
    'mb-7 text-white flex items-start justify-center md:justify-start',
    paragraphColor
  );
  const iconClass1 = twMerge('mr-4 text-xl', iconColor);
  const iconClass2 = twMerge('mr-4 text-xl mt-2', iconColor);

  return (
    <>
      <div>
        <h1 className={className1}>Contact Details</h1>

        <ul>
          <li className={className2}>
            <FaMapMarkerAlt className={iconClass1} />
            <p className="text-sm font-semibold">
              Amsterdam <br /> Netherlands
            </p>
          </li>

          <li className={className3}>
            <BsFillTelephoneFill className={iconClass2} />
            <div className="">
              <a href="#" className="text-sm font-semibold hover:underline">
                +8348329834
              </a>
              <p className="text-sm font-semibold">7 Days - 9am - 10pm</p>
            </div>
          </li>

          <li className={className2}>
            <IoMdMail className={iconClass1} />
            <a href="#" className="text-sm font-semibold hover:underline">
              snag@snagcart.io
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactDetails;
