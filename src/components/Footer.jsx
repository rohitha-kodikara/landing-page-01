import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-200 mt-12 px-12 md:px-10 grid grid-cols-2 md:grid-cols-3  gap-10 items-start pb-8">
      <div className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-blue-900 font-sans">Contact</h3>
        <span>Tell Us Everything</span>
        <span>Do you have any question ?</span>
        <span>Feel free to reach out.</span>

        <span className="text-2xl">Let's Chat</span>
      </div>
      <div className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-blue-900 font-sans">Policy</h3>
        <span>Application Security</span>
        <span>Software Principles</span>
      </div>

      <div className="flex flex-col gap-2 pt-5">
        <span>Support Center</span>
        <span>Customer Suport</span>
      </div>

      <div className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-blue-900 font-sans">Address</h3>
        <span>Rancho Santa Margarita</span>
        <span>2131 Elk Street</span>
        <span>California</span>
      </div>
      <div className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-blue-900 font-sans">Company</h3>
        <span>About</span>
        <span>Blog</span>
        <span>Press</span>
        <span>Careers & Culture</span>
      </div>

      <div className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-blue-900 font-sans">Language</h3>
        <span>America</span>
        <span>Austrailia</span>
      </div>
    </div>
  );
};

export default Footer;
