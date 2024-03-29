import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

const HeroForm = () => {
  return (
    <>
      {/* hero form  */}
      <article data-aos="fade-left" data-aos-duration="2000">
        {/* forms-center */}
        <div className="mt-12 grid place-items-center space-y-6 ">
          <div className="relative flex items-center">
            <BiUserCircle className="text-3xl absolute ml-2 text-white" />
            <input
              type="text"
              placeholder="Tell us your name"
              className="btn-width pr-[1rem] pl-12 bg-transparent placeholder:text-white border border-white p-2 rounded-md w-96 font-501 focus:outline-none text-white"
            />
          </div>
          <div className="relative flex items-center">
            <BiEnvelope className="absolute text-3xl ml-2 text-white" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="btn-width pr-[1rem] pl-12 bg-transparent placeholder:text-white border border-white p-2 rounded-md w-96 focus:outline-none font-501 text-white"
            />
          </div>
          {/* button  */}
        </div>
      </article>
      <div
        className="grid place-items-center mt-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <button className=" text-white btn-width2 w-96 md:w-96 bg-gradient-to-r from-darkGradient to-lightGradient rounded-full p-3 focus:outline-none">
          <p>Get Early Access</p>
        </button>
      </div>

      {/* members  */}
      <div className=" flex gap-[6rem] items-center justify-center mt-8">
        {/* members-center  */}
        <article className="flex mt-4 relative ">
          <div className=" absolute-left-4 rounded-[50%] w-8 h-8 bg-androidBlue grid place-items-center z-50">
            <p className=" text-white">G</p>
          </div>
          <div className="absolute left-6 rounded-[50%] w-8 h-8 bg-androidPurple grid place-items-center  z-40">
            <p className="text-white">O</p>
          </div>
          <div className=" absolute left-12 rounded-[50%] w-8 h-8 bg-androidBlue grid place-items-center z-30">
            <p className=" text-white left-60">U</p>
          </div>
          <div className="absolute left-[4.5rem] rounded-[50%] w-8 h-8 bg-androidPurple grid place-items-center z-20">
            <p className="text-white left-80">M</p>
          </div>
        </article>
        <article>
          <p className="text-white text-center mt-5">+57 people joined</p>
          {/* end of members-center  */}
        </article>
        {/*end of members  */}
      </div>
    </>
  );
};

export default HeroForm;
