import React from 'react';
import BannerModal from './BannerModal';
import { useState } from 'react';


function Banner() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className='flex items-center justify-center p-5 bg-white md:p-10 lg:p-20'>

                <div className='relative'>
                    <img
                        src="https://jungleworks.com/wp-content/uploads/2021/04/bg-banner.png"
                        alt="background"
                        className='border-0 rounded-lg h-52 lg:h-40'
                    />

                    <div className='w-[90%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-between'>
                        <h1 className='w-[85vw] lg:w-[40vw] mb-5 lg:mb-0 text-xl md:text-2xl text-white text-center lg:text-start font-bold '>Start your entrepreneurial journey with SnagCart today!</h1>
                        <button onClick={() => setShowModal(true)} className='px-10 py-2 text-sm font-bold text-white border-0 rounded-lg md:py-3 mg::text-lg bg-blue2'>Get in Touch</button>
                    </div>
                </div>


                {/* -- Banner modal -- */}
                {
                    showModal ? <BannerModal setShowModal={setShowModal} /> : null
                }

            </div>
        </>
    )
}

export default Banner;