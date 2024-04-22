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
    <div className="xl:min-h-[110vh] md:min-h-[50vh] xxl:min-h-[80vh] flex relative">
      <img
        className="absolute hidden lg:block max-w-[600px] max-h-[600px] left-[0%] top-[-50%] z-[-1]"
        src={ellp1}
        alt="ellp"
      />

      <div className="container relative md:pt-12 flex-grow flex flex-col mx-auto  px-3">
        <div className="flex items-center justify-center flex-col  xl:absolute z-[11] xxl:top-[2%] lg:top-[4%] xxl:right-[-12%] mt-10 lg:mt-0   ms-[-30px] lg:right-[1%]">
          <span className=" font-ff-pop text-end ms-auto max-w-max lg:-rotate-90 font-light lg:ms-[160px] xxl:ms-[60px] flex lg:items-end text-xl me-[40px] sm:me-0 leading-[34px]">
            MJH
          </span>
          <div className=" flex xl:items-end justify-center  items-center gap-1">
            <div className=" flex flex-col sm:flex-row gap-5 xl:gap-0 items-end xl:translate-y-4 -translate-y-5">
              <p className="md:text-[24px] text-lg font-normal block xxl:hidden ff-hel text-black leading-[30px] uppercase">
                analysis
              </p>
              <p className=" ff-hel xl:-rotate-90 font-normal text-2xl sm:text-[40px]">
                04
              </p>
            </div>
            <div className=" sm:mt-[11px] w-[200px] xl:w-[26px] h-3 xl:h-40 xxl:h-[130px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
          </div>
        </div>
        <div className="flex relative flex-row  flex-grow mb-6 xl:pt-14 flex-wrap  mt-[14px]  justify-center items-center  -mx-3 ">
          <div className="md:w-6/12 z-30 px-3 w-full">
            <h2 className="text-[30px] font-normal text-center md:text-start leading-[38px] text-black uppercase ff-hel">
              THE FOUR PHASES OF
            </h2>
            <h1 className="text-[52px] mb-[19px] text-center md:text-start fonr-normal leading-[62px] ff-hel text-black uppercase">
              SEPARATION{" "}
              <span className="text-[#F77B0B] ">
                {" "}
                <br />
                MINDSET
              </span>
            </h1>
            <p className="text-base leading-[26px] text-center mx-auto md:mx-0 md:text-start font-ff-pop text-black font-normal opacity-[70%]  mb-[37px] max-w-[484px]">
              There are 4 typical separation phases. The 4 phases are not always
              clearly separated from each other and can overlap.
            </p>
            <div className="my-5 flex justify-center md:justify-start border-gradient">
              <Button text="Book a non-binding initial consultation now" />
            </div>
          </div>
          <div className="md:w-6/12 z-30 relative px-3 mb-5 md:mb-0 w-full">
            <div className="  bg-[#ffffff4d]">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={false}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper relative bg-[#003e92]   z-[1]"
              >
                <img
                  className="absolute bottom-0 right-0"
                  src={ellp}
                  alt="ellp"
                />
                <SwiperSlide>
                  <div className="my_swipe w-[600px] md:h-[300px] xl:h-[350px] sm:h-[300px] max-w-ful lg:mt-[100px] sm:mt-5 bg-transparent flex flex-col  p-5 md:p-[50px] justify-center items-center">
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
                  <div className=" my_swipe w-[600px] md:h-[300px] xl:h-[350px] sm:h-[300px] bg-transparent lg:mt-[100px] sm:mt-5 max-w-ful flex flex-col  p-5 md:p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      2nd phase <br /> "The Emotional Chass"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my_swipe w-[600px] md:h-[300px] xl:h-[350px] sm:h-[300px] max-w-ful lg:mt-[100px] sm:mt-5 bg-transparent flex flex-col p-5 md:p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      3rd phase <br /> "The Reconstruction"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" my_swipe w-[600px] md:h-[300px] xl:h-[350px] sm:h-[300px] bg-transparent lg:mt-[100px] sm:mt-5 max-w-ful flex flex-col p-5 md:p-[50px] justify-center items-center">
                    <p className="text-xl leading-[32px] mb-4 font-medium max-w-[360px] text-center mx-auto font-ff-pop text-white ">
                      4th phase <br /> "The New concept of life"
                    </p>
                    <p className="text-base leading-[26px] font-normal max-w-[360px] text-center mx-auto font-ff-pop text-white mb-0">
                      This phase is characterized by denial and ignoring the
                      final separation.
                    </p>
                  </div>{" "}
                </SwiperSlide>
                <div className=" absolute bottom-2 left-0 lg:left-[-7%] z-[1]">
                  <SwiperButton />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MindsetSwiper;
