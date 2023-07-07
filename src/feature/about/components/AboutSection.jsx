import React from 'react';
import YellowCurve from '/public/assets/yellow-curve.png';
import ThreePerson from '/public/assets/about-us-3-person.png';
import PenPicture from '/public/assets/about-us-pen-pic.png';
import AboutSmile from '/public/assets/about-smile.png';
import CountUp from 'react-countup';
import TeamSilder from './TeamSilder';

const AboutSection = () => {
  return (
    <>
      <div className="w-full bg-graybg h-96">
        <div className="flex items-center justify-center">
          <h1 className="text-center mb-10 text-3xl mx-10 md:text-6xl font-semibold mt-24 text-[#25373F] font-rubik">
            About Us
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-center leading-8 text-[#25373FB3] mx-auto ml-10 mr-10 font-rubik text-xl md:ml-56 lg:ml-64 xl:ml-[400px] font-normal">
            Our focus is always on finding the best people to work with. Our <br />
            bar is high, but you look ready to take on the challenge.
          </p>
          <div className="hidden -mt-12  md:block">
            <img src={YellowCurve} alt="YellowCurve" className="" />
          </div>
        </div>
      </div>

      {/* Image section */}

      <div className="w-full bg-white mb-28">
        <div className="grid items-center justify-center grid-cols-1 gap-4 mx-20 mt-32 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="mx-auto"
          >
            <img src={ThreePerson} alt="ThreePerson" />
          </div>
          <div className="flex">
            <div className="lg:mx-28">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="flex-col items-center justify-start block"
              >
                <div className="flex items-center justify-start">
                  <div className=" lg:ml-7 lg:-mt-7 w-10 h-[1px] bg-navItemHover mt-5 ml-0 mr-3"></div>
                  <span className="mt-5 text-base font-medium leading-7 lg:ml-7 lg:-mt-7 text-navItemHover font-rubik">
                    Watch Video
                  </span>
                </div>
                <h1 className="lg:ml-7 mt-8 text-[#262729] text-3xl font-rubik font-medium">
                  Watch how we work
                </h1>
                <p className="mt-8 text-lg font-normal lg:ml-7 mr-7 font-rubik">
                  Scale up and down easily as your business demands. And make use of business-grade
                  consultation. Book flexibly by the day, week or longer and customise the layout to
                  reflect your brand.
                </p>
              </div>
              <div className="block w-full mt-8 sm:flex sm:justify-start lg:ml-5 sm:items-center ">
                <button className="px-12 py-3 text-white rounded-full  bg-navItemHover hover:bg-orange-500 lg:px-11 sm:px-14 sm:py-4">
                  Learn More
                </button>
                <button className="px-12 py-3 text-white rounded-full bg-violet8 hover:bg-violet7 mt-7 sm:mt-0 sm:ml-5 lg:px-11 lg:ml-10 sm:px-14 sm:py-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}

      <div className="w-full bg-graybg">
        <div className="mb-24">
          <div className="mx-20">
            <div className="flex flex-col items-start justify-start">
              <h1
                data-aos="slide-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="mt-24 text-base font-medium text-navItemHover font-rubik"
              >
                About Us
              </h1>
              <h1
                data-aos="slide-up"
                data-aos-offset="500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="mt-8 text-5xl font-medium text-black"
              >
                We will make your website <br /> look more elegant and stylish!
              </h1>
            </div>
            <div
              data-aos="slide-up"
              data-aos-offset="500"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className="grid items-center justify-start grid-cols-1 mt-9 lg:grid-cols-2"
            >
              <div className="font-normal text-base text-[#262729B3] font-rubik">
                Business advisory service advises current and future businesses prospects of a
                client, with the aim of advancing their business or company. This service is used by
                all types of businesses and would involve examining the legal, tax, finance, market
                and risks factors involved to start up a business.
              </div>
              <div className="font-normal text-base text-[#262729B3] font-rubik mt-7 lg:mt-0 ml-0 lg:ml-9">
                Business advisory service advises current and future businesses prospects of a
                client, with the aim of advancing their business or company. This service is used by
                all types of businesses and would involve examining the legal, tax, finance, market
                and risks factors involved to start up a business.
              </div>
            </div>
            <div className="grid items-center justify-center w-full mt-24  bg-graybg lg:grid-cols-2">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
              >
                <img src={PenPicture} alt="PenPicture" className="h-[450px] w-[580px]" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="lg:ml-9 mt-7"
              >
                <div className="flex items-center justify-start lg:-mt-44">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">One-page sites with Reactjs</span>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">Built with Tailwindcss</span>
                </div>
                <div className="flex items-center justify-start mt-5">
                  <div className="w-2 h-5 bg-navItemHover"></div>
                  <span className="ml-3">Free updates and support</span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className=" bg-numberDiv block lg:h-52 mt-7 lg:w-[550px] xl:w-[700px] lg:ml-[400px] lg:-mt-52 xl:ml-[480px] xl:-mt-64 rounded-2xl"
              >
                <div className="flex items-center justify-center">
                  <div className="mx-auto">
                    <div className="items-center mx-auto mt-10 sm:flex sm:flex-wrap sm:justify-around">
                      <div className="mx-10">
                        <CountUp
                          className="text-4xl font-medium text-white font-rubik"
                          start={0}
                          end={280}
                          duration={2}
                          delay={0}
                        />
                        <p className="font-rubik text-lg text-[#FFFFFFB3]">Project Lunched</p>
                      </div>
                      <div className="w-[2px] h-24 bg-[#FFFFFF1A] sm:block hidden"></div>
                      <div className="mx-10">
                        <CountUp
                          className="text-4xl font-medium text-white font-rubik"
                          start={0}
                          end={640}
                          duration={2}
                          delay={0}
                        />
                        <p className="font-rubik text-lg text-[#FFFFFFB3]">Happy Clients</p>
                      </div>
                      <div className="w-[2px] h-24 bg-[#FFFFFF1A] md:block hidden"></div>
                      <div className="mx-10">
                        <span className="text-4xl font-medium text-white font-rubik">+</span>
                        <CountUp
                          start={0}
                          end={3500}
                          duration={2}
                          delay={0}
                          className="text-4xl font-medium text-white font-rubik"
                        />{' '}
                        <p className="font-rubik mb-4 text-lg text-[#FFFFFFB3]">Users Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-graybg h-28"></div>
          </div>
        </div>
      </div>

      {/* New Section  */}

      <div className="grid grid-cols-1 mb-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="mx-20 ">
          <div className="">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              className=""
            >
              <div className="">
                <div className="flex items-center justify-start">
                  <div className=" lg:ml-7 lg:-mt-7 w-10 h-[1px] bg-navItemHover mt-5 ml-0 mr-3"></div>
                  <span className="mt-5 text-base font-medium leading-7 lg:ml-7 lg:-mt-7 text-navItemHover font-rubik">
                    Our notion
                  </span>
                </div>
                <h1 className="lg:ml-7 mt-8 text-[#262729] text-3xl font-rubik font-medium">
                  An Exceptionally unique experience Tailored to you
                </h1>
                <p className="mt-8 text-lg font-normal lg:ml-7 mr-7 font-rubik">
                  In a professional context it often happens that private or corporate clients order
                  a publication news while still not being ready.
                </p>
              </div>
              <div className="block w-full mt-8 sm:flex sm:justify-start lg:ml-5 sm:items-center ">
                <button className="px-12 py-3 text-white rounded-full  bg-navItemHover hover:bg-orange-500 lg:px-11 sm:px-14 sm:py-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="mx-auto mt-5 "
        >
          <img src={AboutSmile} className="h-[450px] mt-10 sm:mt-0" alt="AboutSmile" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="mx-20 mt-10 sm:mt-0"
        >
          <h1 className="text-xl font-medium leading-7 font-rubik text-navItemHover">
            Our Customer
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
          <h1 className="text-xl font-medium leading-7 mt-7 font-rubik text-navItemHover">
            Our Products
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
          <h1 className="text-xl font-medium leading-7 mt-7 font-rubik text-navItemHover">
            Our Services
          </h1>
          <p className="text-[#25373FB3] leading-7 text-base font-normal mt-7">
            Business advisory service advises current and future businesses prospects of a client,
            with the aim of
          </p>
        </div>
      </div>

      {/* Team Section  */}

      <TeamSilder />

      {/* Joining Section  */}

      <div className="w-full bg-numberDiv h-96 mb-28">
        <div className="flex items-start justify-end">
          <img
            src={YellowCurve}
            alt="YellowCurve"
            className="self-end w-10 h-10  sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mx-10 text-5xl font-medium text-center text-white font-rubik">
            Interested in joining our team?
          </h1>
          <button className="px-12 py-3 mt-10 text-white rounded-full  bg-navItemHover hover:bg-orange-500 lg:px-11 sm:px-14 sm:py-4">
            Explore Job Opertunities
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
