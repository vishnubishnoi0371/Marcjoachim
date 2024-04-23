import React, { useState } from "react";
import logo from "../Assets/images/svg/Logo.svg";
import phone from "../Assets/images/svg/phonesvg.svg";
import closebtn from "../Assets/images/svg/close-line.svg";
import openbtn from "../Assets/images/svg/nav_line.svg";
import Button from "./Common/Button";

const Herosec = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className="bg-[url('./Assets/images/webp/Herobg.webp')]  bg-no-repeat lg:bg-100% min-h-[110vh] lg:min-h-[50vh] xl:min-h-[100vh] flex ">
      <div className="container relative z-[1]  mx-auto px-3 flex-grow flex flex-col pt-[26px]">
        <div className="flex justify-between items-center">
          <img
            className="w-[147px] cursor-pointer h-[53px]"
            src={logo}
            alt="logo"
          />
          <div className="flex gap-[40px] items-center">
            <ul
              className={`${
                show ? "left-0" : "left-[-100%]"
              } flex  gap-[40px]  z-10 min-h-screen fixed md:min-h-fit md:static w-full md:w-auto items-center justify-center
              top-0  max-md:w-[100%] max-md:flex-col flex-row max-md:min-h-screen  bg-white md:bg-transparent right-0 ps-0 duration-[400ms] transition-all ease-linear`}
            >
              <li>
                <a
                  onClick={Movement}
                  aria-label="benifit"
                  href="#benifit"
                  className=" font-normal text-base ff-hel text-black lg:text-white hover:text-black duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                >
                  Benifits{" "}
                </a>
              </li>
              <li>
                <a
                  onClick={Movement}
                  aria-label="test"
                  href="#test"
                  className=" font-normal text-base ff-hel text-black lg:text-white hover:text-black duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                >
                  Testimonials{" "}
                </a>
              </li>
              <button
                aria-label="booking"
                className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] capitalize hover:shadow-button duration-300 block sm:hidden font-ff-inter  p-[16px_28.21px_16px_28.21px] text-white"
              >
                Book consultation now
              </button>
            </ul>
            <button
              aria-label="book-now"
              className=" hover:shadow-button capitalize duration-300 hidden sm:block  nav_btn font-ff-inter bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] p-[16px_28.21px_16px_28.21px] text-white"
            >
              Book consultation now
            </button>
            <div
              className=" position-relative  z-30  md:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? (
                <img src={closebtn} alt="#" />
              ) : (
                <img src={openbtn} alt="#" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start  mx-auto lg:mx-0  flex-grow gap-[30px] md:gap-[50px]">
          <div className="flex flex-col justify-center">
            <h3
              className="font-black text-[18.8px] capitalize ff-hel leading-[24px] text-[#F77B0B] ;
"
            >
              Marc joachim hubrich
            </h3>
            <p className="sm:text-[45px] text-[33px] uppercase md:text-[60px] ff-hel md:leading-[77px] font-normal max-w-[480px] text-black mb-2">
              Now I let you go!
            </p>
            <p className="md:text-[16px] text-[14px] font-normal leading-[26px] font-ff-pop mb-[32px] max-w-[500px]">
              For women who do not want to be completely dragged down by a
              SEPARATION. <br /> How to let go of your EX so you can leave him
              behind without having to run to a therapist right away.
            </p>
            <div className="flex items-center gap-1 md:gap-4">
              <Button
                label="calling"
                text="Book  a non-binding initial consultation now"
              />
              <a aria-label="number" href="tel:9992877529">
                <img src={phone} alt="phone-svg" />
              </a>
            </div>
          </div>
          <div className=" flex md:mt-5 xl:translate-y-[253px] lg:translate-y-[133px] gap-[50px] items-start  lg:ms-10">
            <div className="flex items-center   gap-3">
              <hr className="h-[70px] w-[2px] border-t-0 bg-[#9800b0]" />

              <p className="text-[14px] sm:text-base tracking-[2px] ff-hel uppercase font-light leading-[27px] mb-0 text-black lg:text-white">
                Die wichtigsten <br /> Aspekte einer <br /> Trennung:
              </p>
            </div>
            <div>
              <ul>
                <li className="list-disc  text-[14px] sm:text-base font-normal font-ff-pop text-black lg:text-white mb-[2px] leading-[26px]">
                  Physische Trennung
                </li>
                <li className="list-disc  text-[14px] sm:text-base font-normal font-ff-pop text-black lg:text-white leading-[26px]">
                  Mentale Trennung
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className=" mx-auto md:absolute z-[-1] bottom-[-10%] sm:bottom-[-40%] xl:bottom-[-25%]  lg:bottom-[-55%] xl:left-[-2%]"
        >
          <span className=" font-hpop inline-block max-w-max sm:-rotate-90 font-light text-xl leading-[34px]">
            MJH
          </span>
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[269px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]"></div>
            <div className=" flex items-end sm:translate-y-4 -translate-y-3">
              <p className=" ff-hel sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                01
              </p>
              <p className=" ff-hel capitalize  font-normal text-2xl leading-[30px]">
                fault
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
