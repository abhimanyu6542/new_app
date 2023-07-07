import React, { useContext } from 'react';
import { TrynowContext } from '../../../TryNow';
import { ImCross } from 'react-icons/im';
// components --
import InfoSection from './InfoSection';
import ModalForms from './modal-forms/ModalForms';

function ProductModal() {
  // context-value --
  const { setShowModal } = useContext(TrynowContext);

  return (
    <>
      <div className="w-full h-full z-50 px-5 md:px-10 lg:px-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] fixed top-0 left-0">
        <div className=" flex bg-white border-0 rounded-lg">
          {/* -- Info section -- */}
          <div className="w-full lg:w-[35vw]  relative hidden lg:block">
            <img
              src="https://jungleworks.com/wp-content/themes/jw/webpImages/backgroundPopupImg.webp"
              alt="background"
              className="w-full h-full"
            />
            <div className="w-[80%] hidden lg:block  absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
              <InfoSection />
            </div>

            {/* -- cancel button -- */}
            <div onClick={() => setShowModal(false)}>
              <ImCross className="absolute top-20 left-10 text-white text-md cursor-pointer" />
            </div>
          </div>

          {/* -- form section -- */}
          <div className="w-full lg:w-[30vw] relative lg:static ">
            {/* -- cancel button -- */}
            <div onClick={() => setShowModal(false)} className="block lg:hidden">
              <ImCross className="z-20 absolute top-5 left-5 text-black text-md cursor-pointer border-2 border-red-400" />
            </div>

            <ModalForms />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
