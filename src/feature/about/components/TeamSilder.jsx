import React from 'react';
import Slider from 'react-slick';
import TeamCard from './TeamCard';
import { TeamData } from './TeamData';

const TeamSilder = () => {
  const data = TeamData;
  var settings = {
    className: 'w-full',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-graybg w-full sm:h-[800px] ">
        <div className=" mx-20">
          <div className="">
            <div className="">
              <div className="">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                  className="flex justify-center items-center"
                >
                  <div className="flex justify-center items-center mt-36">
                    <div className=" lg:ml-7 lg:-mt-7 w-10 h-[1px] bg-navItemHover mt-5 ml-0 mr-3"></div>
                    <span className="lg:ml-7 lg:-mt-7 mt-5 text-base text-navItemHover font-medium leading-7 font-rubik">
                      Our Team
                    </span>
                  </div>
                </div>
                <h1
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                  className="lg:ml-7 mt-8 text-[#262729] text-center text-3xl font-rubik font-medium"
                >
                  Meet the minds shaping <br />
                  your digital business
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="mt-14 mb-20 w-full"
        >
          <Slider {...settings}>
            {data.map((item) => (
              <TeamCard key={item.name} person={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TeamSilder;
