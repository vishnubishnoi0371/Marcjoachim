import React from "react";
import about from "../Assets/images/webp/about.webp";
import aboutep from "../Assets/images/svg/about-ep.svg";
import { Arrow } from "./Common/icon";

const About = () => {
  return (
    <div id="test" className="relative">
      <div className="  mx-auto max-w-[1140px] px-3 overflow-hidden">
        <div className="pt-10 flex items-center md:justify-start justify-center lg:pt-0">
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 lg:mt-[11px] w-[200px] mb-5 lg:mb-0 lg:w-[26px] h-3 lg:h-40 xl:h-[169px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
              {" "}
            </div>
            <div className=" flex items-end lg:translate-y-4 gap-3 lg:gap-0 -translate-y-3">
              <p className=" ff-hel lg:-rotate-90 font-normal text-2xl sm:text-[40px]">
                05
              </p>
              <p className=" ff-hel  font-normal uppercase text-2xl leading-[30px]">
                About
              </p>
            </div>
          </div>
        </div>
        <div className="flex  flex-row flex-wrap mb-14 lg:mb-0  -mx-3  lg:pt-[52px] mt-5">
          <div className="md:w-1/2 z-30 w-full">
            <img className="w-full" src={about} alt="about" />
          </div>
          <div className="md:w-1/2 z-30 w-full px-3 lg:ps-[50px]">
            <h1 className="fonr-normal text-center md:text-start text-[40px] md:text-[45px] lg:text-[52px] text-black  uppercase font-ff-hel md:leading-[67px]">
              LAWYER <span className="text-[#f77b0b]"> &</span> DIVORCE COACH
            </h1>
            <p className="text-[27px] text-center md:text-start md:text-[37px] font-normal md:leading-[48px] uppercase  font-ff-hel mb-2 lg:mb-[31px] text-black">
              <span className="text-[#f77b0b]"> M</span>arc
              <span className="text-[#f77b0b]"> J</span>oachim
              <span className="text-[#f77b0b]"> H</span>ubrich
            </p>
            <p className=" text-xl text-center md:text-start leading-[28px] font-ff-hel font-normal text-black mb-3">
              About the mindset agency coach
            </p>
            <p className="font-normal text-black text-center mx-auto md:mx-0 md:text-start opacity-[70%] text-base font-ff-pop mb-7 lg:mb-[35px] max-w-[484px]">
              Marc J. Hubrich is the founder of the mindset agency specializing
              in consulting services.
            </p>
            <div className="border_gradient cursor-pointer mx-auto   md:mx-0 rounded-full w-full max-w-[330px]">
              <a className="  bg-white p-[13.83px_19px] justify-center rounded-[63px] flex items-center gap-4">
                <span className="font-gradient  text-base font-ff-inter font-medium leading-[24px]">
                  Learn more about the agency
                </span>
                <span>
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <img className=" absolute bottom-0 right-0" src={aboutep} alt="ellp" />
    </div>
  );
};

export default About;
