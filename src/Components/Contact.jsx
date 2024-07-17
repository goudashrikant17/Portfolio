import React from "react";
import { useForm } from "react-hook-form";
import axios  from 'axios'
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      message:data.message
    }

    try{
      await  axios.post("https://getform.io/f/aejyldxb", userInfo);
      toast.success("Your message has been send")
    }
    catch(err){
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <form
        // action="https://getform.io/f/aejyldxb"
        // method="POST"
        onSubmit={handleSubmit(onSubmit)}
        name="CONTACT"
        className=" max-w-screen-2xl container px-4 md:px-20 py-20 mb-8"
      >
        <div className=" my-4">
          <h1 className=" text-2xl font-bold my-4">Contact me</h1>
          <p className=" font-bold">
            please fill out the form below to contact me
          </p>
        </div>

        <div className=" flex justify-center mt-10">
          <div className="contact-box bg-gray-400 w-fit p-4 py-8 rounded-md">
            <p className=" text-xl font-bold">Send Your Message</p>
            <div className=" m-2">
              <p>Full Name</p>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                className=" border-2 pr-20 h-8 p-2 rounded-xl outline-none"
                placeholder="Enter your full name"
              />
              {errors.name && <span>this field is required</span>}
            </div>
            <div className=" m-2">
              <p>Email Address</p>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className=" border-2 pr-20 h-8 p-2 rounded-xl outline-none"
                placeholder="Enter your full name"
              />
              {errors.email && <span>this field is required</span>}
            </div>
            <div className=" m-2">
              <p>Message</p>
              <textarea
                {...register("message", { required: true })}
                name="message"
                className=" border-2 pr-24 h-28 p-2 rounded-xl outline-none"
                placeholder="Type your message here"
              ></textarea>
              {errors.message && <span>this field is required</span>}
            </div>

            <div>
              <button
                type="submit"
                className=" bg-black text-white py-1 px-3 rounded-md ml-3 cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
