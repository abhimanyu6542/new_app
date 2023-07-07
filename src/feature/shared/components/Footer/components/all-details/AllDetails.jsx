/* eslint-disable react/prop-types */
import React from 'react';
// components --
import About from './About';
import Company from './Company';
import MoreLInks from './MoreLInks';
import ContactDetails from './ContactDetails';

function AllDetails({ headingColor, paragraphColor, iconColor }) {
  return (
    <>
      <div className="my-20 md:px-20 lg:px-0 pt-10 w-full flex flex-col lg:flex-row items-center md:items-start justify-evenly">
        <div className="w-full mb-10 lg:mb-0 flex flex-col md:flex-row items-center md:items-start justify-between lg:justify-evenly">
          <About headingColor={headingColor} paragraphColor={paragraphColor} />
          <Company headingColor={headingColor} paragraphColor={paragraphColor} />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between lg:justify-evenly">
          <MoreLInks headingColor={headingColor} paragraphColor={paragraphColor} />
          <ContactDetails
            headingColor={headingColor}
            paragraphColor={paragraphColor}
            iconColor={iconColor}
          />
        </div>
      </div>
    </>
  );
}

export default AllDetails;
