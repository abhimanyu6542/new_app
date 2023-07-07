import React from 'react';
import '../../../../../style/Loader.css';

const Spinner = () => (
  <div className="flex justify-center items-center ">
    <div className="lds-spinner mx-auto">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  </div>
);

export default Spinner;
