/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = ({isAProductPage}) => {
  return (
    <>
      <section
        className="h-20 bg-center bg-cover bg-Hero font-rubik md:bg-top"
      >
        <Navbar isAProductPage={isAProductPage} />
      </section>
    </>
  );
};

export default Header;
