import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const Icon = [
    {
      id: 1,
      logo: <FaFacebookSquare size={25} />,
    },
    {
      id: 2,
      logo: <FaSquareInstagram size={25} />,
    },
    {
      id: 3,
      logo: <FaTwitter size={25} />,
    },
    {
      id: 4,
      logo: <FaLinkedin size={25} />,
    },
  ];

  return (
    <>
      <div className="footer max-w-screen-2xl mx-auto p-4 md:p-10   flex flex-col justify-center items-center">
        <div className=" flex gap-4">
          {Icon.map(({ id, logo }) => (
            <div className="logo">{logo}</div>
          ))}
        </div>

        <div className=" border-black flex flex-col justify-center items-center mt-12">
          <p className=" text-sm">
            &copy; 2024 your company. All rights reserved.
          </p>
          <p className=" text-sm">Supportive Partner ❤️ <span className=" font-bold">Shrikant</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
