import React from 'react';
// components --
import HeroSection from './hero-section/HeroSection';
import Banner from './banner/Banner';
import ServicePage from './service-page/ServicePage';
import FeaturePage from './feature-area/FeaturePage';
import Content1 from './content-1/Content1';
import Content2 from './content-2/Content2';
import Testimonial from './testimonial/Testimonial';
import Counter from './counter/Counter';

 
function index() {
    return (
        <>
            <div className='w-full'>

                <div className='w-full my-20'>
                    <HeroSection />
                </div>

                <div>
                    <ServicePage />
                </div>

                <div>
                    <FeaturePage />
                </div>

                <div>
                    <Content1 />
                </div>
                <div>
                    <Banner />
                </div>
                <div>
                    <Content2 />
                </div>


                <div>
                    <Testimonial />
                </div>

                <div>
                    <Counter />
                </div>
                
            </div>
        </>
    )
}

export default index;