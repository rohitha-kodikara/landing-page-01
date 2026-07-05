import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen sm:flex-row ">
      {/* <div>1</div>
      <div>2</div> */}

      <img
        src="/public/pic2.png"
        alt="Landing"
        className="w-full h-auto object-cover sm:order-3 sm:w-1/2"
      />
      <div className="flex flex-col gap-6 md:gap-8 sm:order-first">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold leading-snug">
            Landing page <br className="md:block" />
            template for <br className="md:block" /> developers &
            <br className="md:block" /> startups
          </h2>
        </div>
        <div className="text-lg text-center max-w-xl sm:order-2 sm:text-left   sm:items-start">
          <p className="text-blue-900 font-normal">
            Beautifully designed templates using React.js, ant design and
            styled-components! Save weeks of time and build your landing page in
            minutes.
          </p>
        </div>

        <div className="flex gap-4 flex-row justify-center md:justify-start sm:order-last  sm:mt-8 sm:flex-row   sm:items-start sm:text-left">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Explore
          </button>
          <button className="bg-transparent text-blue-500 border border-blue-500 px-6 py-3 rounded-md hover:bg-blue-100 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
