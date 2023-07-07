import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/assets/logo_snag.png';
import NavLinks from './NavLinks';
const CommonNavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="top-0 left-0 right-0 z-50 w-full mb-2">
        <div className="w-full h-10 text-white bg-[#377DFF]">
          <div className="flex items-center justify-between w-full h-full px-2">
            <div className="flex items-center">
              <Link className="z-50 flex justify-start p-4 md:w-auto" to={'/'}>
                <img src={Logo} alt="logo" className="p-2 md:cursor-pointer w-28" />
              </Link>
            </div>

            <ul className="hidden pr-4 lg:flex lg:ml-96 lg:mr-4">
              <NavLinks />
            </ul>

            <div className="mr-4 text-3xl lg:hidden" onClick={handleClick}>
              <ion-icon name={`${nav ? 'close' : 'menu'}`}></ion-icon>
            </div>
          </div>

          <ul
            className={`
        lg:hidden text-black bg-white h-full border-black fixed w-80 top-0 z-50 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${nav ? 'left-0' : 'left-[-100%]'}
        `}
          >
            <div className="flex justify-end w-full p-4 md:w-auto">
              <div
                onClick={() => setNav(!nav)}
                className="fixed block -mt-20 text-4xl sm:hidden sm:-mt-20"
              >
                <ion-icon name={`${nav ? 'close' : 'menu'}`}></ion-icon>
              </div>
            </div>
            <div className="sticky -mt-10 ">
              <NavLinks />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CommonNavBar;
