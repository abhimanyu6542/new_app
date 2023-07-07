/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Carousal_one_uc from './components/Carousel_one_uc';
import One from './components/One';
import Two from './components/Two';
import image_one from '../../../../assets/p2_c3.png';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Eight from './components/Eight';
import Faq from './components/Faq';
import Carousal_two_uc from './components/Carousel_two_uc';
import Seven_sub from './components/pages/Seven_sub';
import world_image from '/assets/world.jpg';

// eslint-disable-next-line react/prop-types
const Use_case = ({ content }) => {
  // console.log(content)
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
    <div>
      <div className="text-black bg-white border-b border-b-gray-300">
        <div className="lg:mx-48">
          <One data={content.One} />
          <Carousal_one_uc data={content.Carousal_one_uc} windowSize={screenSize.width} />
          <div className="flex items-center justify-center">
            <h1 className="pt-4 px-5 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading1}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="px-5 py-2 text-sm font-medium text-center text-gray-500 border-b-2 border-blue-600 sm:py-3 lg:w-7/12 lg:text-xl font-rubik">
              {content.body.paragraph1}
            </p>
          </div>
          <Two data={content.Two} />
        </div>
      </div>
      <div className="pt-10 pb-16 bg-slate-50">
        <div className="lg:mx-48">
          <div className="flex items-center justify-center">
            <h1 className="pt-4 px-5 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading2}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="px-5 py-2 text-sm font-medium text-center text-gray-500 sm:py-3 lg:w-7/12 lg:text-xl font-rubik">
              {content.body.paragraph2}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* <img className="p-2 pt-3" src={`${BASE_URL + content.imagename}`}/> */}
            <img className="p-2 pt-3" src={image_one} />
          </div>
          <Three data={content.Three} />
        </div>
      </div>
      <div className="bg-white">
        <div className="lg:mx-48">
          <div className="flex items-center justify-center">
            <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading3}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="px-5 py-2 text-sm font-medium text-center text-gray-500 sm:py-3 lg:w-7/12 lg:text-xl font-rubik">
              {content.body.paragraph3}
            </p>
          </div>
          <Four data={content.Four} />
          <div className="flex items-center justify-center">
            <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading4}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="px-5 py-2 text-sm font-medium text-center text-gray-500 sm:py-3 lg:w-7/12 lg:text-xl font-rubik">
              {content.body.paragraph4}
            </p>
          </div>
          <Five data={content.Five} />
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="lg:mx-48">
          <div className="flex items-center justify-center">
            <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading5}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="py-2 text-sm font-medium text-center text-gray-500 sm:py-3 lg:w-7/12 lg:text-base font-rubik">
              {content.body.paragraph5}
            </p>
          </div>
          <Six data={content.Six} />
        </div>
      </div>
      <div className="bg-white lg:pb-10">
        <div
          className="px-5 mt-5 bg-center bg-cover lg:mx-48 opacity-70"
          style={{ backgroundImage: `url(${world_image})` }}
        >
          <div className="flex items-center justify-center">
            <h1 className="pt-12 px-5 w-3/4 lg:w-11/12 text-xl sm:text-2xl lg:text-[2.5rem] font-bold text-center font-rubik">
              {content.body.heading6}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="py-2 text-sm font-medium text-center text-gray-700 sm:py-3 lg:w-7/12 lg:text-base font-rubik">
              {content.body.paragraph6}
            </p>
          </div>
          <Seven_sub data={content.Seven_sub} />
          <div className="h-14"></div>
          <Carousal_two_uc data={content.Carousal_two_uc} />
        </div>
      </div>
      <div className="bg-slate-50 mt-44">
        <div className="pt-10 lg:mx-48">
          <div className="flex items-center justify-center">
            <h1 className="pt-8 pb-12 px-5 w-full lg:w-11/12 text-xl sm:text-2xl lg:text-[2.1rem] font-bold text-center font-rubik">
              {content.body.heading7}
            </h1>
          </div>
          <Eight data={content.Eight} />
        </div>
      </div>
      <div className="bg-blue-200">
        <div className="lg:mx-48">
          <Faq faqdata={content.Faq} />
        </div>
      </div>
    </div>
  );
};

export default Use_case;
