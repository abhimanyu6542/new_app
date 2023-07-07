/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// tabs component --
import MarketPlaceTab from './MarketPlaceTab';
import StoreTab from './StoreTab';
import clsx from 'clsx';

function PlateFormSetup({ marketPlaceTab, plateFormSetup, storeTab }) {
  const { headings, paras } = plateFormSetup;
  const [currentTabNumber, setCurrentTabNumber] = useState(1);
  const displayTabs = (num) => {
    switch (num) {
      case 1:
        return <MarketPlaceTab data={marketPlaceTab} />;
      case 2:
        return <StoreTab data={storeTab} />;
      default:
        return <MarketPlaceTab data={marketPlaceTab} />;
    }
  };

  return (
    <>
      <div className="p-5 mb-7 bg-white border-0 rounded-xl shadow-2xl">
        <div className="w-full mb-4 flex flex-col items-center">
          <p className="w-fit mb-2 px-4 py-1 text-xs bg-blue1 border-0 rounded-full">{paras[0]}</p>
          <h1 className="mb-2 text-xl text-black font-bold">{headings[0]}</h1>
          <p className="text-sm text-gray font-medium">{paras[1]}</p>
        </div>

        {/* -- Tab section -- */}
        <div className="w-fit mb-5 mx-auto bg-blue1 border-0 rounded-full">
          <button
            onClick={() => setCurrentTabNumber(1)}
            className={clsx(
              'px-4 md:px-8 py-1 md:py-1.5 text-black text-sm md:text-md font-semibold bg-blue1 border-0 rounded-full',
              currentTabNumber === 1 && 'bg-blue2 text-white'
            )}
          >
            Marketplace
          </button>
          <button
            onClick={() => setCurrentTabNumber(2)}
            className={clsx(
              'px-4 md:px-8 py-1 md:py-1.5 text-black text-sm md:text-md font-semibold bg-blue1 border-0 rounded-full',
              currentTabNumber === 2 && 'bg-blue2 text-white'
            )}
          >
            Store
          </button>
        </div>

        <div>{displayTabs(currentTabNumber)}</div>
      </div>
    </>
  );
}

export default PlateFormSetup;
