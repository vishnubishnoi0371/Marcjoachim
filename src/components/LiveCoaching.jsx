import React from "react";
import ellp1 from "../Assets/images/webp/live-ep-1.webp";
import linkbtn from "../Assets/images/svg/hero-book.svg";

import ellp2 from "../Assets/images/webp/live-ep-2.webp";

const fightData = [
  {
    para: "Why does your EX have to disappear from your life forever? ",
  },
  {
    para: "What should your everyday life as a single person look like now and how can you cope with the new challenges?",
  },
  {
    para: "How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?   ",
  },
  {
    para: "Who are you without your EX? ",
  },
  {
    para: "What new dreams and hopes do you want to live? ",
  },
];
const LiveCoaching = () => {
  return (
    <div className="relative md:py-14">
      <img
        className="absolute max-w-[310px] max-h-[300px] left-[0%] top-[19%]"
        src={ellp1}
        alt="ellp"
      />
      <img
        className="absolute max-w-[310px] max-h-[300px] right-[0%] top-[-12%]"
        src={ellp2}
        alt="ellp"
      />
      <div className=" container relative mx-auto px-3 md:py-0 py-7">
        <div className=" md:hidden block mx-auto ">
          <div className=" flex items-center justify-center md:mb-6 gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[649px] border-l-[2px] border-t-[2px] border-0 border-[#F77B0B]"></div>
            <div className=" flex gap-3 items-end sm:translate-y-4 -translate-y-3">
              <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                03
              </p>
              <p className=" ff-hel uppercase  font-normal text-2xl leading-[30px]">
                goal
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-black mb-5 text-black leading-3-[28px] ff-hel text-center">
          In a 1:1 live coaching session, we will clarify the following
          questions in particular:
        </h2>
        <div className="flex flex-row flex-wrap -mx-3  justify-center">
          {fightData.slice(0, 3).map((data, index) => (
            <div
              key={index}
              className="md:max-w-[380px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className=" hover:bg-[#f5faff] duration-300 md:p-[63px_48px] live_card p-[20px_16px] h-full lg:min-h-[230px]">
                <p className=" font-ff-pop text-base lg:max-w-[280px] font-normal leading-[25.6px] text-black duration-300">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap -mx-3 md:mb-14 pb-4 md:pb-10  justify-center xl:justify-start ">
          {fightData.slice(3).map((data, index) => (
            <div
              key={index}
              className="md:max-w-[380px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className="live_card hover:bg-[#f5faff] duration-300 md:p-[88px_48px] p-[20px_16px] h-full lg:min-h-[230px]">
                <p className=" font-ff-pop text-base lg:max-w-[280px] font-normal leading-[25.6px] text-black duration-300">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
          <div className=" lg:w-1/3 px-3 mx-auto lg:mx-0">
            <div className="border_gradient hover:shadow-button duration-300 w-full max-w-[452px] mt-3 lg:mt-[80px] rounded-[8px]">
              <a className="p-[5.83px_9px] cursor-pointer  bg-white   rounded-[8px] flex items-center gap-1">
                <span className="ms-3 ">
                  <img
                    src={linkbtn}
                    alt=""
                    className=" max-w-[50.84px] max-h-[47.33px] relative z-[1] w-full h-full sm:text-nowrap"
                  />
                </span>
                <span className="font-gradient clear-start text-base font-medium font-ff-inter leading-[24px] ">
                  Book a non-binding initial consultation now
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className=" hidden md:block xl:absolute z-[1] bottom-[-10%] lg:bottom-[-40%]  xl:bottom-[-5%]  xl:left-[-5%]">
          <div className=" flex lg:items-end mx-auto items-center justify-center  gap-1">
            <div className=" ml-5 lg:mt-[11px] w-[200px] lg:w-[26px] h-3 lg:h-40 xl:h-[649px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
            <div className=" flex items-end gap-4 lg:translate-y-4 -translate-y-3">
              <p className=" ff-hel lg:-rotate-90 font-normal text-2xl lg:text-[40px]">
                03
              </p>
              <p className=" ff-hel uppercase  font-normal text-2xl leading-[30px]">
                goal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCoaching;
