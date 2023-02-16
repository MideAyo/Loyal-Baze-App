import React from "react";
import home from "./images/home.svg";
import phone from "./images/phone.svg.svg";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="p-12 lg:container lg:mx-auto">
        <div className="border-t border-slate-400 "></div>
        {/* footer-center  */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" md:flex md:justify-between gap-4 "
        >
          {/* address  */}
          <article className=" flex mt-8 gap-3">
            {/* icon  */}
            <div>
              <img src={home} alt="home" />
            </div>
            {/* end of icon  */}
            {/* text  */}
            <div className="">
              <p className="text-white max-w-xs text-[1rem] font-sans">
                2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway,
                Lagos, Nigeria.
              </p>
            </div>
            {/* end of text  */}
          </article>
          {/* end of address  */}

          {/* info  */}
          <article className="mt-8">
            <p className="text-white font-400 text-[1.25rem] ">
              Loyalblaze is almost here{" "}
            </p>
          </article>
          {/*end of info  */}

          {/* phone  */}
          <article className="mt-8">
            <div className="flex gap-3 items-center">
              {/* img  */}
              <div>
                <img src={phone} alt="phone" />
              </div>
              {/* text  */}
              <div className="items-start">
                <p className="text-white text-[1.125rem] font-400">
                  +234 903 618 9485
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* end of footer center  */}
      </div>
    </footer>
  );
};

export default Footer;
