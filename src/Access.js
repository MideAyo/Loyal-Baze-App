import React from "react";
import star from "./images/Star 1.svg";
import Line from "./images/Line 6.svg";
import AccessStars from "./AccessStars";
import AccessForm from "./AccessForm";

const Access = () => {
  return (
    <section className="relative">
      <AccessStars />
      {/* Priority Access  */}
      <div className=" relative marg sm:mt-36 md:mt-48  lg:mx-auto mx-auto lg:container lg:flex lg:justify-between gap-12 xl:pl-32 xl:gap-4">
        {/* Access-center  */}
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="self-center relative"
        >
          {/* star svgs  */}
          <div className=" non w-[18px] absolute top-[-3rem] right-[11rem] md:right-[15rem] lg:right-[5rem] large:right-[14rem]">
            <img src={star} alt="star" />
          </div>
          <div className=" non w-[80px] absolute bottom-[-2rem] right-0">
            <img src={star} alt="star" />
          </div>
          {/* end of star svgs  */}

          {/* Access-info  */}
          <div>
            <article className="relative">
              <h3 className="fsize1 text-white h1 text-4xl md:text-5xl font-900 text-center lg:container  lg:text-left pl-8">
                Priority Access
              </h3>
              <div className="non mt-4 mx-auto w-[150px] large:absolute large:translate-x-32 ">
                <img src={Line} alt="line" className="mx-auto " />
              </div>
            </article>
          </div>
          <p className="p-8 text-lg text-white sm:max-w-2xl text-center mx-auto lg:mx-0 lg:text-left  md:text-xl md:max-w-4xl lg:max-w-xl large:mt-16 ">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
        </div>
        <AccessForm />
      </div>
    </section>
  );
};

export default Access;
