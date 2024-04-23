import React from "react";
import ftlogo from "../Assets/images/svg/ftlogo.svg";
import { Facebook, Insta, Mail, Twiter } from "./Common/icon";

const MyFooter = () => {
  return (
    <div className="   bg-[url(./Assets/images/webp/footer-bg.webp)] bg-no-repeat  bg-cover bg-center py-[40px]  md:py-[95px]">
      <div className="max-w-[1140px] flex flex-col justify-center relative items-center  flex-grow mx-auto px-3">
        <img
          className="mb-4 max-w-[240px] cursor-pointer max-h-[90px]"
          src={ftlogo}
          alt="logo"
        />
        <p className="text-base font-normal font-ff-pop text-center mx-auto leading-[26px] text-white mb-0 max-w-[264px]">
          (c)2024 MARC JOACHIM HUBRICH All Rights Reserved
        </p>
        <div className="flex flex-row sm:flex-col gap-3 md:me-5 xl:me-0 sm:absolute sm:right-0 mt-6 sm:mt-0 sm:bottom-[1%]">
          <a
            target="blank"
            aria-label="facebook"
            className="duration-300 hover:translate-y-[-20%]"
            href="https://www.facebook.com/"
          >
            <Facebook />
          </a>
          <a
            target="blank"
            aria-label="twiter"
            className="duration-300 hover:translate-y-[-20%]"
            href="https://twitter.com/i/flow/login"
          >
            <Twiter />
          </a>
          <a
            target="blank"
            aria-label="mail"
            className="duration-300 hover:translate-y-[-20%]"
            href="https://mail.google.com/mail/u/0/#inbox "
          >
            <Mail />
          </a>
          <a
            target="blank"
            aria-label="insta"
            className="duration-300 hover:translate-y-[-20%]"
            href="https://www.instagram.com/accounts/login/"
          >
            <Insta />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
