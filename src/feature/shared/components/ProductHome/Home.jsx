/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import Carousal_one from './components/Carousal_one';
import Carousel_three from './components/Carousel_three';
import Carousel_two from './components/Carousel_two';
import Fifth from './components/Fifth';
import First from './components/First';
import Fourth from './components/Fourth';
import Second from './components/Second';
import Sixth from './components/Sixth';
import TabBar_middle from './components/TabBar_middle';
import Third from './components/Third';

const ProductHome = ({ data }) => {
  const { headings, paras } = data.home;

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="lg:px-48 bg-slate-50">
      <First data={data} />
      {/* <Carousal_one windowSize={screenSize.width} data={data} /> */}
      <div className="flex items-center justify-center w-full">
        <h1 className="py-5 lg:pt-8 lg:pb-5 lg:w-7/12 text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
          {headings[0]}
        </h1>
      </div>
      <Second data={data} />
      <div className="flex-col items-center justify-center w-full sm:flex sm:flex-row">
        <h1 className="py-10 pt-0 lg:w-7/12 text-3xl lg:text-[2.3rem] font-bold text-center sm:text-start font-rubik">
          {headings[1]}
        </h1>
        <div className="sm:w-2/3">
          <Carousel_two windowSize={screenSize.width} data={data} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-10">
        <h1 className="py-10 mt-10 pt-0 lg:w-7/12 text-3xl lg:text-[2.5rem] font-bold text-center font-rubik">
          {headings[2]}
        </h1>
      </div>

      <TabBar_middle data={data} />
      <Third data={data} />
      <Fourth data={data} />

      <div className="flex items-center justify-center w-full">
        <h1 className="pt-10 px-5 lg:w-10/12 text-3xl lg:text-[2.5rem] font-bold text-center font-rubik">
          {headings[3]}
        </h1>
      </div>
      <div className="pb-8 flex items-center justify-center">
        <p className="px-5 py-5 text-lg font-semibold text-center text-gray-500 lg:w-7/12 lg:xl font-rubik">
          {paras[0]}
        </p>
      </div>
      <Fifth data={data} />
      <div className="m-3 pt-10 flex items-center justify-center w-full">
        <h1 className="py-7 px-5 rounded-md bg-white lg:w-10/12 text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
          {headings[4]}
        </h1>
      </div>
      <Carousel_three data={data} />
      <Sixth data={data} />
    </div>
  );
};

export default ProductHome;
