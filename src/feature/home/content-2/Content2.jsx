import React from 'react';
// components --
import ImageSection from './component/ImageSection';
import InfoSection from './component/InfoSection';


function Content2() {
    return (
        <>
            <div className='w-full px-5 md:px-10 lg:px-20 py-20 md:py-40 bg-[#f8f9fc] flex flex-col-reverse lg:flex-row items-center justify-around'>

                <div>
                    <InfoSection />
                </div>

                <div>
                    <ImageSection />
                </div>

            </div>
        </>
    )
}

export default Content2;