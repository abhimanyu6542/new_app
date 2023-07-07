import React from 'react';
import Spinner from './components/Spinner';

const Loader = () => {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center bg-white ">
      <Spinner />
      </div>
    </>
  );
};

export default Loader;
