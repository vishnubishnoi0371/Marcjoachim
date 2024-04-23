import { useSwiper } from "swiper/react";
import { Nextarrow, Prevarrow } from "./Common/icon";

export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className=" relative flex  gap-[42px] items-center ">
        <button aria-label="prev" className="hidden md:block" onClick={() => swiper.slidePrev()}>
          <Prevarrow />
        </button>
        <button
        aria-label="next"
          className="me-10 absolute top-[0%] translate-x-[270%] hidden md:block"
          onClick={() => swiper.slideNext()}
        >
          <Nextarrow />
        </button>
      </div>
    </>
  );
};
