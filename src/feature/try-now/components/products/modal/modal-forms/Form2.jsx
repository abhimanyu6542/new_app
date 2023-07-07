import React, { useContext } from 'react';
import { TrynowContext } from '../../../../TryNow';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from 'react-hook-form';

function Form2() {
  // context-value --
  const { setFormData2, setFormNumber } = useContext(TrynowContext);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    // console.log("data -> ", data);
    setFormNumber(3);
    setFormData2(data);
  };

  return (
    <>
      <div className="mb-2">
        {/* -- back button -- */}
        <div>
          <IoIosArrowBack
            onClick={() => setFormNumber(1)}
            className="absolute top-5 left-5 text-black text-lg cursor-pointer hover:text-blue2"
          />
        </div>

        {/* -- form section -- */}
        <div className="text-gray">
          <div className="mb-5 flex flex-col items-center">
            <h1 className="text-2xl text-black text-center font-bold">
              Start your 14 days free trial.
            </h1>
            <p className="text-sm text-center font-semibold">
              Make the best of this opportunity, explore the platform before you pay.
            </p>
          </div>

          {/* -- form -- */}
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="mb-5 ">
              <label className="mb-1 ml-2 text-sm font-semibold">create a new password*</label>
              <input
                {...register('product_name', { required: 'Required !!!' })}
                type="password"
                placeholder="John Doe"
                className="w-full pl-3 py-2 text-md border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              />
              {errors.product_name && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.product_name.message}{' '}
                </small>
              )}
            </div>

            {/* -- radio-buttons for tax-group */}
            <div className="mb-5">
              <p className="mb-1 ml-2 text-sm font-semibold">Choose your suitable business type</p>
              <div className="p-3 border-2 border-slate-300 rounded-md">
                <div className="mb-2">
                  <label htmlFor="Marketplace" className="text-sm font-base cursor-pointer">
                    <input
                      {...register('business_type', { required: true })}
                      type="radio"
                      name="business_type"
                      value="Marketplace"
                      className="mr-2"
                      id="Marketplace"
                    />{' '}
                    Multiple Merchants (Marketplace)
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="Yelo Storefront" className="text-sm font-base cursor-pointer">
                    <input
                      {...register('business_type', { required: true })}
                      type="radio"
                      name="business_type"
                      value="Yelo Storefront"
                      className="mr-2"
                      id="Yelo Storefront"
                    />{' '}
                    Yelo Storefront
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="D2C" className="text-sm font-base cursor-pointer">
                    <input
                      {...register('business_type', { required: true })}
                      type="radio"
                      name="business_type"
                      value="D2C"
                      className="mr-2"
                      id="D2C"
                    />{' '}
                    Single Brand Multi-Store (D2C)
                  </label>
                </div>
              </div>

              {errors.business_type?.type === 'required' && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  select tax-group !!!{' '}
                </small>
              )}
            </div>

            {/* -- submit-button -- */}
            <div className="text-center">
              <button
                type="submit"
                className="w-9/12 py-2 mt-8 text-sm text-white font-medium bg-blue2 border-0 rounded-md hover:bg-blue6"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form2;
