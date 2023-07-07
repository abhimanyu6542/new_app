/* eslint-disable react/prop-types */
import React from 'react';
import CardLayout from './CardLayout';
// icons --
import { FaClipboardList } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { AiFillCreditCard } from 'react-icons/ai';
import { TbSeo } from 'react-icons/tb';
import { HiDocument } from 'react-icons/hi';
import { GrCloudUpload } from 'react-icons/gr';
import { FaNetworkWired } from 'react-icons/fa';
import { BsGiftFill } from 'react-icons/bs';
import { MdOutlineMailLock } from 'react-icons/md';
import { LuLanguages } from 'react-icons/lu';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SiSpringsecurity } from 'react-icons/si';

function IncludingPlans({ priceData }) {
  const { headings } = priceData.includingPlans;

  const data = [
    {
      icon: <FaClipboardList />,
      heading: headings[0],
    },
    {
      icon: <BiSearch />,
      heading: headings[1],
    },
    {
      icon: <AiFillCreditCard />,
      heading: headings[2],
    },
    {
      icon: <TbSeo />,
      heading: headings[3],
    },
    {
      icon: <HiDocument />,
      heading: headings[4],
    },
    {
      icon: <GrCloudUpload />,
      heading: headings[5],
    },
    {
      icon: <FaNetworkWired />,
      heading: headings[6],
    },
    {
      icon: <BsGiftFill />,
      heading: headings[7],
    },
    {
      icon: <MdOutlineMailLock />,
      heading: headings[8],
    },
    {
      icon: <LuLanguages />,
      heading: headings[9],
    },
    {
      icon: <RiSecurePaymentLine />,
      heading: headings[10],
    },
    {
      icon: <SiSpringsecurity />,
      heading: headings[11],
    },
  ];

  return (
    <>
      <div className="py-14 w-full bg-white flex flex-col justify-center items-center">
        <h1 className="mb-10 md:mb-20 text-xl md:text-4xl text-black font-bold">
          All of our plans Include
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {data.map((data, id) => (
            <div key={id}>
              <CardLayout iconName={data.icon} heading={data.heading} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IncludingPlans;
