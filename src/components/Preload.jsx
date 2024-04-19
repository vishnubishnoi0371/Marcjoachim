import logo from "../Assets/images/svg/Logo.svg";

function Preload() {
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-[#00141B] flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30 "
      >
        <img
          rel="preload"
          className="animate-bounce w-[410px]"
          src={logo}
          alt="logo"
        />
        <div className="loader w-[50px] h-[50px] relative border-[5px] border-solid border-[#555] border-t-[#f9f9f9] rounded-[50%] animate-spin"></div>
      </div>
    </>
  );
}

export default Preload;
