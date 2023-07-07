import React, { useEffect, useState } from 'react';
import Footer from '../../feature/shared/components/Footer/Footer';
import { Outlet, useParams } from 'react-router-dom';
import Header from '../../feature/shared/components/Header/Header';
import CommonNavBar from '../../feature/shared/components/Navbar/CommonNavBar/CommonNavBar';

const BaseLayout = () => {
  const {productName} = useParams();
  const [ isAProductPage, setIsAProductPage ] = useState(false);
  const checkIsProductPage = (productName) => {
    productName ? setIsAProductPage(true) : setIsAProductPage(false)
  }
  useEffect(()=>{
    checkIsProductPage(productName)
  }, [productName])
  return (
    <>
      <div className="!z-50">
        {isAProductPage && <CommonNavBar />}
        <Header isAProductPage={isAProductPage}/>
      </div>

      <div className="!z-20">
        <Outlet />
      </div>

      <Footer
        showHeading={true}
        bgColor="bg-violet7"
        headingColor="text-white"
        paragraphColor="text-slate-300"
        iconColor="text-white"
      />
    </>
  );
};

export default BaseLayout;
