import React from "react";
import fullEllipse from "./images/Ellipse 37.svg";
import halfEllipse from "./images/Ellipse 39.svg";
import vector from "./images/Vector.svg";
import Star4 from "./images/Star 1.svg";

const HeroEllipse = () => {
  return (
    <article>
      {/* fullEllipse  */}
      <div className="non sm:hidden md:block absolute top-40 w-[120px]    lg:w-[170px] lg:translate-x-4 xl:translate-x-20 ">
        <img src={fullEllipse} alt="" className="" />
      </div>
      {/* fullEllipse  */}
      <div className="non absolute w-[90px] sm:hidden md:block top-2 right-48 animate-bounce large:right-56 xl:right-96 xl:top-[-1.8rem] ">
        <img src={fullEllipse} alt="" className="" />
      </div>
      {/* halfEllipse */}
      <div className=" non absolute sm:hidden md:block bottom-12 right-0 md: w-[170px] lg:w-[250px]">
        <img src={halfEllipse} alt="" className="" />
      </div>
      {/* vector  */}
      <div className=" non absolute sm:hidden md:hidden top-[28rem] right-[14rem] lg:block lg:w-[80] xl:right-[25rem]">
        <img src={vector} alt="" className="" />
      </div>
      {/* star  */}
      <div className=" animate-ping non absolute top-[10.5rem] right-[2rem] w-[20px] md:top-[9.5rem] lg:top-[11rem]  lg:right-[10.8rem] xl:right-96 ">
        <img src={Star4} alt="" className="w-1/1" />
      </div>
      {/* star  */}
      <div className=" non absolute md:bottom-0 md:right-[6rem] lg:right-[9rem]  sm:bottom-0 sm:right-8">
        <img src={Star4} alt="" className="w-1/1" />
      </div>
      {/* star */}
      <div className=" non absolute bottom-0 left-12 w-[30px] lg:left-24 mt-29">
        <img src={Star4} alt="" className="w-1/1" />
      </div>
      {/* star  */}
      <div className="animate-ping non absolute top-[.3rem] left-36 w-[15px] md:left-[13rem] lg:left-96 xl:left-[33rem] 2xl:left-96  ">
        <img src={Star4} alt="" className="w-1/1" />
      </div>
    </article>
  );
};

export default HeroEllipse;
