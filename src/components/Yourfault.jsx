import React from "react";
import fault from "../Assets/images/webp/fault-ep-1.webp";

const Yourfault = () => {
  return (
    <div id="benifit" className="md:pt-[50px]  pt-3 relative">
      <div className="container  mx-auto px-3 md:pt-[50px]">
        <div className="flex relative flex-row flex-wrap  justify-center items-center -mx-3 md:pt-[51px]">
          <div className="lg:w-6/12 z-30 w-full">
            <div
              data-aos="zoom-in"
              className="flex flex-col lg:justify-end justify-center items-center lg:items-end"
            >
              <h1 className="text-[48px] md:text-[60px] text-center md:text-start ff-hel font-normal leading-[77px] text-black">
                IT'S NOT
                <br />
                <span className="text-[#f77b0b] lg:ps-8 lg:ms-[40px]">
                  {" "}
                  YOUR{" "}
                </span>{" "}
                FAULT!
              </h1>
            </div>
          </div>
          <div className="lg:w-6/12 z-30  w-full">
            <div
              data-aos="zoom-in"
              className="flex gap-3 items-center px-3 justify-center"
            >
              <hr className="h-[70px] w-[2px] bg-[#9800b0]" />{" "}
              <p className="text-[16px] max-w-[288px] font-ff-pop leading-[26px] text-black mb-0 font-normal">
                It's not your fault for not knowing how to let go of the partner
                who no longer made you feel special.
              </p>
            </div>
          </div>
        </div>
        <h2 data-aos="zoom-in" className="ff-hel capitalize font-black text-xl leading-[28px] text-black text-center mt-5 md:mt-[58px] mb-[35px]">
          How would you know when you are busy with completely different things
          at the moment:
        </h2>
      </div>
      <img
        className="right-0 absolute max-w-[400px] max-h-[400px] top-[4%]"
        src={fault}
        alt="ellip"
      />
    </div>
  );
};

export default Yourfault;
