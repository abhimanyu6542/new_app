/* eslint-disable react/prop-types */
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Image from '/assets/building.png';

function Layout({ name, price, para, points, button, currency }) {
  let selectedCurrency = (currency === "Euro") ? price.euro : (currency === "US dollar") ? price.usa : (currency === "Indian rupee") ? price.indian : (currency === "Canadian dollar") ? price.canadian : price.usa;

  return (
    <>
      <div className="bottom-0 flex flex-col justify-between w-full h-full p-5 bg-white md:w-72 lg:w-60 rounded-xl group hover:shadow-2xl ">
        <div>
          <div className="pb-5 my-5 border-b-2 border-slate-300">
            <img src={Image} alt="building" className="w-20 h-20" />
            <h1 className="mb-3 text-2xl font-bold text-black">{name} </h1>
            {price !== '' ? (
              <h3 className="mb-2 text-4xl font-bold text-black">
                {selectedCurrency} /<span className="text-sm font-normal">mo</span>
              </h3>
            ) : null}
            <p className="text-sm text-gray">{para} </p>
          </div>

          {/* -- points -- */}
          <div>
            {points.map((data, id) => (
              <div key={id}>
                <p className="flex items-start mb-3 text-sm font-medium text-gray">
                  <BsFillCheckCircleFill className="mt-1 mr-2 border-0 rounded-full text-blue1 bg-blue2" />
                  {data}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <button className="w-full py-2 mt-5 font-medium border-0 rounded-lg text-md text-blue2 bg-blue1 group-hover:text-white group-hover:bg-blue2">
            {button}{' '}
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
