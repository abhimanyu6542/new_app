/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import clsx from 'clsx';
// components --
import AnnualPlans from './components/annually/AnnualPlans';
import SemiAnnualPlans from './components/semi-annually/SemiAnnualPlans';

function PurchasePlans({ anualData, semiAnualData }) {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currentTabNumber, setCurrentTabNumber] = useState(1);

  const displayTabData = (num) => {
    switch (num) {
      case 1:
        return <SemiAnnualPlans data={semiAnualData} currency={selectedCurrency} />;
      case 2:
        return <AnnualPlans data={anualData} currency={selectedCurrency} />;
      default:
        return <SemiAnnualPlans data={semiAnualData} currency={selectedCurrency} />;
    }
  };

  const handleSelectedCurrency = (e) => {
    setSelectedCurrency(e.target.value);
  }

  console.log("selectedCurrency -> ", selectedCurrency);

  return (
    <>
      <div className="w-full px-5 lg:px-0 py-7 lg:py-16 flex flex-col items-center">
        <div className=" bg-blue1 border-0 rounded-md">
          <button
            onClick={() => setCurrentTabNumber(1)}
            className={clsx(
              'px-5 md:px-14 py-1 md:py-4 text-md md:text-lg text-blue2 font-semibold bg-blue1 border-0 rounded-md md:rounded-lg',
              currentTabNumber === 1 && 'text-white bg-blue2'
            )}
          >
            Semi Annually
          </button>
          <button
            onClick={() => setCurrentTabNumber(2)}
            className={clsx(
              'px-5 md:px-14 py-1 md:py-4 text-md md:text-lg text-blue2 font-semibold bg-blue1 border-0 rounded-md md:rounded-lg',
              currentTabNumber === 2 && 'text-white bg-blue2'
            )}
          >
            Annually
          </button>
        </div>

        {/* -- dropdown for currency -- */}
        <div className='my-7 flex gap-1 items-center text-md'>
          <h1 className=''>All price are shown in </h1>
          <select value={selectedCurrency} name="currency" onChange={handleSelectedCurrency} className='p-1 border-2 border-violet7 rounded-md outline-none cursor-pointer' >
            <option value="Euro">EUR</option>
            <option value="US dollar">USD</option>
            <option value="Indian rupee">INR</option>
            <option value="Canadian dollar">CAD</option>
          </select>
        </div>

        {/* -- Displaying data -- */}
        <div>{displayTabData(currentTabNumber)}</div>
      </div>
    </>
  );
}

export default PurchasePlans;
