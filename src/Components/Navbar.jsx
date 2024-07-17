import React, { useState } from "react";
import pic from "../../public/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // const navItem = (
  //   <>
  //     <li>Home</li>
  //     <li>About</li>
  //     <li>Portfolio</li>
  //     <li>Experience</li>
  //     <li>Contact</li>
  //   </>
  // );

  const items = [
    {
      id: 1,
      text: "HOME",
    },
    {
      id: 2,
      text: "ABOUT",
    },
    {
      id: 3,
      text: "PORTFOLIO",
    },
    {
      id: 4,
      text: "EXPERIENCE",
    },
    {
      id: 5,
      text: "CONTACT",
    },
  ];

  return (
    <>
      <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center shadow-md bg-white fixed top-0 left-0 right-0">
        <div className=" flex items-center">
          <img
            className=" h-12 w-12 rounded-full bg-green-400"
            src={pic}
            alt=""
          />
          <div className=" flex flex-col justify-end py-2 px-2  ">
            <div className="text-2xl font-bold">
              <h1>
                SHRI<span className=" text-orange-800">KANT</span>
              </h1>
            </div>
            <p className=" text-sm">Web developer</p>
          </div>
        </div>

        <div>
          <ul className=" gap-6 font-medium  hidden md:flex">
            {/* {navItem} */}
            {items.map(({ id, text }) => (
              <li
                key={id}
                className=" hover:scale-105 duration-200 cursor-pointer"
              >
                <Link to={text} smooth={true} duration={500}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() => setMenu(!menu)} className=" md:hidden">
          {menu ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
        </div>
      </nav>

      <div>
        { menu &&
        <ul className="gap-8 font-medium flex-col flex justify-center h-svh md:hidden items-center">
          {items.map(({ id, text }) => (
            <li
              key={id}
              className=" hover:scale-105 cursor-pointer duration-200"
            >
              {
                (
                  <Link to={text} smooth={true} duration={500}>
                {text}
              </Link>
                )
              }
              
            </li>
          ))}
        </ul>
        }
      </div>
    </>
  );
};

export default Navbar;
