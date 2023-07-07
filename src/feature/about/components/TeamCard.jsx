import { Link } from 'react-router-dom';
import { BiLogoInstagram } from 'react-icons/bi';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';
import { RxTwitterLogo } from 'react-icons/rx';
import React from 'react';

const TeamCard = (person) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-7 px-2 cursor-move shadow-sm">
        <div className="mb-4 xl:h-[400px] h-80 w-64 xl:w-80 relative overflow-hidden group transition rounded-xl">
          <div className="w-full h-full flex justify-center items-center bg-neutral-100">
            <div className="mx-auto flex justify-center items-center bg-neutral-100">
              <img
                src={person.person.personImage}
                alt={person.person.personImage}
                className=" group-hover:scale-110 transition duration-300 bg-neutral-300"
              />
            </div>

            <div className="absolute -bottom-5 h-36 group-hover:bottom-0 w-full justify-center items-baseline opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-t from-orange-600 to-[rgba(255,255,255,0.1)] shadow-2xl duration-300 ">
              <div className="ml-16 mt-10">
                <h1 className="text-white font-rubik text-xl font-medium leading-8">
                  {person.person.name}
                </h1>
                <p className="leading-6 font-medium font-rubik text-sm text-cardText">
                  {person.person.designation}
                </p>
              </div>
              <div className="flex ml-16 justify-start items-center mt-3">
                <Link className="mr-3">
                  <BiLogoInstagram className="text-white h-5 w-5 text-xl" />
                </Link>
                <Link className="mx-3 ">
                  <TiSocialLinkedin className="text-white h-5 w-5 text-xl" />
                </Link>
                <Link className="mx-3 ">
                  <RiFacebookCircleFill className="text-white h-5 w-5 text-xl" />
                </Link>
                <Link className="mx-3 ">
                  <RxTwitterLogo className="text-white h-5 w-5 text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
