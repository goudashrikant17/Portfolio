import React from "react";
import Coder from "../../public/Coder.webp";
import { ReactTyped } from "react-typed";

import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";


const Home = () => {
  return (
    <>
      <div name="HOME" className="max-w-screen-2xl container flex flex-col-reverse  md:flex-row md:px-20 py-10 px-4 ">
        <div className=" w-full md:w-6/12 p-4 flex flex-col justify-center">
          <div>
            <p className=" font-bold">Welcome In My Feed</p>
            <h1 className=" text-2xl md:text-4xl font-bold">
              Hello, I'M a  
              {/* <span className=" text-red-600"> Developer </span> */}
              <span className=" pl-2 text-red-700">
              <ReactTyped
      strings={[
        " Developer",
        "Programmer",
        "Coder",
      ]}
      typeSpeed={70}
      backSpeed={70}
     
      loop={true}
    >
      
    </ReactTyped>
    </span>
            </h1>
          </div>

          <div className=" mt-7">
            <p className=" font-bold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              aliquam repudiandae expedita sequi temporibus reiciendis beatae
              error maiores tempora, quibusdam dolorem totam possimus corporis
              sapiente!
            </p>
          </div>

          <div className="Icon  mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-between ">
            <div className="leftIcon">
              <p className=" font-bold">Available on</p>
              <div className=" flex space-x-4 mt-2">
                <span >
                  <a href="https://www.facebook.com/shrikant.shree.5245">
                  <FaFacebookSquare size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/shrikant-gouda-6b9105290/">
                  <IoLogoLinkedin size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                  </a>
                </span>
                <span>
                  <IoLogoYoutube size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                </span>
                <span>
                  <a href="https://www.instagram.com/">
                  <FaTelegram size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                  </a>
                </span>
              </div>
            </div>

            <div className="rightIcon">
              <p className=" font-bold">Currently Work on</p>
              <div className=" flex space-x-4 mt-2">
                <span >
                  < SiMongodb size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                </span>
                <span>
                  <SiExpress size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                </span>
                <span>
                  <IoLogoReact  size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                </span>
                <span>
                  <IoLogoNodejs size={30} className=" hover:scale-110 rounded-full duration-200 border-[2px]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:w-6/12 p-4 mt-20">
          <img className=" h-[440px] w-[440px] rounded-full " src={Coder} alt="" />
        </div>
      </div>

      <hr className=" border-[1px] " />
    </>
  );
};

export default Home;
