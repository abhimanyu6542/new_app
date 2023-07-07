import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div key={link.name} className="px-3 text-left md:cursor-pointer group ">
            <div
              className="flex items-center justify-between py-1 pr-5 font-normal lg:py-7 md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {link.submenu ? (
                <>
                  <h5 className="text-sm font-rubik">{link.name}</h5>
                  <span className="inline text-xl md:hidden">
                    <ion-icon
                      name={`${heading === link.name ? 'chevron-down' : 'chevron-down'}`}
                    ></ion-icon>
                  </span>
                  <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </>
              ) : (
                <Link className="mt-1" to={link.link}>
                  {link.name}
                </Link>
              )}
            </div>

            {link.submenu && (
              <>
                <div
                  className={
                    link.sublinks.length > 5
                      ? 'absolute z-50 w-[700px] transition-all shadow-xl rounded-xl duration-300 -mt-10 border-t-4 border-t-navItemHover top-20 hidden group-hover:lg:block hover:lg:block group-hover:lg:-ml-[400px] '
                      : 'absolute z-50 w-80 transition-all shadow-xl rounded-xl duration-300 -mt-10 border-t-4 border-t-navItemHover top-20 hidden group-hover:lg:block hover:lg:block group-hover:lg:-ml-52 '
                  }
                >
                  <div className="p-2 bg-white px-7 rounded-b-3xl">
                    <div
                      className={
                        link.sublinks.length > 5
                          ? 'grid grid-cols-2 justify-start items-start'
                          : null
                      }
                    >
                      {link.sublinks.map((slink) => (
                        <div
                          key={slink.name}
                          className="relative block hover:border-blue-600 hover:border-b-2 "
                        >
                          <div key={slink.name} className="flex items-center justify-start p-1">
                            <div className="text-center w-8 h-8 rounded-full bg-gradient-to-t from-blue-200 to-[rgba(255,255,255,0.1)] shadow-2xl">
                              {slink.icon}
                            </div>
                            <li className="m-3 text-sm text-gray-600">
                              <Link
                                to={slink.link}
                                className="hover:text-blue-600 text-[#323B4B] text-base font-bold font-rubik"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          </div>
                          <p className="text-[#5F6673] mb-2 ml-12 -mt-5 font-normal text-sm font-rubik">
                            {slink.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'lg:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.submenu ? (
              <>
                {link.sublinks.map((slink) => (
                  <div key={slink.name}>
                    <div className={`${open ? 'left-0' : 'left-[-100%]'}`}>
                      <h1
                        onClick={() =>
                          subHeading !== slink.name ? setSubHeading(slink.name) : setSubHeading('')
                        }
                        className="flex items-center justify-between pr-5 font-semibold pl-7 md:pr-0"
                      >
                        <div className="relative block hover:border-blue-600 hover:border-b-2 ">
                          <div className="flex items-center justify-start">
                            <div className="text-center w-8 h-8 rounded-full bg-gradient-to-t from-blue-200 to-[rgba(255,255,255,0.1)] shadow-2xl">
                              {slink.icon}
                            </div>
                            <li className="m-3 text-sm text-gray-600">
                              <Link
                                onClick={() => setOpen(!open)}
                                to={slink.link}
                                className="hover:text-blue-600 text-[#323B4B] text-base font-bold font-rubik"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          </div>
                          <p className="text-[#5F6673] ml-12 -mt-5 font-normal font-rubik">
                            {slink.description}
                          </p>
                        </div>
                      </h1>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
