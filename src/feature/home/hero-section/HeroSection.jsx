import React from 'react';
// components --
import InfoSection from './components/InfoSection';
import ImageSection from './components/ImageSection';

function HeroSection() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly relative">
        <div className="">
          <InfoSection />
        </div>

        <div className="my-16 md:my-32 lg:my-0">
          <ImageSection />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
