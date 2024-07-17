import React from "react";
import HTML from "../../public/HTML.webp";
import CSS from "../../public/CSS.svg";
import Tailwind from "../../public/Tailwind.svg";
import JavaScript from "../../public/JavaScript.webp";
import Reactlogo from "../../public/React-icon.svg";
import MongoDb from "../../public/mongoDb.webp";

const Experience = () => {
  const Tools = [
    {
      id: 1,
      img: HTML,
      name: "HTML",
    },
    {
      id: 2,
      img: CSS,
      name: "CSS",
    },
    {
      id: 3,
      img: Tailwind,
      name: "Tailwind Css",
    },
    {
      id: 4,
      img: JavaScript,
      name: "JacaScript",
    },
    {
      id: 5,
      img: Reactlogo,
      name: "React",
    },
    {
      id: 6,
      img: MongoDb,
      name: "Java",
    },
    {
      id: 7,
      img: Tailwind,
      name: "MongoDb",
    },
  ];

  return (
    <>
      <div name="EXPERIENCE" className=" max-w-screen-2xl px-4 md:px-20 container py-20">
        <div className="text">
          <h1 className=" text-2xl md:text-3xl font-bold py-4">Experience</h1>
          <p className=" font-bold">
            I've more than 1 year experience in below technologies.
          </p>
        </div>

        <div className="tools grid grid-cols-2 md:grid-cols-5 place-items-center space-x-3 mt-10">
                {
                    Tools.map(({id,img,name}) => (
                        <div key={id} className=" grid grid-cols-1 place-items-center border-[2px] shadow-lg w-fit rounded-full p-4 my-4 hover:scale-110 duration-200" >
                            <img className="h-[100px] w-[140px] mb-4" src={img} alt="" />
                            <p className=" text-lg font-bold">{name}</p>
                        </div>
                    ))
                }
        </div>

       
      </div>
    </>
  );
};

export default Experience;


{/* <div className="Tools space-y-5 space-x-5 grid md:grid-cols-6 mt-10">
{Tools.map(({ id, img, name }) => (
  <div
    className=" flex flex-col justify-center items-center"
    key={id}
  >
    <img
      className=" h-[150px] w-[150px] border-[2px] rounded-full p-5"
      src={img}
      alt=""
    />
    <p className=" text-lg font-bold">{name}</p>
  </div>
))}
</div> */}