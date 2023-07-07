/* eslint-disable react/prop-types */
import React from 'react';

const Seven_sub = ({data}) => {
  return (
    <div className='grid justify-center w-full grid-cols-3 p-3 mt-16 sm:gap-40'>
        <div className='flex flex-col items-center justify-center p-4 m-2 bg-white rounded-md shadow-md'>
            <h1 className='text-3xl font-bold text-center text-green-400 lg:pt-10 lg:text-5xl'>{data.section1.heading} </h1>
            <p className='text-sm font-normal text-center text-black lg:pb-10'>{data.section1.content} </p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md -mt-7 mb-7 sm:mb-10'>
            <h1 className='text-3xl font-bold text-center text-orange-300 lg:pt-10 lg:text-5xl'>{data.section2.heading} </h1>
            <p className='font-normal text-black lg:pb-10'>{data.section2.content} </p>
        </div>
        <div className='flex flex-col items-center justify-center p-4 m-2 text-center bg-white rounded-md shadow-md'>
            <h1 className='text-3xl font-bold text-orange-600 lg:pt-10 lg:text-5xl'>{data.section3.heading} </h1>
            <p className='font-normal text-black lg:pb-10'>{data.section3.content} </p>
        </div>
    </div>
  )
}

export default Seven_sub;