import React from 'react';
// components --
import Heading from './components/Heading';
import FeatureTabs from './components/feature-tabs/FeatureTabs';


function FeaturePage() {
    return (
        <>
            <div className='w-full p-5 md:p-10 lg:p-20 relative overflow-hidden bg-blue7 '>

                <div>
                    <Heading />
                </div>

                <div>
                    <FeatureTabs />
                </div>

            </div>
        </>
    )
}

export default FeaturePage;