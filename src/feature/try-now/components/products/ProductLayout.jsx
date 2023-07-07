/* eslint-disable react/prop-types */
import React from 'react';
import { BiCheck } from 'react-icons/bi';
import Img from '/assets/animal-1.svg';


// eslint-disable-next-line no-unused-vars
function ProductLayout({ img, name, description, points, setShowModal }) {

    return (
        <>
            <div className='w-full h-full md:w-[400px] p-5 bg-white flex flex-col justify-between border-0 rounded-xl group hover:drop-shadow-xl'>

                <div>
                    <div className='pb-4 mb-4 border-b-2 border-slate-300'>
                        <img src={Img} alt="pictures" className='h-12 mt-3' />

                        <h1 className='my-1 text-lg font-bold text-black'>{name} </h1>
                        <p className='text-sm font-semibold text-gray'>{description} </p>
                    </div>

                    <div>
                        {
                            points.map((data, id) => (
                                <div key={id} className='flex items-center mb-3'>
                                    <BiCheck className='mr-3 text-lg border-0 rounded-full text-blue2 bg-blue1 ' />
                                    <p className='text-sm font-semibold text-gray'>{data} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <button onClick={() => setShowModal(true)} className='w-full my-5 py-2.5 border-0 rounded-lg text-md text-blue2 font-semibold bg-blue1 group-hover:text-white group-hover:bg-blue2' >Get Started</button>

            </div>
        </>
    )
}

export default ProductLayout;