/* eslint-disable react/prop-types */
import React from 'react';
import AccordionLayout from './components/AccordionLayout';

function Questions({ data }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-5 py-10 md:px-10 md:py-20 ">
        <h1 className="mb-5 text-2xl font-bold text-center text-black lg:text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="w-full md:w-[80vw] lg:w-[60vw] ">
          {data.map((data, id) => (
            <div key={id}>
              <AccordionLayout question={data.question} answer={data.answer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Questions;
