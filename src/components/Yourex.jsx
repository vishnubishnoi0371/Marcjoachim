import React from "react";

const Yourex = () => {
  return (
    <div>
      <div className="bg-[url('./Assets/images/webp/ex.webp')] z-[1]  relative min-h-[400px] bg-left-bottom md:min-h-[517px] bg-no-repeat bg-100% object-cover flex justify-center items-center ">
        <div className="max-w-[778px]  bg-[#ffffff4d] p-3 sm:p-5 lg:p-[50px] my-auto  mx-auto">
          <h1 className="font-normal leading-[62px] ff-hel uppercase text-center text-white mb-[10px] text-[42px] md:text-[52px]">
            Are you over your EX?
          </h1>
          <p className="text-[16px] font-normal font-ff-pop leading-[25px] text-center mx-auto mb-[30px] max-w-[585px] text-white">
            Most women don't even realize how their past experiences affect
            their lives today. Assisting you to overcome this situation is what
            we do.
          </p>
          <button className="text-[16px] font-ff-inter font-medium leading-[24px] text-white flex justify-center mx-auto p-[16px_36px] rounded-[68px] bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] border-transparent">
            Let’s find it out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yourex;
