/* eslint-disable react/prop-types */
import React from 'react'
import Three_c from './pages/Three_c'


const Three = ({ data }) => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <Three_c head={data.section1.heading} content={data.section1.content} />

      <Three_c head={data.section2.heading} content={data.section2.content} />

      <Three_c head={data.section3.heading} content={data.section3.content} />

    </div>
  )
}

export default Three