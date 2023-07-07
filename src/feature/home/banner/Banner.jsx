/* eslint-disable react/jsx-no-target-blank */
import React from 'react';


function Banner() {

    return (
        <>
            <div className='bg-[#F8F9FC] p-5 md:p-10 lg:p-20 flex items-center justify-center'>

                <div className='relative'>
                    <img
                        src="https://jungleworks.com/wp-content/uploads/2021/04/bg-banner.png"
                        alt="background"
                        className='border-0 rounded-lg h-52 lg:h-40'
                    />

                    <div className='w-[90%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-between'>
                        <h1 className='w-[85vw] lg:w-[40vw] mb-5 lg:mb-0 text-xl md:text-2xl text-white text-center lg:text-start font-bold '>Start your entrepreneurial journey with SnagCart today!</h1>
                        <a href='https://youtu.be/9y927xiDtJo' target="_blank" rel='youtube link' className='px-10 py-2 text-sm font-bold text-white border-0 rounded-lg md:py-3 mg::text-lg bg-blue2'>Watch Now</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner;