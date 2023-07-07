/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeatureCard from './FeatureCard';
import Platform from '/public/assets/platform.png';
import Private from '/public/assets/private.png';
import Web from '/public/assets/web.png';
import Access from '/public/assets/access.png';
import Merchant from '/public/assets/merchant.png';

const MarketingAndSEO = ({ data }) => {
  const { headings, paras } = data;
  return (
    <>
      <div className="mt-3">
        <h1 className="pr-16 text-[#323b4b] font-bold text-4xl pl-2.5">{headings[0]}</h1>
        <div className="bg-[#fafbfc]">
          <div className="mt-10 sm:pl-2.5 px-3 grid lg:grid-cols-2 grid-cols-1 w-full ">
            <FeatureCard heading={headings[1]} description={paras[0]} icon={Platform} />
            <FeatureCard heading={headings[2]} description={paras[1]} icon={Private} />
            <FeatureCard heading={headings[3]} description={paras[2]} icon={Web} />
            <FeatureCard heading={headings[4]} description={paras[3]} icon={Access} />
            <FeatureCard heading={headings[5]} description={paras[4]} icon={Merchant} />
          </div>
          <div className="flex justify-start items-center ml-8 my-5">
            <Link className="text-[#5F6673] font-medium text-xl leading-7">Learn More</Link>
            <AiOutlineArrowRight className="ml-1 w-5 h-5 text-[#5F6673] font-medium text-xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingAndSEO;
