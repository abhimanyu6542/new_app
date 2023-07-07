import React from 'react';
import Image from '../../../assets/services-shape-l1.png';
// components --
import Heading from './components/Heading';
import ServicePoints from './components/ServicePoints';


function ServicePage() {
    return (
        <>
            <div className='p-5 md:p-10 lg:p-20 relative'>

                <div className='absolute top-[30%] -left-[6%] '>
                    <img src={Image} alt="fancy stripe" className='w-[10vw] h-[20vh] ' />
                </div>

                <div className='mb-20 lg:mb-32'>
                    <Heading />
                </div>

                <div>
                    <ServicePoints />
                </div>

            </div>
        </>
    )
}

export default ServicePage;