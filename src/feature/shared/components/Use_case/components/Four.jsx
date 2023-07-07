/* eslint-disable react/prop-types */
import React from 'react';
import {IMAGE_BASE_URL} from '../../../../../constants/url.constant';
import Four_c from './pages/Four_c';

const Four = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 lg:flex-row">
      <div className="flex items-center justify-center lg:w-3/5">
        <img src={`${IMAGE_BASE_URL + data.image}`} />
      </div>
      <div className="flex flex-col items-center p-5 lg:w-2/5">
        <Four_c head={data.section1.heading} content={data.section1.content} />

        <Four_c head={data.section2.heading} content={data.section2.content} />

        <Four_c head={data.section3.heading} content={data.section3.content} />
      </div>
    </div>
  );
};

export default Four;
