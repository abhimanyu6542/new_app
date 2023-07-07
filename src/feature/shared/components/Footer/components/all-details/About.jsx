/* eslint-disable react/prop-types */
import React from 'react';
import { twMerge } from 'tailwind-merge';

function About({ headingColor, paragraphColor }) {
  const className1 = twMerge(
    'mb-2 md:mb-7 text-xl text-center md:text-start font-semibold',
    headingColor
  );
  const className2 = twMerge('text-md text-center md:text-start', paragraphColor);

  return (
    <>
      <div className="mb-10 md:mb-0">
        <div>
          <h1 className={className1}>Snagcart</h1>
        </div>

        <p className={className2}>
        Snagcart is a no-code hyperlocal commerce <br />
        and delivery stack to set up and <br /> manage on-demand businesses.
        </p>
      </div>
    </>
  );
}

export default About;
