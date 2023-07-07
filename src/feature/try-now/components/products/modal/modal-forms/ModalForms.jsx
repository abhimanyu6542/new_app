import React, { useContext } from 'react';
import { TrynowContext } from '../../../../TryNow';
// components --
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';


function ModalForms() {
    // context-value --
    const { formNumber } = useContext(TrynowContext);

    const displayComponent = (num) => {
        switch (num) {
            case 1:
                return <Form1 />
            case 2:
                return <Form2 />
            case 3:
                return <Form3 />
            default:
                return <Form1 />
        }
    }

    return (
        <>
            <div className='relative w-full h-full p-10 text-white bg-white flex flex-col items-center border-0 rounded-r-lg'>

                {/* -- display data -- */}
                <div className='text-black'>
                    {displayComponent(formNumber)}
                </div>

            </div>
        </>
    )
}

export default ModalForms;