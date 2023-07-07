import React from 'react';
// images --
import sponser1 from '/assets/sponser-1.png';
import sponser2 from '/assets/sponser-2.png';
import sponser3 from '/assets/sponser-3.png';
import sponser4 from '/assets/sponser-4.png';


function InfoSection() {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-full text-white bg-transparent border-0 rounded-l-lg'>

                <div className='pb-10 mb-10 border-b-2 border-white'>
                    <h1 className='mb-5 text-3xl font-bold'>Explore our platform and launch your business with Yelo</h1>
                    <p className='text-sm font-semibold '>Take a comprehensive walkthrough of the features and functionalities that Yelo provides, and learn how you can launch and grow your hyperlocal business.</p>
                </div>

                <div className='w-full'>
                    <p className='mb-2 text-sm font-semibold'>We are trusted by the best in the world</p>
                    <div className='flex items-center justify-between w-full'>
                        <img src={sponser1} alt="sponsers" className='w-20' />
                        <img src={sponser2} alt="sponsers" className='w-20' />
                        <img src={sponser3} alt="sponsers" className='w-20' />
                        <img src={sponser4} alt="sponsers" className='w-20' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default InfoSection;