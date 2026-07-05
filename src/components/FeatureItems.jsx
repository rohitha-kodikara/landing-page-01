import { BookOpen } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

const FeatureItems = () => {
  return (
    <div>
      <div className="flex flex-col py-10 md:py-4 ">
        <div className="md:px-18 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-sans font-semibold  text-blue-900 text-center leading-snug  ">
            Introduce <br className="hidden md:block" /> your product{" "}
            <span className="">
              {" "}
              quickly & <br /> effectively{" "}
            </span>
          </h2>
        </div>
        <p className="md:px-18 text-center text-lg text-blue-900 mt-10">
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </p>
        <button className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-3 px-16 rounded mt-12 self-center">
          Get Started
        </button>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row animate-slide-in-left">
        <img
          src="/public/chartpic.png"
          alt=""
          className="object-cover sm:object-contain sm:w-1/2 sm:h-1/2 md:pr-10 self-center "
        />
        <div className="sm:flex-col ">
          <h2 className="mt-10 leading-snug text-5xl text-blue-950 font-sans font-semibold">
            Light,fast & responsive
          </h2>
          <p className="mt-10 text-blue-900 text-center">
            This template is ready to use, so you don't need to change anything
            at a component level, unless you want to customize the default
            styling.
          </p>
          <div className="flex flex-row mt-8 justify-center gap-4">
            <div className="text-left">
              <BookOpen className="text-blue-500" size={35} />
              <h6 className="text-sm">Why ANTD</h6>
              <p className="text-blue-900 text-xs mt-4">
                Ant Design is a React UI library that has a lot of easy-to-use
                components for building elegant UI.
              </p>
            </div>
            <div className="text-left">
              <BookOpen className="text-blue-500" size={35} />
              <h6 className="text-sm">Why STYLED COMPONENTS?</h6>
              <p className="text-blue-900 text-xs mt-4">
                Styled components gives you total control over your components.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 animate-slide-in-right">
        <div className="sm:order-last flex sm:p-3 sm:flex ">
          <img
            src="/public/rocket.png"
            alt=""
            className="object-cover w-full h-auto "
          />
        </div>
        <div className="md:flex md:flex-col sm:w-1/2 ">
          <div className="">
            <h2 className="text-4xl font-bold text-blue-900 font-sans pb-5">
              Ready made sections
            </h2>{" "}
          </div>
          <div className="flex flex-col ">
            <p className="text-blue-800 text-left">
              Landy comes with a set of ready to use sections to help you easily
              create a landing page for your own brand, with all the content
              your startup desires. In order to replace any dummy elements
              (text, image, etc..) all you need to do is go to content folder
              and input your real content.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10  sm:gap-4 sm:flex-row justify-start md:items-center md:gap-x-8 ">
        <div className="sm:flex sm:flex-col sm:w-1/2 gap-y-4">
          <h2 className="text-4xl text-blue-900 font-bold">Contact Form</h2>
          <p className="text-blue-800 mt-8">
            The following form demonstrates form validation in action. Contact
            form component reduces the amount of time it is being re-rendered by
            the user as it embraces uncontrolled form validation to reduce any
            unnecessary performance penalty.
          </p>
        </div>
        <div className="flex sm:gap-8 sm:w-full pt-8 md:max-w-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FeatureItems;
