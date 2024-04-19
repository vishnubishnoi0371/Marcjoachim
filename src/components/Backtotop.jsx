import React from "react";

const Backtotop = () => {
  const [backtotop, setdowntop] = React.useState(false);

  const runTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setdowntop(true);
    } else {
      setdowntop(false);
    }
  });
  return (
    <div>
      {backtotop ? (
        <button
          onClick={runTop}
          className="fixed 'smooth'  animate-flip border-[2px] border-white  w-[38px] sm:w-[50px] h-[38px] sm:h-[50px] rounded-full bg-[#003e92] z-40 bottom-0 right-1 duration-500 flex items-center justify-center  me-2 mb-2  cursor-pointer"
        >
          <svg
            width="25"
            height="25"
            fill="#fff"
            viewBox="0 0 16 16"
            className="fill-[#fff] "
          >
            <path
              className="fill-[#fff] "
              fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              className="fill-[#fff] "
              fillRule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Backtotop;
