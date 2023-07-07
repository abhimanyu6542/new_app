import React from 'react';
import image_one from '../../../../../assets/singlestore_ic (1).svg';
import image_two from '../../../../../assets/hyperlocal_ic.svg';
import image_three from '../../../../../assets/d2c_ic.svg';
import image_four from '../../../../../assets/hyperlocalStack.svg';
import { BsCheck } from 'react-icons/bs';

const Second = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-3 lg:mx-0 flex flex-col lg:flex-row">
        <div className="py-10 px-5 my-3 lg:my-10 mx-4 bg-white rounded-xl">
          <img src={image_one} />
          <h1 className="text-xl font-bold">Yelo</h1>
          <h1 className="text-xl font-bold">Storefront</h1>
          <p className="py-3 text-gray-500 text-lg lg:text-lg font-medium text-start">
            Establish a single store and focus on optimizing your sales by providing a seamless
            ordering and delivery platform for your customers.
          </p>
          <hr className="my-3" />
          <h1 className="mb-3 text-xl font-bold">Highlights</h1>
          <ul className="text-gray-500 text-lg lg:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Online Brand Store
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Online Catalogue
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Payment Gateways
              </div>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button
              className="py-3 px-6 lg:mt-6 mt-4 w-full bg-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xl font-bold rounded-xl"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="py-10 px-5 my-3 lg:my-10 mx-4 bg-white rounded-xl">
          <img src={image_two} />
          <h1 className="text-xl font-bold">Yelo</h1>
          <h1 className="text-xl font-bold">Multi-Vendor</h1>
          <p className="py-3 text-gray-500 text-lg lg:text-lg font-medium text-start">
            Leverage your business with a hyperlocal marketplace platform and focus on your target
            audience, ensuring on-time delivery.
          </p>
          <hr className="my-3" />
          <h1 className="mb-3 text-xl font-bold">Highlights</h1>
          <ul className="text-gray-500 text-lg lg:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Multi Seller Platform
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Commission model
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Versatile Inventory System
              </div>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button
              className="py-3 px-6 lg:mt-6 mt-4 w-full bg-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xl font-bold rounded-xl"
              type="button"
            >
              Request a Demo
            </button>
          </div>
        </div>
        <div className="py-10 px-5 my-3 lg:my-10 mx-4 bg-white rounded-xl">
          <img src={image_three} />
          <h1 className="text-xl font-bold">Yelo</h1>
          <h1 className="text-xl font-bold">Direct-to-Consumer</h1>
          <p className="py-3 text-gray-500 text-lg lg:text-lg font-medium text-start">
            Allow your brand to offer your customers a personalised buying experience. Go D2C and
            add a new distribution channel for your brand.
          </p>
          <hr className="my-3" />
          <h1 className="mb-3 text-xl font-bold">Highlights</h1>
          <ul className="text-gray-500 text-lg lg:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Manage Multiple Branches
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Geo-fencing & Location Tracking
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Improve Brand Visibility
              </div>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button
              className="py-3 px-6 lg:mt-6 mt-4 w-full bg-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xl font-bold rounded-xl"
              type="button"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 px-10 my-3 lg:my-10 mx-4 bg-white rounded-xl lg:hidden">
          <img src={image_four} />
          <h1 className="text-xl font-bold">Yelo</h1>
          <h1 className="text-xl font-bold">Headless</h1>
          <p className="py-3 text-gray-500 text-lg lg:text-lg font-medium text-start">
            A customized front end ordering experience powered with Yelos strong back end engine.
          </p>
          <hr className="my-3" />
          <h1 className="mb-3 text-xl font-bold">Highlights</h1>
          <ul className="text-gray-500 text-lg lg:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Freedom to build your personalised apps and website
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Conversion Optimization
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Build immersive customer experiences
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                Powerful back-end software support
              </div>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button
              className="py-3 px-6 lg:mt-6 mt-4 w-full bg-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xl font-bold rounded-xl"
              type="button"
            >
              Request a Demo
            </button>
          </div>
        </div>
        <div className="py-10 px-5 my-10 mx-4 hidden lg:flex lg:flex-col bg-white rounded-xl">
          <div className="hidden lg:flex lg:flex-col">
            <div className="hidden lg:flex lg:flex-row lg:justify-between">
              <img src={image_four} />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">Yelo Headless</h1>
                <p className="text-gray-500 text-lg font-medium text-start">
                  A customized front end ordering experience powered with Yelos strong back end
                  engine.
                </p>
              </div>
              <button
                className="py-3 px-6 bg-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xl font-bold rounded-xl"
                type="button"
              >
                Request a Demo
              </button>
            </div>
            <ul className="p-5 pl-24 text-gray-500 text-lg lg:text-lg font-medium flex flex-col justify-start">
              <li>
                <div className="flex flex-row">
                  <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                  Freedom to build your personalised apps and website
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                  Conversion Optimization
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                  Build immersive customer experiences
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <BsCheck className="mr-2 mt-1 bg-blue-200 text-blue-600 rounded-full" />
                  Powerful back-end software support
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
