import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 sm:px-8 lg:px-24">
      <div className="bg-white max-w-4xl w-full rounded-lg  p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Feel free to drop us a message for any inquiries or assistance. We'd
          love to help you out!
        </p>

        <form action="#" method="POST" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#ffc857] focus:border-transparent text-gray-900"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#ffc857] focus:border-transparent text-gray-900"
                placeholder="Your Phone Number"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#ffc857] focus:border-transparent text-gray-900"
              placeholder="Subject"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#ffc857] focus:border-transparent text-gray-900"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ffc857] text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ffdb70] transition-colors duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
