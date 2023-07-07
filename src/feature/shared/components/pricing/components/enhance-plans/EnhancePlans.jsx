/* eslint-disable react/prop-types */
import React from 'react';
// components --
import MobileApp from './components/MobileApp';
import DeliveryManageMent from './components/DeliveryManageMent';
import Marketing from './components/Marketing';
import PlateFormSetup from './components/plateform-setup/PlateFormSetup';

function EnhancePlans({ data }) {
  const {
    enhancePlans,
    marketPlaceTab,
    marketing,
    mobileApp,
    deliveryManagement,
    plateFormSetup,
    storeTab,
  } = data;

  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-0 py-10 md:py-14 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-2xl lg:text-4xl text-black font-bold">
          {enhancePlans.headings[0]}
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-start justify-center">
          <div className="w-full lg:w-[30vw] mr-7">
            <MobileApp data={mobileApp} />
            <DeliveryManageMent data={deliveryManagement} />
            <Marketing data={marketing} />
          </div>

          <div className="w-full lg:w-[50vw] ">
            <PlateFormSetup
              marketPlaceTab={marketPlaceTab}
              plateFormSetup={plateFormSetup}
              storeTab={storeTab}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnhancePlans;
