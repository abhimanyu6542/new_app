import React from 'react';
// components --
import ImageSection from './components/ImageSection';
import InfoSection from './components/InfoSection';


function Content1() {
    return (
        <>
            <div className='w-full px-5 md:px-10 lg:px-20 py-20 md:py-40 flex flex-col lg:flex-row items-center justify-around'>

                <div>
                    <ImageSection />
                </div>

                <div>
                    <InfoSection />
                </div>

            </div>
        </>
    )
}

export default Content1;