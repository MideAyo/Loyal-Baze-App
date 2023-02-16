import React from "react";

const AccessForm = () => {
  return (
    <>
      {/* Access form  */}
      <div
        className="sm:p-12 max-w-xl mx-auto p-4  lg:w-[80%] lg:mx-0 large:w-[90%] xl:w-[100%]  "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* form-center  */}
        <article className="bg-darkColor  rounded-[1.25rem]">
          <div className=" p-8 mx-4">
            <h1 className="formSize text-[1.5rem] text-white font-700">
              Book a Consultation{" "}
            </h1>

            {/* form  */}
            <form className="mt-4 flex flex-col space-y-5">
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white font-400"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <select
                  id="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                >
                  <option value="Select Country">Select Country</option>
                  <option value="Nigeria" className="text-slate-600">
                    Nigeria
                  </option>
                  <option value="Ghana" className="text-slate-600">
                    Ghana
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    South Africa
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    United States
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    Finland
                  </option>
                </select>
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Drop A Message..."
                  className=" pb-28 pt-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white "
                />
              </div>
              {/* form-button  */}
              <button className="btn-width2 w-[98%] bg-gradient-to-r from-darkGradient to-lightGradient rounded-full p-3 focus:outline-none ">
                <p className="text-white fsize">Send Request</p>
              </button>
            </form>
            {/* end of form  */}
          </div>
        </article>
      </div>
      {/* end of Access form  */}
    </>
  );
};

export default AccessForm;
