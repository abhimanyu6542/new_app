/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../../../../constants/url.constant';


const Carousel_two_uc = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [
        `${IMAGE_BASE_URL + data.image1}`,
        `${IMAGE_BASE_URL + data.image2}`,
        `${IMAGE_BASE_URL + data.image3}`,
        `${IMAGE_BASE_URL + data.image4}`,
        `${IMAGE_BASE_URL + data.image5}`,
        `${IMAGE_BASE_URL + data.image6}`,
        `${IMAGE_BASE_URL + data.image7}`,
        `${IMAGE_BASE_URL + data.image8}`,
        `${IMAGE_BASE_URL + data.image9}`,
        `${IMAGE_BASE_URL + data.image10}`,
        `${IMAGE_BASE_URL + data.image11}`,
        `${IMAGE_BASE_URL + data.image12}`,
      ],
    },
    {
      id: 2,
      images: [
       `${IMAGE_BASE_URL + data.image13}`,
       `${IMAGE_BASE_URL + data.image14}`,
       `${IMAGE_BASE_URL + data.image15}`,
       `${IMAGE_BASE_URL + data.image16}`,
       `${IMAGE_BASE_URL + data.image17}`,
       `${IMAGE_BASE_URL + data.image18}`,
       `${IMAGE_BASE_URL + data.image19}`,
       `${IMAGE_BASE_URL + data.image20}`,
       `${IMAGE_BASE_URL + data.image21}`,
       `${IMAGE_BASE_URL + data.image22}`,
       `${IMAGE_BASE_URL + data.image23}`,
       `${IMAGE_BASE_URL + data.image24}`,
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // const handleSlideChange = (slideIndex) => {
  //   setCurrentSlide(slideIndex);
  // };

  return (
    <div className="relative h-500">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-transparent">
              <div className="flex flex-wrap justify-center h-full">
                {slide.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="flex items-center justify-center w-1/6 p-2">
                    <img
                      src={image}
                      alt={`Slide ${slide.id} Image ${imageIndex + 1}`}
                      className="object-cover max-w-full max-h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute flex items-center justify-center w-full transform -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-blue-200'
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel_two_uc;
