import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import girlimg from "../Assets/images/webp/girl-img.png";

import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import { Quotes } from "./Common/icon";
const clientData1 = [
  {
    discription:
      "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
    name: "Marrie James-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
  {
    discription:
      "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
    name: "Marrie James-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
  {
    discription:
      "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
    name: "Marrie James-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
];
const clientData2 = [
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Ralph Edwards-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Ralph Edwards-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Ralph Edwards-CEO",
    position: "Limana Enterprises, CA",
    profile: girlimg,
  },
];
const Clintswiper = () => {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  return (
    <div className="relative md:pt-[200px]">
      <div className="flex items-center justify-center flex-col sm:absolute z-[11] sm:top-[4%] mt-10 sm:mt-0 lg:top-[0%] ms-[-30px] sm:right-[1%]">
        <span className=" font-ff-pop text-end  max-w-max sm:-rotate-90 font-light sm:ms-[160px] flex sm:items-end text-xl leading-[34px]">
          MJH
        </span>
        <div className=" flex sm:items-end items-start gap-1">
          <div className=" flex flex-col sm:flex-row items-end sm:translate-y-4 -translate-y-5">
            <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
              06
            </p>
          </div>
          <div className=" sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[180px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
        </div>
      </div>
      <div>
        <h1 className="md:text-[52px] text-[42px] text-center md:mb-10 uppercase font-normal ff-hel leading-[normal] md:leading-[67px] text-black ">
          What our <span className="text-[#F77B0B]"> clients</span> say
        </h1>
      </div>
      <Swiper
        direction={"vertical"}
        modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
        loop={true}
        autoHeight={true}
        spaceBetween={200}
        slidesPerView={1}
        pagination={true}
        navigation={false}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        className=" sm:!px-40 relative z-[1] !pt-[84px] !pb-[20px]"
      >
        {clientData1.map((data, index) => (
          <SwiperSlide key={index} className=" !h-auto">
            <div className=" p-[38px_20px_20px] md:p-[58px_50px_32px] max-w-[820px] mx-auto relative z-[1] shadow-[0px_2px_48px_0px_#00000014] h-full">
              <p className=" text-black opacity-[70%] font-ff-pop max-w-[721px] mx-auto text-base leading-[25px] text-center">
                {data.discription}
              </p>
              <h3 className=" font-ff-pop pt-4 font-medium text-base leading-[25px] text-center">
                {data.name}
              </h3>
              <p className="text-black opacity-[70%] font-normal font-ff-pop text-base leading-[25px] text-center">
                {data.position}
              </p>
              <img
                src={data.profile}
                alt="girlProfile"
                width={86}
                height={86}
                className=" absolute left-[50%] translate-x-[-50%] top-0 z-[-1] translate-y-[-55px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <span className="hidden md:block absolute top-[9%]  sm:top-[14%] right-[14%] z-[-1]">
          <Quotes />{" "}
        </span>
      </Swiper>
      {/*  */}
      <Swiper
        breakpoints={{
          850: {
            slidesPerView: 2,
          },
        }}
        modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        className=" max-w-[790px] px-5 sm:pb-10"
      >
        {clientData2.map((data, index) => (
          <SwiperSlide key={index} className=" sm:h-auto mb-[6px]">
            <div className=" p-[25px_36px_31px] mt-5 relative z-[1]  shadow-[0px_2px_48px_0px_#00000014]">
              <p className=" text-black opacity-[70%] font-ff-pop max-w-[721px] mx-auto text-base leading-[25px] text-center">
                {data.discription}
              </p>
              <h3 className=" font-ff-pop pt-4 font-medium text-base leading-[25px] text-center">
                {data.name}
              </h3>
              <p className="text-black opacity-[70%] font-normal font-ff-pop text-base leading-[25px] text-center">
                {data.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clintswiper;
