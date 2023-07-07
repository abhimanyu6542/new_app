import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '/assets/errorPage-1.png';


function NotFoundPage() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-screen'>
                <img src={Img} alt="erroropage" className='w-[90vw] lg:w-[50vw] ' />

                <h1 className='my-2 text-2xl font-bold text-rose-500'>You are lost!</h1>
                <p className='text-sm font-semibold text-slate-500'>Take me to <span onClick={handleNavigate} className='text-blue-500 cursor-pointer hover:text-blue-600'>Home</span></p>
            </div>
        </>
    )
}

export default NotFoundPage;