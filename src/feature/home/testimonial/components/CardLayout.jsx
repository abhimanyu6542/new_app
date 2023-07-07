/* eslint-disable react/prop-types */
import React from 'react';
// icons --
import { GiRoundStar } from 'react-icons/gi';

function CardLayout({ name, post, image, rating, description }) {
  const ratingArray = [];
  let count = rating;
  let emptyStar = 5 - rating;
  while (count != 0) {
    ratingArray.push(1);
    count -= 1;
  }
  while (emptyStar != 0) {
    ratingArray.push(0);
  emptyStar -= 1;
  }

  return (
    <>
      <div className="w-full md:w-[380px] pb-10 md:pb-0 mb-10 md:mb-24 lg:mb-0 border-b-[1px] md:border-b-0 border-slate-300">
        <div>
          {/* -- rating section -- */}
          <div className="flex items-center mb-5 lg:mb-10">
            {ratingArray.map((data, id) => (
              <div key={id}>
                {data === 1 ? (
                  <GiRoundStar className="mr-2 text-xl md:text-3xl text-[#ff971d] " />
                ) : (
                  <GiRoundStar className="mr-2 text-xl md:text-3xl text-[#25373f33] " />
                )}
              </div>
            ))}
          </div>

          {/* -- info -- */}
          <div>
            <p className="mb-5 font-semibold lg:mb-10 text-md md:text-lg text-gray4">{description} </p>
            <div className="flex items-center">
              <img
                src={image}
                alt="person image"
                className="w-10 h-10 mr-4 border-0 rounded-full md:h-16 md:w-16 bg-gray4"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">{name} </h2>
                <p className="text-gray-500 text-md">{post} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLayout;
