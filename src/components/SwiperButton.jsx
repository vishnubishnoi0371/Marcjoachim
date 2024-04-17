import { useSwiper } from "swiper/react";
import { Nextarrow, Prevarrow } from "./Common/icon";

export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className=" relative flex  gap-[42px] items-center">
        <button onClick={() => swiper.slidePrev()}>
          <Prevarrow />
        </button>
        <button
          className="me-10 absolute top-[80%]"
          onClick={() => swiper.slideNext()}
        >
          <Nextarrow />
        </button>
      </div>
    </>
  );
};
