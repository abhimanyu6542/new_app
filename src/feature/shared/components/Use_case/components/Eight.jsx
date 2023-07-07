/* eslint-disable react/prop-types */
import React from 'react';
import Eight_c from './pages/Eight_c';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';


const Eight = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-16 lg:flex-row">
      <Eight_c image={`${IMAGE_BASE_URL + data.section1.image}`} head={data.section1.heading} name={data.section1.name} />

      <Eight_c image={`${IMAGE_BASE_URL + data.section2.image}`} head={data.section2.heading} name={data.section2.name} />

      <Eight_c image={`${IMAGE_BASE_URL + data.section3.image}`} head={data.section3.heading} name={data.section3.name} />

      <Eight_c image={`${IMAGE_BASE_URL + data.section4.image}`} head={data.section4.heading} name={data.section4.name} />

    </div>
  );
};

export default Eight;
