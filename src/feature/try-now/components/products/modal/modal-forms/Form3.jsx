import React, { useContext } from 'react';
import { TrynowContext } from '../../../../TryNow';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from 'react-hook-form';

function Form3() {
  // context-values --
  const {
    setFormData3,
    setFormNumber,
    setShowModal,
    formData1,
    formData2,
    formData3,
    allFormsData,
    setAllFormData,
  } = useContext(TrynowContext);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    // console.log("data -> ", data);
    setFormNumber(1);
    setFormData3(data);
    setShowModal(false);

    let info = [formData1, formData2, formData3];
    setAllFormData(info);
    console.log('allFormsData -> ', allFormsData);
  };

  return (
    <>
      <div className="">
        {/* -- back button -- */}
        <div>
          <IoIosArrowBack
            onClick={() => setFormNumber(2)}
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
              <label className="mb-1 ml-2 text-sm font-semibold">
                Create Your Free Yelo.Red Domain*
              </label>
              <input
                {...register('domain_name', { required: 'Required !!!' })}
                type="password"
                placeholder="Enter shop or business name"
                className="w-full pl-3 py-2 text-md border-[2px] border-slate-300 rounded-md outline-none focus:border-blue2"
              />
              <p className="text-[12px] text-right">
                Later you can upgrade your yelo.red to any custom domain.
              </p>
              {errors.domain_name && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.domain_name.message}{' '}
                </small>
              )}
            </div>

            <h3 className="mt-10 mb-1 ml-2 text-sm font-semibold">What are you planning to sell</h3>
            {/* -- select option for product -- */}
            <div className="mb-5">
              <label className="mb-1 ml-2 text-sm font-semibold">Products*</label>
              <select
                className="w-full p-2 border-2 border-slate-300 rounded-md outline-none"
                name="products"
                {...register('products', { required: true })}
              >
                <option value="" disabled>
                  Products
                </option>
                <option value="Food Delivery">Food Delivery</option>
                <option value="Grocery Delivery">Grocery Delivery</option>
                <option value="Medicine Delivery">Medicine Delivery</option>
                <option value="Retail Store">Retail Store</option>
                <option value="Clothing & Accessories">Clothing & Accessories</option>
                <option value="Appliances & Electric Repair">Appliances & Electric Repair</option>
                <option value="Electronics">Electronics</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Watchces">Watchces</option>
                <option value="Bags & Backpacks">Bags & Backpacks</option>
                <option value="Sports">Sports</option>
                <option value="Catering">Catering</option>
                <option value="Mobile Shop">Mobile Shop</option>
                <option value="Furniture">Furniture</option>
                <option value="Others">Others</option>
              </select>
              {errors.products && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.products.message}{' '}
                </small>
              )}
            </div>

            {/* -- select option for services -- */}
            <div className="mb-5">
              <label className="mb-1 ml-2 text-sm font-semibold">Services*</label>
              <select
                className="w-full p-2 border-2 border-slate-300 rounded-md outline-none"
                name="services"
                {...register('services', { required: true })}
              >
                <option value="" disabled>
                  Services
                </option>
                <option value="Beauty Services">Beauty Services</option>
                <option value="Home Cleaning & Repair">Home Cleaning & Repair</option>
                <option value="Tailor Services">Tailor Services</option>
                <option value="Pet Services">Pet Services</option>
                <option value="Dry Cleaning Services">Dry Cleaning Services</option>
                <option value="Laundry Services">Laundry Services</option>
              </select>
              {errors.services && (
                <small className="mt-0 text-xs font-semibold text-red-500">
                  {errors.services.message}{' '}
                </small>
              )}
            </div>

            {/* -- submit-button -- */}
            <div className="text-center">
              <button
                type="submit"
                className="w-9/12 py-2 mt-8 text-sm text-white font-medium bg-blue2 border-0 rounded-md hover:bg-blue6"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form3;
