/* eslint-disable react/prop-types */
import React from 'react';
// components --
import Header from './components/Header';
import PurchasePlans from './components/purchase-plans-tab/PurchasePlans';
import IncludingPlans from './components/including-plans/IncludingPlans';
import EnhancePlans from './components/enhance-plans/EnhancePlans';
import Questions from './components/FAQ/Questions';

function Pricing({ priceData }) {
  return (
    <>
      <div className="w-full bg-background">
        <Header headerContent={priceData.header} />

        <PurchasePlans anualData={priceData.anualData} semiAnualData={priceData.semiAnualData} />

        <IncludingPlans priceData={priceData} />

        <EnhancePlans data={priceData} />

        <Questions data={priceData.faq} />
      </div>
    </>
  );
}

export default Pricing;
