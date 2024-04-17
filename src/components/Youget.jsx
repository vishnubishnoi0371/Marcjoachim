import React from "react";
import Button from "./Common/Button";
import phone from "../Assets/images/svg/phonesvg.svg";
import flower from "../Assets/images/webp/flower.png";

const Youget = () => {
  return (
    <div className="pt-[48px] relative">
      <div className="container z-[1] mx-auto max-w-[1140px] px-3 ">
        <p className="text-base font-normal font-ff-pop leading-[26px] text-black mb-5 text-center">
          You are not alone! Numerous women before you stood exactly at this
          point, where you are now.
        </p>
        <div className="flex items-center justify-center gap-4 pb-[100px] md:pb-[122px]">
          <Button text="Book a non-binding initial consultation now" />
          <img src={phone} alt="phone-svg" />
        </div>
        <div className="flex relative flex-row px-3 flex-wrap mb-[50px] justify-center items-center -mx-3 ">
          <div className="lg:w-5/12 z-30 w-full">
            <div className="flex flex-col md:flex-row items-center">
              <h1 className="text-[42px] md:text-[52px] font-normal uppercase ff-hel leading-[normal] md:leading-[67px] text-black">
                what you <br />
                <span className="md:text-[60px] text-[48px] leading-[normal] md:leading-[78px]">
                  will <span className="text-[#f77b0b]"> get</span>
                </span>
              </h1>
              <img
                className="max-w-[200px] hidden xl:block max-h-[200px]"
                src={flower}
                alt="flower"
              />
            </div>
          </div>
          <div className="lg:w-7/12 z-30 w-full">
            <div className="flex gap-3 items-center px-3 ">
              <hr className="h-[60px] w-[2px] bg-[#9800b0]" />{" "}
              <p className="text-[16px] text-center sm:text-start mt-4 sm:mt-0 max-w-[420px] font-ff-pop leading-[26px] text-black mb-0 font-normal">
                I will show you which steps are necessary for you to finally
                successfully let go of your EX. And I will support you to look
                confidently into your new future.
              </p>
            </div>
          </div>
        </div>
        <div className=" absolute z-[-1] me-4 sm:me-0 bottom-[45%] md:bottom-[20%] xl:bottom-[25%] right-[15%] md:right-[4%] xl:right-[12%]">
          <span className=" font-ff-pop md:inline-block flex items-end text-end ms-auto md:ms-14 max-w-max sm:-rotate-90 font-light   text-xl leading-[34px]">
            MJH
          </span>
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" flex items-end sm:translate-y-4 -translate-y-5">
              <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                02
              </p>
            </div>
            <div className=" sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[269px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youget;
