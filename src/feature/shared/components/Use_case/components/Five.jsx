/* eslint-disable react/prop-types */
import React from 'react';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';
import Five_c from './pages/Five_c';


const Five = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-10 lg:flex-row">
      <div className="flex flex-col items-center p-5 lg:w-3/5">
        <Five_c head={data.section1.heading} content={data.section1.content} />

        <Five_c head={data.section2.heading} content={data.section2.content} />

        <Five_c head={data.section3.heading} content={data.section3.content} />
      </div>
      <div className="flex items-center justify-center lg:w-2/5">
        <img src={`${IMAGE_BASE_URL + data.image}`} />
      </div>
    </div>
  );
};

export default Five;
