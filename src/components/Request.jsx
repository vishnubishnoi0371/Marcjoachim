import React from "react";

const Request = () => {
  return (
    <div className="bg-[#f2f8ff]">
      <div className="container  mx-auto max-w-[1140px] px-3 overflow-hidden">
        <div className="flex relative flex-row flex-wrap py-8 md:py-[70px] justify-between items-center -mx-3 ">
          <div className="md:w-7/12 z-30 ps-3 w-full">
            <h1 className="text-[40px] text-center sm:text-start md:text-[52px] font-normal md:leading-[67px] text-black ff-hel uppercase">
              Request your
            </h1>
            <h1 className="text-[40px] text-center sm:text-start md:text-[52px] font-normal md:leading-[67px] text-black ff-hel uppercase">
              <span className="text-[#f77b0b]"> non-binding </span> strategy
            </h1>
            <h1 className="text-[40px] text-center sm:text-start md:text-[52px] font-normal md:leading-[67px] text-black ff-hel uppercase">
              meeting now!
            </h1>
          </div>
          <div className="md:w-5/12 z-30 w-full">
            <div className="flex gap-3 items-center px-3 lg:justify-end">
              <hr className="h-[120px] w-1 bg-[#9800b0]" />{" "}
              <p className="text-[16px] text-center sm:text-start max-w-[398px] font-ff-pop leading-[26px] text-black mb-0 font-normal">
                Click on the button below, choose an appointment and answer the
                questions truthfully. One of our strategy consultants will then
                contact you and conduct your free consultation. We can advise
                you on the following topics:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;