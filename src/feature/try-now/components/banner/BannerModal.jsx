/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import { ImCross } from 'react-icons/im';

function BannerModal({ setShowModal }) {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log('data -> ', data);
    setShowModal(false);
  };

  return (
    <>
      <div className=" w-full h-full z-50 px-5 md:px-10 lg:px-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] fixed top-0 left-0">
        <div className="relative w-full md:w-[60vw] lg:w-[40vw] p-5 bg-white border-0 rounded-xl">
          {/* -- cancel button -- */}
          <div onClick={() => setShowModal(false)}>
            <ImCross className="absolute top-5 left-5 text-black text-sm cursor-pointer" />
          </div>

          <div className="mb-5 flex flex-col items-center">
            <h1 className="text-2xl text-black text-center font-bold">Get your Tech, sorted!</h1>
          </div>

          {/* -- form -- */}
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="mb-5 ">
              <label className="mb-1 ml-2 text-sm font-semibold">Full name*</label>
              <input
                {...register('full_name', { required: 'Required !!!' })}
                type="text"
                placeholder="John Doe"
                className="w-full pl-3 py-2 text-md text-gray5 border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              />
              {errors.full_name && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.full_name.message}{' '}
                </small>
              )}
            </div>

            <div className="mb-5">
              <label className="mb-1 ml-2 text-sm font-semibold">Work Email*</label>
              <input
                {...register('email', {
                  required: 'Required !!!',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid e-mail address',
                  },
                })}
                type="email"
                placeholder="johnDoe@gmail.com"
                className="w-full pl-3 py-2 text-md text-gray5 border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              />
              {errors.email && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.email.message}{' '}
                </small>
              )}
            </div>

            <div className="mb-3">
              <label className="mb-1 ml-2 text-sm font-semibold">Phone Number*</label>
              <input
                {...register('number', {
                  required: 'Required !!!',
                  pattern: { value: /^\d{10}$/, message: 'Please enter a valid 10-digit no.' },
                })}
                type="number"
                placeholder="9343748734"
                className="w-full pl-3 py-2 text-md text-gray5 border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              />
              {errors.number && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.number.message}{' '}
                </small>
              )}
            </div>

            <div className="mb-5">
              <label className="mb-1 ml-2 text-sm font-semibold">Business idea*</label>
              <textarea
                {...register('business_idea', { required: 'Required !!!' })}
                cols=""
                rows="2"
                placeholder="Tell us more about your business idea."
                className="w-full pl-3 py-2 text-md text-gray5 border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              ></textarea>
              {errors.business_idea && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.business_idea.message}{' '}
                </small>
              )}
            </div>

            {/* -- submit-button -- */}
            <div className="text-center">
              <button
                type="submit"
                className="w-9/12 py-2 mt-8 text-sm text-white font-medium bg-blue2 border-0 rounded-md hover:bg-blue6"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BannerModal;
