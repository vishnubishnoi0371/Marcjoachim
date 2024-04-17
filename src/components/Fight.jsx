import React from "react";
const fightData = [
  {
    para: "Your self-esteem is in the basement.",
  },
  {
    para: "You keep asking yourself what you did wrong.",
  },
  {
    para: "The feeling of helplessness is your constant companion.",
  },
  {
    para: "You spend the nights alone and lonely.",
  },
  {
    para: "You have stopped going out and spend the time crying in your room.",
  },
  {
    para: "An emotional chaos is raging inside you.",
  },
];
const Fight = () => {
  return (
    <div className=" bg-[url(./Assets/images/webp/fightbg.webp)] bg-no-repeat  bg-cover bg-center lg:bg-fullsize ">
      <div className="max-w-[1000px] mx-auto px-3 md:py-0 py-7">
        <div className="flex flex-row flex-wrap -mx-3  md:justify-end justify-center">
          {fightData.slice(0, 3).map((data, index) => (
            <div
              key={index}
              className="sm:max-w-[250px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className=" bg-[#003e924d] hover:bg-[#003E92] duration-300 md:p-[42px_26px] p-[20px_16px] h-full md:min-h-[162px]">
                <p className=" font-ff-pop text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap -mx-3   md:mt-[29px] justify-center md:justify-start">
          {fightData.slice(3).map((data, index) => (
            <div
              key={index}
              className="sm:max-w-[250px] md:px-0 px-3 w-full md:my-0 my-2"
            >
              <div className=" bg-[#003e924d] hover:bg-[#003E92] duration-300 md:p-[42px_26px] p-[20px_16px] h-full md:min-h-[169px]">
                <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fight;
