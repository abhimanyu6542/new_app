import React from 'react';
// components --
import Banner from './components/banner/Banner';
import Products from './components/products/Products';


function TryNow() {

    return (
        <>
            <div className='w-full bg-background'>

                <Products />
                <Banner />

            </div>
        </>
    )
}

export default TryNow;