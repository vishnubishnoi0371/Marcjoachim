import React from "react";
import linkbtn from "../../Assets/images/svg/hero-book.svg";

const Button = (props) => {
  return (
    <div className="border_gradient  rounded-full w-full max-w-[452px]">
      <a className="p-[5.83px_9px] cursor-pointer  bg-white mx-[2px] my-[px] rounded-[63px] flex items-center gap-1">
        <span className="ms-3 ">
          <img
            src={linkbtn}
            alt=""
            className=" max-w-[50.84px] max-h-[47.33px] relative z-10 w-full h-full sm:text-nowrap"
          />
        </span>
        <span className="font-gradient">{props.text}</span>
      </a>
    </div>
  );
};

export default Button;
