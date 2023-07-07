/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavLinks from './NavLinks';
import GetStartedModal from '../Modal/GetStartedModal';
import default_logo from '/assets/access.png'; // TODO: UPDATE with an actual default logo
import { HEADER_CONTENT } from '../../constants/header.constants';
import { PRODUCT_NAMES } from '../../../product/constants/products.constants';
const Navbar = ({ isAProductPage }) => {
  let navBarContent = {};
  const { productName } = useParams();
  if (isAProductPage && productName && PRODUCT_NAMES[productName]) {
    navBarContent = HEADER_CONTENT[PRODUCT_NAMES[productName]];
  } else {
    navBarContent = HEADER_CONTENT['default'];
  }
  const [active, setActive] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, [active]);
  return (
    <>
      <nav
        className={`${
          active
            ? 'shadow-lg fixed xl:-top-[6px] sm:top-0 -top-[13px] pt-3 sm:pt-1 z-50 bg-white'
            : 'top-0'
        } fixed  w-full left-0 z-10 mb-2 ${isAProductPage ? 'top-10' : 'top-0 w-full'}`}
      >
        <div className="w-screen h-[80px] bg-white">
          <div className="flex items-center justify-between w-full h-full px-2">
            <div className="items-center lg:flex">
              <Link className="z-50 flex justify-start p-4 md:w-auto" to={'/'}>
                <img
                  src={navBarContent && navBarContent.logo ? navBarContent.logo : default_logo}
                  alt="logo"
                  className="h-5 md:cursor-pointer w-28"
                />
              </Link>
              <ul className="hidden lg:flex">
                <NavLinks links={navBarContent.links} />
              </ul>
            </div>
            <div className="hidden pr-4 md:flex md:ml-96 lg:ml-0 lg:mr-4">
              <Link
                to="/try-now"
                className="md:py-3 transition-all duration-300 mr-4 font-medium rounded-md px-7 inline-block bg-[#e5f1ff] text-[#377dff] hover:bg-[#bcd2ec] hover:text-black font-rubik"
              >
                Try Now
              </Link>
              <button
                onClick={() => setShowModal(!showModal)}
                className="px-5 py-0 font-medium text-white transition border rounded-md border-primary bg-primary hover:bg-opacity-90 md:px-6 md:py-3"
              >
                Request A Demo
              </button>
            </div>
            <div className="mr-4 text-3xl lg:hidden" onClick={handleClick}>
              <ion-icon name={`${nav ? 'close' : 'menu'}`}></ion-icon>
            </div>
          </div>

          <ul
            className={`
        lg:hidden bg-white h-full fixed w-80 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${nav ? 'left-0' : 'left-[-100%]'}
        `}
          >
            <div className="z-50 flex justify-end w-full p-4 md:w-auto">
              <div
                onClick={() => setNav(!nav)}
                className="fixed block -mt-20 text-4xl sm:hidden sm:-mt-20"
              >
                <ion-icon name={`${nav ? 'close' : 'menu'}`}></ion-icon>
              </div>
            </div>
            <div className="sticky -mt-10">
              <NavLinks links={navBarContent.links} />
            </div>
            <div className="flex flex-col items-start justify-start py-5 ml-3">
              <Link
                onClick={() => setNav(!nav)}
                to="/try-now"
                className="py-3 mr-4 font-medium rounded-lg px-6 inline-block bg-[#e5f1ff] text-[#377dff] hover:bg-[#bcd2ec] hover:text-black font-rubik"
              >
                Try Now
              </Link>
              <button
                onClick={() => setShowModal(!showModal)}
                className="p-3 px-6 py-3 mt-3 font-medium text-white transition border rounded-md border-primary bg-primary hover:bg-opacity-90"
              >
                Request A Demo
              </button>
            </div>
          </ul>
        </div>
        {showModal ? (
          <div className="">
            <GetStartedModal setShowModal={setShowModal} />
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
