import React, { useState } from 'react';
// components --
import { productData } from './productData';
import ProductLayout from './ProductLayout';
import GetStartedModal from '../../../shared/components/Modal/GetStartedModal';


function Products() {
    const [showModal, setShowModal] = useState(false);

    return ( 
        <>
            <div className='flex items-center justify-center w-full py-16'>

                <div className='grid grid-cols-2 gap-10'>
                    {
                        productData.map((data, id) => (
                            <div key={id}>
                                <ProductLayout img={data.img} name={data.name} description={data.description} points={data.points} setShowModal={setShowModal} />
                            </div>
                        ))
                    }
                </div>

                {/* -- modal -- */}
                <div>
                    {
                        showModal ? <GetStartedModal setShowModal={setShowModal} /> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Products;