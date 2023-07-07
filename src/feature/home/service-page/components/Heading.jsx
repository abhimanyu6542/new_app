import React from 'react';


function Heading() {
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-evenly'>
                <h1 className='w-full md:w-[80vw] lg:w-[50vw] mb-5 lg:mb-0 text-center md:text-start text-3xl md:text-5xl font-semibold'>
                    Your business needs a better shape today.
                </h1>

                <p className='w-full md:w-[70vw] lg:w-[30vw] text-center md:text-start text-xl text-gray4'>
                    Create custom landing pages with SnagCart that converts more visitors than any website. Easy & Fast.
                </p>
            </div>
        </>
    )
}

export default Heading;