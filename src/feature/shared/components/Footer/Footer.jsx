/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';
// components --
import FooterHeading from './components/FooterHeading';
import AllDetails from './components/all-details/AllDetails';
import CopyRightSection from './components/CopyRightSection';

function Footer({ showHeading, bgColor, headingColor, paragraphColor, iconColor }) {
  const className1 = twMerge('', bgColor);

  return (
    <>
      <div className={className1}>
        <div>
          {
            showHeading ? <FooterHeading headingColor={headingColor} /> : null
          }
        </div>

        <div>
          <AllDetails
            headingColor={headingColor}
            paragraphColor={paragraphColor}
            iconColor={iconColor}
          />
        </div>

        <div>
          <CopyRightSection paragraphColor={paragraphColor} iconColor={iconColor} />
        </div>
      </div>
    </>
  );
}

export default Footer;
