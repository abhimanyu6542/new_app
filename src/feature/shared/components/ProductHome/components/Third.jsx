import React from 'react'
import { BsCheck } from 'react-icons/bs';
import image_one from '../../../../../assets/t2.webp';
import image_two from '../../../../../assets/t3.png';

const Third = () => {
  return (
    <div>
      <div className='sm:px-16 my-16 flex flex-col-reverse sm:flex-row-reverse items-center'>
        <div className='px-5 py-4 lg:px-1'>
        <p className="text-lg sm:text-[2.1rem] font-bold text-start font-rubik">
        Delivery management & route optimization with Tookan
        </p>
        <p className='w-16 mt-1 mb-3 h-[3px] bg-blue-600 text-start'></p>
        <p className='w-5/6 text-gray-500 text-sm sm:text-lg font-medium text-start'>Reduce delivery costs and increase operational efficiency.</p>
        <ul className="my-3 text-gray-500 text-sm sm:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Real time rider tracking
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Route optimization
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Delivery cost efficiency
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Rider allocation
              </div>
            </li>
          </ul>
        </div>
        <img className='sm:w-6/12 sm:mr-10 w-11/12' src={image_one}/>
      </div>
      <div className='sm:px-10 py-10 mt-5 mb-5 md:mb-10 flex flex-col-reverse sm:flex-row items-center'>
        <div className='px-5 py-4 lg:px-1'>
        <p className="text-lg sm:text-[2.1rem] font-bold text-start font-rubik">
        Customer engagement & marketing automation with Hippo
        </p>
        <p className='w-16 mt-1 mb-3 h-[3px] bg-blue-600 text-start'></p>
        <p className='w-5/6 text-gray-500 text-sm sm:text-lg font-medium text-start'>Improve your customer experience and customer retention</p>
        <ul className="my-3 text-gray-500 text-sm sm:text-lg font-medium">
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Broadcast bulk messages across various channels
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Broadcast bulk messages across various channels
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Push notifications
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <BsCheck className="mr-2 mt-1 bg-green-200 text-green-600 rounded-full" />
                Reduce cart abandonment with marketing automation
              </div>
            </li>
          </ul>
        </div>
        <img className='sm:w-6/12 sm:mr-10 w-11/12' src={image_two}/>
      </div>
    </div>
  )
}

export default Third