import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full  space-y-6  bg-white rounded-lg flex flex-col justify-center">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1 "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="bg-blue-200 w-full px-4 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          className="bg-blue-200 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          className="bg-blue-200 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="self-end w-1/2 bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
