import React from 'react';
// images --
import spiralShape from '../../../../assets/l1-half-circle-shape.png';
import yellowShape from '../../../../assets/l1-full-circle-shape.png';


function Heading() {
    return (
        <>
            <div className='mb-28 '>

                <div>
                    <h1 className='mb-5 md:mb-10 w-full md:w-[70vw] lg:w-[60vw] text-3xl md:text-5xl lg:text-6xl text-white font-semibold'>Best features available for your social marketing.</h1>
                    <p className='w-full md:w-[60vw] lg:w-[40vw] text-xl text-gray3 font-semibold '>Create custom landing pages with SnagCart that converts more visitors than any website. Easy & Fast.</p>
                </div>

                {/* -- shape section -- */}
                <div className=''>
                    <img src={yellowShape} alt="shape-1" className='h-20 w-20 md:h-40 md:w-40 lg:h-52 lg:w-52 absolute top-10 -right-10 md:top-20 md:-right-24 lg:top-20 lg:-right-32' />
                    <img src={spiralShape} alt="shape-2" className='h-[35vh] w-[35vh] md:h-[50vh] md:w-[50vh] lg:h-[70vh] lg:w-[70vh] absolute -top-20 -right-10' />
                </div>

            </div>
        </>
    )
}

export default Heading;