/* eslint-disable react/prop-types */
import React from 'react';
// components --
import Layout from './components/Layout';

function AnnualPlans({ data, currency }) {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((data, id) => (
          <div key={id}>
            <Layout
              name={data.name}
              price={data.price}
              para={data.para}
              points={data.points}
              button={data.button}
              currency={currency}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default AnnualPlans;
