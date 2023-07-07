/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import OrderingPlatForm from './OrderingPlatForm';
import BrowsingListings from './BrowsingListings';
import OrderingFeatures from './OrderingFeatures';
import StoreManagement from './StoreManagement';
import FulfilmentAndDelivery from './FulfilmentAndDelivery';
import Payments from './Payments';
import Checkout from './Checkout';
import ChatNotifications from './ChatNotifications';
import Analytics from './Analytics';
import MarketingAndSEO from './MarketingAndSEO';
import ServiceAndSupport from './ServiceAndSupport';
import Hosting from './Hosting';
import DemandCard from './DemandCard';
// import FeatureHero from '../../../assets/feature-hero.png'
import Academy from '/public/assets/academy.png';
import Helpdesk from '/public/assets/helpdesk.png';
import Blogs from '/public/assets/blogs.png';
import Business from '/public/assets/business.png';
import '../../../../../style/featureStyle.css';

const FeatureHeroSection = ({ data }) => {
  const { div, headings, paras } = data.featureHeroSection;
  const [currentTabNumber, setCurrentTabNumber] = useState(1);
  const orderingPlatform = useRef();
  const browsingListings = useRef();
  const orderingFeatures = useRef();
  const storeManagement = useRef();
  const fulfilmentAndDelivery = useRef();
  const payments = useRef();
  const checkout = useRef();
  const chatNotifications = useRef();
  const analytics = useRef();
  const marketingAndSEO = useRef();
  const serviceAndSupport = useRef();
  const hosting = useRef();

  const scrollHandler = (elemRef, num) => {
    console.log(num);
    setCurrentTabNumber(num);
    window.scrollTo({ top: elemRef.current.scrollIntoView(), behavior: 'smooth' });
  };
  return (
    <>
      <div className="bg-[url('https://jungleworks.com/wp-content/uploads/2021/05/1-st-fold-img-1.png')] h-[450px]">
        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2">
          <div className="mx-16 mt-20 sm:mt-36 sm:mx-16 md:mx-12 lg:mx-auto sm:w-96 ">
            <h1 className="text-4xl font-bold text-white">{headings[0]}</h1>
            <p className="mt-5 text-lg font-medium text-white">{paras[0]}</p>
          </div>
          <div></div>
        </div>
      </div>

      {/* New Section  */}
      <div className="flex items-start justify-start w-full mt-16 mb-5">
        <div className="relative items-start justify-center block w-full mx-auto lg:flex sm:justify-start sm:mx-28">
          <div className="shadow-xl bg-[#ffffff] rounded-xl p-2 h-full w-96 hidden lg:block sticky top-28 left-0">
            <h1
              onClick={() => scrollHandler(orderingPlatform, 1)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 1 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[1]}
            </h1>
            <h1
              onClick={() => scrollHandler(browsingListings, 2)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 2 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[2]}
            </h1>
            <h1
              onClick={() => scrollHandler(orderingFeatures, 3)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 3 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[3]}
            </h1>
            <h1
              onClick={() => scrollHandler(storeManagement, 4)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 4 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[4]}
            </h1>
            <h1
              onClick={() => scrollHandler(fulfilmentAndDelivery, 5)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 5 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[5]}
            </h1>
            <h1
              onClick={() => scrollHandler(payments, 6)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 6 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[6]}
            </h1>
            <h1
              onClick={() => scrollHandler(checkout, 7)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 7 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[7]}
            </h1>
            <h1
              onClick={() => scrollHandler(chatNotifications, 8)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 8 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[8]}
            </h1>
            <h1
              onClick={() => scrollHandler(analytics, 9)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 9 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[9]}
            </h1>
            <h1
              onClick={() => scrollHandler(marketingAndSEO, 10)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 10 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[10]}
            </h1>
            <h1
              onClick={() => scrollHandler(serviceAndSupport, 11)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 11 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[11]}
            </h1>
            <h1
              onClick={() => scrollHandler(hosting, 12)}
              className={clsx(
                'mx-3 px-3 py-2 text-lg font-semibold my-2 cursor-pointer rounded-xl',
                currentTabNumber === 12 && 'bg-[#e5f1ff] text-[#377dff]'
              )}
            >
              {headings[12]}
            </h1>
          </div>

          <div className="w-full mx-2 md:ml-20">
            <div className="mt-10" ref={orderingPlatform}>
              <OrderingPlatForm data={data.orderingPlatforms} />
            </div>
            <div className="mt-10" ref={browsingListings}>
              <BrowsingListings data={data.browsingListings} />
            </div>
            <div className="mt-10" ref={orderingFeatures}>
              <OrderingFeatures data={data.orderingFeatures} />
            </div>
            <div className="mt-10" ref={storeManagement}>
              <StoreManagement data={data.storeManagement} />
            </div>
            <div className="mt-10" ref={fulfilmentAndDelivery}>
              <FulfilmentAndDelivery data={data.fulfillmentAndDelivery} />
            </div>
            <div className="mt-10" ref={payments}>
              <Payments data={data.payments} />
            </div>
            <div className="mt-10" ref={checkout}>
              <Checkout data={data.checkout} />
            </div>
            <div className="mt-10" ref={chatNotifications}>
              <ChatNotifications data={data.chatNotifications} />
            </div>
            <div className="mt-10" ref={analytics}>
              <Analytics data={data.analytics} />
            </div>
            <div className="mt-10" ref={marketingAndSEO}>
              <MarketingAndSEO data={data.marketingAndSeo} />
            </div>
            <div className="mt-10" ref={serviceAndSupport}>
              <ServiceAndSupport data={data.serviceAndSupport} />
            </div>
            <div className="mt-10" ref={hosting}>
              <Hosting data={data.hosting} />
            </div>
          </div>
        </div>
      </div>

      {/* Demand Section  */}

      <div className="bg-[#fafbfc] lg:h-[500px]">
        <div className="flex">
          <div className="mx-auto my-12 text-[#474747] font-black text-4xl leading-5">{div[0]}</div>
        </div>
        <div className="flex">
          <div className="grid items-center justify-center grid-cols-1 gap-8 mx-5 lg:grid-cols-4 sm:grid-cols-2 sm:mx-auto">
            <div className="">
              <DemandCard
                heading={headings[13]}
                description={paras[1]}
                icon={Academy}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={headings[14]}
                description={paras[2]}
                icon={Helpdesk}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={headings[15]}
                description={paras[3]}
                icon={Blogs}
                link={'https://www.google.com'}
              />
            </div>
            <div className="">
              <DemandCard
                heading={headings[16]}
                description={paras[4]}
                icon={Business}
                link={'https://www.google.com'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Section  */}

      {/* New Section  */}

      <div className="flex items-center justify-center mb-6">
        <div className="w-full px-2 bg-no-repeat feature mx-28 rounded-xl">
          <div className="flex-row items-center justify-between my-16 md:flex">
            <div className="mx-16 ">
              <h1 className="text-xl font-bold text-white sm:text-4xl">{headings[17]}</h1>
              <p className="mt-5 text-lg font-medium text-white">{paras[5]}</p>
            </div>
            <button className="bg-[#1366ff] hover:bg-[#2d6cca] text-white mr-16 px-8 rounded-xl transition-all duration-150 md:mx-auto mx-16 md:mt-0 mt-4 self-center leading-5 font-semibold text-lg py-5">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureHeroSection;
