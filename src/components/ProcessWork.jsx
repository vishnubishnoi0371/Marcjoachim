import React from "react";
import Button from "./Common/Button";
const fightData = [
  {
    para: "How do I let go of my EX so I can finally leave him behind?",
  },
  {
    para: "How does the divorce process work?",
  },
  {
    para: "Do I need a lawyer?",
  },
  {
    para: "How much will the divorce cost?",
  },
  {
    para: "What will happen to my children?",
  },
  {
    para: "What does my future as a single person look like now?",
  },
  {
    para: "How do I rebuild my self-esteem?",
  },
];
const ProcessWork = () => {
  return (
    <div className=" bg-[url(./Assets/images/webp/process-bg.webp)] bg-no-repeat bg-cover bg-center py-0 sm:py lg:pb-[185px] ">
      <div className="max-w-[1000px] flex flex-col flex-grow pb-10 xl:pb-0  mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3 pt-10 xl:pt-[110px] xxl:pt-14 justify-center">
          {fightData.slice(0, 3).map((data, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="sm:max-w-[250px] md:px-0 px-3 my-2 md:my-0 w-full"
            >
              <div className=" bg-[#ffffff26]  hover:bg-[#003E92] duration-300 p-[20px_16px] md:p-[61px_38px] h-full md:min-h-[162px]">
                <p className=" font-ff-pop text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap -mx-3   md:mt-[29px] justify-center lg:justify-start">
          {fightData.slice(3).map((data, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="w-full my-2 md:my-0 px-3 md:px-0 sm:max-w-[250px]"
            >
              <div className=" bg-[#ffffff26] hover:bg-[#003E92] duration-300 p-[20px_16px] md:p-[61px_38px] h-full  md:min-h-[169px]">
                <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center gap-4 pt-8 md:pb-10 lg:pb-0 md:pt-[58px]"
        >
          <Button
            label="consultion"
            text="Book a non-binding initial consultation now"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessWork;
