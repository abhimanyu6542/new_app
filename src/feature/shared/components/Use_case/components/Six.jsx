/* eslint-disable react/prop-types */
import React from 'react';
import Six_c from './pages/Six_c';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';


const Six = ({ data }) => {
  return (
    <div className='grid justify-center grid-cols-1 lg:grid-cols-3'>
      <Six_c image={`${IMAGE_BASE_URL + data.section1.image}`} head={data.section1.heading} content={data.section1.content} />

      <Six_c image={`${IMAGE_BASE_URL + data.section2.image}`} head={data.section2.heading} content={data.section2.content} />

      <Six_c image={`${IMAGE_BASE_URL + data.section3.image}`} head={data.section3.heading} content={data.section3.content} />

      <Six_c image={`${IMAGE_BASE_URL + data.section4.image}`} head={data.section4.heading} content={data.section4.content} />

      <Six_c image={`${IMAGE_BASE_URL + data.section5.image}`} head={data.section5.heading} content={data.section5.content} />

    </div>
  )
}

export default Six;