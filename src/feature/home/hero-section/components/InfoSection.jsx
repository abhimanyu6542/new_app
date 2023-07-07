import React from 'react';
import Typewriter from "typewriter-effect";


function InfoSection() {
    return (
        <>
            <div className='px-5 md:px-0 flex flex-col justify-center'>

                <div className='mb-5 md:mb-10'>
                    <div className='w-[50vw]  lg:w-[40vw] mb-5 md:mb-10 text-black text-3xl md:text-5xl lg:text-7xl font-bold'>
                        <h1 > Stop waiting. Grow your</h1>
                        <div className='mt-2 text-orange6'>
                            <Typewriter
                                options={{
                                    strings: ['business.', 'agency.', 'growth.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <p className='w-full md:w-[50vw] lg:w-[40vw] md:text-lg lg:text-xl text-gray4'>
                        Create custom landing pages with SnagCart that converts more visitors than any website.
                    </p>
                </div>

                <div className='w-full mb-5 flex flex-col md:flex-row justify-start items-center'>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='w-full md:w-80 p-2 md:p-5 md:mr-3 mb-3 md:mb-0 text-slate-400 border-2 border-gray-400 rounded-lg outline-none'
                    />
                    <button className='w-full md:w-auto p-2 md:p-5 text-white bg-violet7 border-0 rounded-lg hover:bg-violet-500'>Start For Free</button>
                </div>

                <div className='text-sm md:text-md '>
                    <p className='text-gray2'>By clicking the button, you are agreeing with our <span className="ml-2 text-orange6">Terms & Condition.</span> </p>
                </div>
            </div>
        </>
    )
}

export default InfoSection;