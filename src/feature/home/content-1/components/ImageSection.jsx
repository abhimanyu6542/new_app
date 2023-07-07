import React from 'react';
import { BiSolidUpArrowCircle } from 'react-icons/bi';
import womenImg from '../../../../assets/women2.png';
// shapes images --
import purpleDots from '../../../../assets/purple-dots.png';
import greenShape from '../../../../assets/l1-contentOne-shape-1.png';
import purpleShape from '../../../../assets/l1-contentOne-shape-2.png';


function ImageSection() {
    return (
        <>
            <div>

                <div className='relative'>
                    <img src={womenImg} alt="image section" className='z-20 relative w-[75vw] h-[55vh] md:w-[50vw] md:h-[75vh] lg:w-[28vw] lg:h-[75vh] bg-slate-300 border-0 rounded-md' />

                    {/* -- fancy shapes -- */}
                    <img src={purpleDots} alt="purple dots" className='z-10 w-[20vh] h-[20vh] absolute -top-8 -left-3 md:-top-8 md:-left-8 ' />
                    <img src={greenShape} alt="greenShape" className='z-10 w-[20vh] h-[20vh] absolute -top-10 right-0 md:-top-14 md:right-9 ' />
                    <img src={purpleShape} alt="purpleShape" className='z-10 w-[20vh] h-[20vh] absolute bottom-10 -left-3 md:bottom-10 md:-left-10 ' />

                    {/* -- orange box -- */}
                    <div className='z-30 p-3 md:p-5 lg:p-10 bg-orange6 border-0 rounded-md absolute -bottom-16 -right-4 md:-bottom-16 md:-right-16 shadow-2xl shadow-orange6'>
                        <div className='w-full h-full text-white flex flex-col items-center justify-center'>
                            <div className='mb-3 flex items-center'>
                                <h1 className='mr-4 text-4xl md:text-6xl font-bold'>68%</h1>
                                <BiSolidUpArrowCircle className='text-2xl md:text-4xl text-slate-700 bg-white border-0 rounded-full' />
                            </div>
                            <p className='w-40 text-xs md:text-xl font-medium'>Extra growth for your company.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageSection;