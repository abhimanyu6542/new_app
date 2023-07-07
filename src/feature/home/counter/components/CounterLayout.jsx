import React from 'react';
import CountUp from 'react-countup';


function CounterLayout() {
    return (
        <>
            <div className='w-full'>

                <div className='flex flex-wrap items-center justify-around md:justify-between'>

                    <div className='mb-10 lg:mb-0'>
                        <div className='mb-4 text-3xl md:text-5xl text-[#2B59FF] font-semibold text-dodger-blue flex items-center'>
                            <CountUp start={0} end={15} duration={3} />
                            M
                        </div>
                        <p className='w-32 md:w-40 text-md md:text-xl text-gray-400 font-semibold'>New visitors every month.</p>
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <div className='mb-4 text-3xl md:text-5xl text-[#FF5722] font-semibold text-dodger-blue flex items-center'>
                            <CountUp start={0} end={49} duration={3} />
                            %
                        </div>
                        <p className='w-32 md:w-40 text-md md:text-xl text-gray-400 font-semibold'>Extra conversion on any niche.</p>
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <div className='mb-4 text-3xl md:text-5xl text-[#22CC74] font-semibold text-dodger-blue flex items-center'>
                            $<CountUp start={0} end={2} duration={3} />
                            M
                        </div>
                        <p className='w-32 md:w-40 text-md md:text-xl text-gray-400 font-semibold'>Extra saved by customers.</p>
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <div className='mb-4 text-3xl md:text-5xl text-[#FF971D] font-semibold text-dodger-blue flex items-center'>
                            <CountUp start={0} end={93} duration={3} />
                            %
                        </div>
                        <p className='w-32 md:w-40 text-md md:text-xl text-gray-400 font-semibold'>Success rate on last 05 years.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CounterLayout;