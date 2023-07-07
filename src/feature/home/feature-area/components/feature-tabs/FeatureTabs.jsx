import React, { useState } from 'react';
import clsx from 'clsx';
// icons --
import { PiChartDonutFill } from 'react-icons/pi';
import { BsFillFlagFill } from 'react-icons/bs'
import { PiChartLineUpBold } from 'react-icons/pi';
// components --
import Analytics from './Analytics';
import Advertisement from './Advertisement';
import SalesReport from './SalesReport';


function FeatureTabs() {
    const [currentTabNumber, setCurrentTabNumber] = useState(1);
    const displayTabs = (num) => {
        switch (num) {
            case 1:
                return <Analytics />
            case 2:
                return <Advertisement />
            case 3:
                return <SalesReport />
            default:
                return <Analytics />
        }
    }

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row items-center'>

                {/* -- All tabs buttons -- */}
                <div className='w-52 md:w-full lg:w-52 mb-10 lg:mb-0 flex flex-col md:flex-row lg:flex-col justify-between'>
                    <button onClick={() => setCurrentTabNumber(1)} className={clsx('group w-full md:w-fit lg:w-full mb-5 md:mb-0 lg:mb-10 px-8 py-3 text-white text-lg font-medium flex items-center justify-center border-0 rounded-lg hover:bg-white', (currentTabNumber === 1) && "bg-white")}>
                        <PiChartDonutFill className={clsx('mr-2 group-hover:text-orange6', (currentTabNumber === 1) && "text-orange6")} />
                        <p className={clsx('group-hover:text-blue7', (currentTabNumber === 1) && "text-blue7")}> Analytics </p>
                    </button>

                    <button onClick={() => setCurrentTabNumber(3)} className={clsx('group w-full md:w-fit lg:w-full mb-5 md:mb-0 lg:mb-10 px-8 py-3 text-white text-lg font-medium flex items-center justify-center border-0 rounded-lg hover:bg-white', (currentTabNumber === 3) && "bg-white")}>
                        <PiChartLineUpBold className={clsx('mr-2 group-hover:text-orange6', (currentTabNumber === 3) && "text-orange6")} />
                        <p className={clsx('group-hover:text-blue7', (currentTabNumber === 3) && "text-blue7")}> Sales Report </p>
                    </button>

                    <button onClick={() => setCurrentTabNumber(2)} className={clsx('group w-full md:w-fit lg:w-full mb-5 md:mb-0 px-8 py-3 text-white text-lg font-medium flex items-center justify-center border-0 rounded-lg hover:bg-white', (currentTabNumber === 2) && "bg-white")}>
                        <BsFillFlagFill className={clsx('mr-2 group-hover:text-orange6', (currentTabNumber === 2) && "text-orange6")} />
                        <p className={clsx('group-hover:text-blue7', (currentTabNumber === 2) && "text-blue7")}> Advertisement </p>
                    </button>
                </div>

                {/* -- Displaying tab-content -- */}
                <div className='w-full'>
                    {
                        displayTabs(currentTabNumber)
                    }
                </div>

            </div>
        </>
    )
}

export default FeatureTabs;