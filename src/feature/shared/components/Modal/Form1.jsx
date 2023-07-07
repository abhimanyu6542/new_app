/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
// import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function Form1({ setShowModal }) {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // email-js


  // 'https://api.emailjs.com/api/v1.0/email/send'

  const handleOnSubmit = async(data) => {
    setShowModal(false);

    // email.js
    let emailJsData = {
      service_id: 'service_4psgxbk',
      template_id: 'template_4q5skfy',
      user_id: 'bv0sbtaRjm4Rk9uHy',
      template_params: {
        "full_name": data.full_name,
        "work_email": data.email,
        "phone_number": data.number ,
        "message": data.business_idea ,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
    };

    console.log(emailJsData);

    // const post = { userName: userName }
    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailJsData)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  };

  return (
    <>
      <div className="p-5">
        {/* -- form section -- */}
        <div>
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-2xl font-bold text-center text-black">
              Launch your Hyperlocal Business
            </h1>
            <p className="text-sm font-semibold text-center">Get started with Yelo Today</p>
          </div>

          {/* -- form -- */}
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="mb-5 ">
              <label className="mb-1 ml-2 text-sm font-semibold">Full name*</label>
              <input
                {...register('full_name', { required: 'Required !!!' })}
                type="text"
                placeholder="John Doe"
                className="w-full pl-3 py-2 text-md text-black border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
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
                className="w-full pl-3 py-2 text-md text-black border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
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
                className="w-full pl-3 py-2 text-md text-black border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
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
                className="w-full pl-3 py-2 text-md text-black border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
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
                className="w-9/12 py-2 mt-8 text-sm font-medium text-white border-0 rounded-md bg-blue2 hover:bg-blue6"
              >
                Submit
              </button>
            </div>
          </form>

          {/* <footer className="mt-3 text-sm text-center">
            Already have an account,
            <span className="font-semibold cursor-pointer text-blue2 text-underline"> Sign in</span>
          </footer> */}
        </div>
      </div>
    </>
  );
}

export default Form1;
