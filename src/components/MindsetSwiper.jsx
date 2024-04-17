import React, { useRef, useState } from "react";
import ellp1 from "../Assets/images/webp/mindset-elp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ellp from "../Assets/images/svg/swiper-elp.png";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import Button from "./Common/Button";
import { SwiperButton } from "./SwiperButton";

const MindsetSwiper = () => {
  return (
    <div className="min-h-screen xxl:min-h-[70vh] flex relative">
            <img className="absolute hidden lg:block max-w-[600px] max-h-[600px] left-[0%] top-[-50%] z-[-1]" src={ellp1} alt="ellp" />

      <div className="container relative  flex-grow flex flex-col mx-auto  px-3">
        <div className="flex items-center justify-center flex-col sm:absolute z-[11] sm:top-[4%] mt-10 sm:mt-0 lg:top-[3%] ms-[-30px] sm:right-[1%]">
          <span className=" font-ff-pop text-end ms-auto max-w-max sm:-rotate-90 font-light sm:ms-[160px] flex sm:items-end text-xl me-[40px] sm:me-0 leading-[34px]">
            MJH
          </span>
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" flex flex-col sm:flex-row items-end sm:translate-y-4 -translate-y-5">
              <p className="md:text-[24px] text-lg font-normal ff-hel text-black leading-[30px] uppercase">
                analysis
              </p>
              <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                04
              </p>
            </div>
            <div className=" sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[130px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
          </div>
        </div>
        <div className="flex relative flex-row  flex-grow flex-wrap  mt-[10px] justify-center items-center  -mx-3 ">
          <div className="md:w-6/12 z-30 ps-3 w-full">
            <h2 className="text-[30px] font-normal text-center sm:text-start leading-[38px] text-black uppercase ff-hel">
              THE FOUR PHASES OF
            </h2>
            <h1 className="text-[52px] mb-[19px] text-center sm:text-start fonr-normal leading-[62px] ff-hel text-black uppercase">
              SEPARATION{" "}
              <span className="text-[#F77B0B] ">
                {" "}
                <br />
                MINDSET
              </span>
            </h1>
            <p className="text-base leading-[26px] text-center sm:text-start font-ff-pop text-black font-normal opacity-[70%]  mb-[37px] max-w-[484px]">
              There are 4 typical separation phases. The 4 phases are not always
              clearly separated from each other and can overlap.
            </p>
            <div className="my-5 border-gradient">
              <Button text="Book a non-binding initial consultation now" />
            </div>
          </div>
          <div className="md:w-6/12 z-30 relative ps-3 w-full">
            <div className=" absolute bottom-2 left-0 lg:left-[-7%] z-[1]">
              <SwiperButton />
            </div>
            <div className="  bg-[#ffffff4d]">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper relative bg-[#003e92]   z-[1]"
              >
                <img
                  className="absolute bottom-0 right-0"
                  src={ellp}
                  alt="ellp"
                />
                <SwiperSlide>
                  <div className="my_swipe w-[600px] h-[450px] max-w-ful mt-[100px] bg-transparent flex flex-col  p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      1st phase <br /> "The not-wanting-to-be-true"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" my_swipe w-[600px] h-[450px] bg-transparent mt-[100px] max-w-ful flex flex-col  p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      2nd phase <br /> "The not-wanting-to-be-true"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my_swipe w-[600px] h-[450px] max-w-ful mt-[100px] bg-transparent flex flex-col p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      3rd phase <br /> "The not-wanting-to-be-true"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" my_swipe w-[600px] h-[450px] bg-transparent mt-[100px] max-w-ful flex flex-col p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      4th phase <br /> "The not-wanting-to-be-true"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>{" "}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MindsetSwiper;
