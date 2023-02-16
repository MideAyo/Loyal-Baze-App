import React from "react";
import HeroForm from "./HeroForm";
import HeroEllipse from "./HeroEllipse";

const Hero = () => {
  return (
    <section>
      <div className="relative mx-auto">
        <HeroEllipse />
        {/* hero-info  */}
        <article
          className="md:pt-16 large:pt-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {/* hero-heading  */}
          <div className="md:mt-8 xs:mt-7">
            <h3 className="textie pad sm:p-4 leading-12 text-white font-sans text-[2.5rem] capitalize font-900 text-center md:text-5xl md:max-w-3xl mx-auto ">
              Turn your best customers into{" "}
              <span className="text-androidPurple">Loyal fans</span>
            </h3>
            {/* hero-text  */}
            <p className="pee pad sm:p-4 text-white font-400 text-lg text-center mt-8 md:max-w-2xl mx-auto md:text-xl">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
          </div>
        </article>
        {/*end of hero-info  */}
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
