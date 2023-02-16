import React from "react";
import logo from "./images/logo.svg";

const Navbar = () => {
  return (
    <section>
      <nav className="sm:shadow-none xs:shadow-2xl md:shadow-none">
        {/* nav-center  */}
        <div className="p-7 gapp flex justify-between items-center md:container mx-auto ">
          <div className="w-[40%] marj  mt-[0] md: mt-[0]  large:mt-[0] ">
            <img src={logo} alt="logo" />
          </div>
          {/* btn  */}
          <div className="end self-end">
            <button className="  p-[.1rem] bg-gradient-to-r from-darkGradient to-lightGradient rounded-full">
              <span className="nav-btn fsize  block text-white px-9 py-3 rounded-full bg-[#121B27]">
                Get Priority Access
              </span>
            </button>
          </div>
        </div>
        {/* end of nav-center  */}
      </nav>
    </section>
  );
};

export default Navbar;
