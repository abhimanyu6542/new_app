import React from 'react';
// shapes --
import yellowShape from '../../../../assets/l1-contentTwo-shape-1.png';
import grayDots from '../../../../assets/gray-dots.png';


function ImageSection() {
    return (
        <>
            <div>

                <div className='w-full relative'>
                    {/* -- data section -- */}
                    <div className='z-20 relative w-full md:w-80 p-5 bg-white border-0 rounded-lg shadow-2xl shadow-gray-400'>
                        <div className='p-5'>
                            <div className='mb-5 border-b-4 border-dotted border-gray1'>
                                <h1 className='mb-5 text-4xl font-bold'>$271,824</h1>
                                <p className='mb-5 text-md text-gray2 font-semibold'>Annual revenue</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='mb-5 text-4xl font-bold'>$4,249</h1>
                                <p className='mb-5 text-md text-gray2 font-semibold'>Savings using other services</p>
                            </div>
                        </div>
                        <div className='p-5 text-white bg-[#22cc74] border-0 rounded-lg '>
                            <h1 className='mb-5 text-4xl font-bold'>$21,947</h1>
                            <p className='mb-5 text-md font-semibold'>Savings using SnagCart</p>
                        </div>
                    </div>

                    {/* -- fancy shapes -- */}
                    <img src={grayDots} alt="gray-dots" className='z-10 w-[20vh] h-[20vh] absolute -top-4 -right-4 md:-top-8 md:-right-8' />
                    <img src={yellowShape} alt="yellow shape" className='z-10 hidden md:block  w-[25vh] h-[25vh] absolute top-40 -left-16' />

                </div>

            </div>
        </>
    )
}

export default ImageSection;