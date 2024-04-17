import React from "react";

const TargetGroup = () => {
  return (
    <div className="bg-[#f2f8ff]">
      <div className="container  mx-auto max-w-[1140px] px-3 ">
        <div className="flex flex-col md:flex-row items-center py-[50px] justify-end md:gap-[120px]">
          <h1 className="md:text-[52px] text-[42px] font-normal ff-hel leading-[67px] text-[#f77b0b]">
            TARGET <span className="text-black uppercase">group</span>{" "}
          </h1>
          <div className="flex gap-3 items-center px-3 lg:justify-end">
            <hr className="h-[70px] w-1 bg-[#9800b0]" />{" "}
            <p className="text-[16px] max-w-[350px]  font-ff-pop leading-[26px] text-black mb-0 font-normal">
              The coaching is aimed at married women who have already separated
              or are thinking of separating.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('./Assets/images/webp/target-bg.png')]  bg-no-repeat bg-[80%] md:bg-100% sm:min-h-[50vh] md:min-h-[80vh] flex ">
        <div className="container relative  mx-auto max-w-[1140px] px-3 ">
          <div className="flex relative flex-row flex-wrap  lg:justify-between items-end mb-10 md:mb-0 mt-8 md:pt-14 lg:mt-14 -mx-3 ">
            <div className="lg:w-4/12 md:w-1/2 px-3 w-full">
              <div className="p-[30px_25px] md:p-[40px_32px]  bg-[#ffffff26] duration-300 hover:bg-[#003e92b2]">
                <p className="text-base lg:max-w-[310px] font-ff-pop font-normal text-white">
                  You have separated and have the feeling that you can never be
                  happy again and that you will be alone forever.
                </p>
              </div>
              <div className="p-[30px_25px] md:p-[40px_32px]  mt-5 bg-[#ffffff26] duration-300 hover:bg-[#003e92b2]">
                <p className="text-base lg:max-w-[310px] font-ff-pop font-normal text-white">
                  How are you supposed to be able to let go of someone who is so
                  entangled with your life? It's impossible, isn't it?
                </p>
              </div>
            </div>
            <div className="md:w-6/12 lg:4/12  px-3   w-full ">
              <div className="p-[30px_25px] md:p-[40px_32px]  z-[14] mt-3 md:mt-0  lg:absolute  lg:bottom-[-35%] lg:mx-3 duration-300  bg-[#ffffff26]  hover:bg-[#003e92b2]">
                <p className="text-base lg:max-w-[310px] font-ff-pop font-normal text-white">
                  To understand how to let go of your partner, you need a
                  detailed step-by-step action plan, which you will receive from
                  me in a 1:1 coaching session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetGroup;