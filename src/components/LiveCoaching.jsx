import React from "react";
import ellp1 from "../Assets/images/webp/live-ep-1.png";

import ellp2 from "../Assets/images/webp/live-ep-2.png";

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
  {
    para: "An emotional chaos is raging inside you.",
  },
];
const LiveCoaching = () => {
  return (
    <div className="relative">
      <img className="absolute max-w-[310px] max-h-[300px] left-[0%] top-[19%]" src={ellp1} alt="ellp" />
      <img className="absolute max-w-[310px] max-h-[300px] right-[0%] top-[-12%]" src={ellp2} alt="ellp" />
      <div className="max-w-[1140px] container relative mx-auto px-3 md:py-0 py-7">
        <div className=" md:hidden block mx-auto ">
          <div className=" flex items-center justify-center mb-6 gap-1">
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
              className="sm:max-w-[380px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className=" hover:bg-[#003e924d] hover:bg-[#003E92] duration-300 md:p-[63px_26px] live_card p-[20px_16px] h-full md:min-h-[230px]">
                <p className=" font-ff-pop text-base font-normal leading-[25.6px] text-black duration-300">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap -mx-3 mb-14  md:mt-[29px] justify-center ">
          {fightData.slice(3).map((data, index) => (
            <div
              key={index}
              className="sm:max-w-[380px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className="live_card hover:bg-[#003e924d] hover:bg-[#003E92] duration-300 md:p-[63px_26px] p-[20px_16px] h-full md:min-h-[180px]">
                <p className=" font-poppines text-base font-normal leading-[25.6px] text-black duration-300">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" hidden md:block absolute z-[1] bottom-[-10%] sm:bottom-[-40%] lg:bottom-[-5%] xl:left-[-5%]">
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[649px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
            <div className=" flex items-end sm:translate-y-4 -translate-y-3">
              <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
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
