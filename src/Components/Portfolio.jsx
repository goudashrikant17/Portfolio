import React from "react";
import mongoDb from "../../public/mongoDb.webp";
import express from "../../public/expressjs-logo.webp";
import react from "../../public/React-icon.svg";
import nodejs from "../../public/node-js.webp";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      img: mongoDb,
      name: "MongoDb",
    },
    {
      id: 2,
      img: express,
      name: "Express",
    },
    {
      id: 3,
      img: react,
      name: "React",
    },
    {
      id: 4,
      img: nodejs,
      name: "React",
    },
    {
      id: 4,
      img: nodejs,
      name: "React",
    },
    {
      id: 4,
      img: nodejs,
      name: "React",
    },
    {
      id: 4,
      img: nodejs,
      name: "React",
    },
    {
      id: 4,
      img: nodejs,
      name: "React",
    },
  ];

  return (
    <>
      <div name="PORTFOLIO" className="PORTFOLIO max-w-screen-2xl container mx-auto px-4 md:px-20 py-20  bg-green-400">
        <div>
          <h1 className=" text-3xl font-bold">PortFolio</h1>
          <p className=" underline text-lg font-semibold py-4">
            Featured Projects
          </p>

          <div className=" gap-10 md:flex-row md:flex-wrap flex flex-col justify-center items-center mt-8">
            {cardItems.map(({ id, img, name }) => (
              <div
                className=" md:w-1/5 border-[2px] rounded-lg shadow-2xl hover:scale-110 duration-200 cursor-pointer"
                key={id}
              >
                <div className=" px-4 py-8 ">
                  <img
                    className=" w-[65px] h-[65px] border-[2px] rounded-full p-2  "
                    src={img}
                    alt=""
                  />
                  <p className=" text-lg font-bold my-2">{name}</p>
                  <span className=" text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, maiores.
                  </span>

                  <div className=" mt-4 space-y-3 ">
                    <button type="submit" className=" hover:bg-blue-700 bg-blue-500 px-4 py-1 rounded-md text-white mr-3">Video</button>
                    <button type="submit" className=" hover:bg-green-700 bg-green-500 px-4 py-1 rounded-md text-white">Source Code</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
