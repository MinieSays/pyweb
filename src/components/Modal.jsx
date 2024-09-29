import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ showModal, toggleModal }) => {
  const [showBackground, setShowBackground] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    service: "",
  });

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setShowBackground(true), 50);
    } else {
      setShowBackground(false);
    }
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_42ic5hi", 
        "template_fyl274n", 
        formData,
        "7wxX0U7TD5w60Xlp_"
      )
      .then(
        (result) => {
          toast.success(
            "We've successfully received your message and will respond to you within 48 hours.",
            {
              duration: 7000,
            }
          );
          toggleModal();
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <>
      <Toaster />
      {showModal && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center transition-transform duration-700 ease-out ${
            showBackground ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-lg mx-4 p-8 relative shadow-xl transition-all duration-300 ease-in-out transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
              Let’s Chat Over Coffee
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                      handleChange({
                        target: {
                          name: e.target.name,
                          value: onlyNumbers,
                        },
                      });
                    }}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Best Time To Call
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>

              <fieldset className="mb-4">
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service
                </legend>
                <div className="grid grid-cols-2 gap-4">
                  {["Web Design", "SEO", "Marketing", "Social Media"].map(
                    (service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {service}
                      </label>
                    )
                  )}
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-500 font-semibold rounded-md hover:bg-yellow-600 transition duration-300 text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
