import React from "react";
import star from "./images/Star 1.svg";
import ellipse from "./images/Ellipse 37.svg";
import blueStar from "./images/Highlight 2.svg";

const AccessStars = () => {
  return (
    <>
      {/* ellipses & star  */}
      <div className=" animate-ping non absolute sm:hidden md:block w-[10%] top-[-5rem] left-[4rem] xl:w-[8%]">
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className="non absolute sm:hidden md:block w-[30px] top-[-3rem] left-[25rem] lg:left-[30rem] large:left-[40rem]">
        <img src={blueStar} alt="ellipse" />
      </div>
      <div className="non absolute sm:hidden md:block w-[30px] top-[-7rem] right-[4rem] ">
        <img src={blueStar} alt="ellipse" />
      </div>
      <div className="non absolute bottom-0 right-8 w-[30px] ">
        <img src={star} alt="star" />
      </div>
      {/* end of ellipse & star  */}
    </>
  );
};

export default AccessStars;
