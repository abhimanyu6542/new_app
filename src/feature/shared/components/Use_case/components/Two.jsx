/* eslint-disable react/prop-types */
import React from 'react';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';
import Two_c from './pages/Two_c';


const Two = ({ data }) => {

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <Two_c image={`${IMAGE_BASE_URL + data.section1.image}`} head={data.section1.heading} content={data.section1.content} />

      <Two_c image={`${IMAGE_BASE_URL + data.section2.image}`} head={data.section2.heading} content={data.section2.content} />

      <Two_c image={`${IMAGE_BASE_URL + data.section3.image}`} head={data.section3.heading} content={data.section3.content} />

    </div>
  );
};

export default Two;
