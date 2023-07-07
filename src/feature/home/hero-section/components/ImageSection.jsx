import React from 'react';
// images --
import menImg from '../../../../assets/men.png';
import men2Img from '../../../../assets/men1.png';
import womenImg from '../../../../assets/women.png';
import dashboardImg from '../../../../assets/dashboard.png';
// shapes --
import yellowShape from '../../../../assets/l1-hero-shape-1.png';
import blueShape from '../../../../assets/l1-hero-shape-2.png';
import triangleShape from '../../../../assets/l1-hero-shape-3.png';


function ImageSection() {
    return (
        <>
            <div>

                <div className='relative'>
                    {/* -- Images -- */}
                    <img src={dashboardImg} alt="image-1" className='z-[8] relative h-[40vh] w-[85vw] md:h-[55vh] md:w-[70vw] lg:h-[30vw] lg:w-[40vw]' />
                    <img src={womenImg} alt="image-3" className='z-[5] h-28 w-28 md:h-44 md:w-44 absolute -top-20 right-8 md:-top-32 md:right-20 border-0 rounded-md' />
                    <img src={menImg} alt="image-2" className='z-[9] h-20 w-20 md:h-32 md:w-32 bg-transparent absolute -top-5  -left-5 md:-top-5  md:-left-5 shadow-2xl shadow-slate-700 border-0 rounded-full' />
                    <img src={men2Img} alt="image-2" className='z-[5] h-20 w-20 md:h-28 md:w-28 bg-transparent absolute top-44 left-20  md:top-60 lg:top:72 md:left-52' />
                    <img src={men2Img} alt="image-2" className='z-[5] hidden md:block h-20 w-20 md:h-28 md:w-28 bg-transparent absolute -top-5 -left-5 md:top-32  md:-left-1' />

                    {/* -- fancy shapes -- */}
                    <img src={yellowShape} alt="shape-1" className='z-[5] w-[20vh]  hidden md:block absolute -top-52 left-20' />
                    <img src={blueShape} alt="shape-2" className='z-[5] hidden md:block absolute top-14 -right-10' />
                    <img src={triangleShape} alt="shape-3" className='z-[5] hidden md:block absolute -bottom-10 -right-5' />
                </div>

            </div>
        </>
    )
}

export default ImageSection;