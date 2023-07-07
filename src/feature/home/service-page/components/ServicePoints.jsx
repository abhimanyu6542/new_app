/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// images --
import Image1 from '../../../../assets/athletics.svg';
import Image2 from '../../../../assets/archery-target.svg';
import Image3 from '../../../../assets/money-coins.svg';


function ServicePoints() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className='flex flex-col items-center'>
                    <div className='mb-7 relative'>
                        <p className='z-10 absolute -top-5 -left-8 p-8 bg-[#FFD116] border-0 rounded-full'></p>
                        <img src={Image1} alt="athletics" className='z-20 relative' />
                    </div>
                    <h2 className='mb-3 text-xl font-semibold'>Manage Smartly</h2>
                    <p className='text-base text-center text-gray4'>Stay on top of your task lists and stay in touch with what's happening</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='mb-7 relative'>
                        <p className='z-10 absolute -top-5 -left-8 p-8 bg-[#96F7D2] border-0 rounded-full'></p>
                        <img src={Image2} alt="athletics" className='z-20 relative' />
                    </div>
                    <h2 className='mb-3 text-xl font-semibold'>Communicate Fast</h2>
                    <p className='text-base text-center text-gray4'>Stay on top of your task lists and stay in touch with what's happening</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='mb-7 relative'>
                        <p className='z-10 absolute -top-5 -left-8 p-8 bg-[#A9D2FF] border-0 rounded-full'></p>
                        <img src={Image3} alt="athletics" className='z-20 relative' />
                    </div>
                    <h2 className='mb-3 text-xl font-semibold'>Influence Easily</h2>
                    <p className='text-base text-center text-gray4'>Stay on top of your task lists and stay in touch with what's happening</p>
                </div>

            </div>
        </>
    )
}

export default ServicePoints;