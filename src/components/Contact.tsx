import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className="bg-[#f8edeb] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row rounded-lg p-8 w-full lg:w-2/3">
            <div className="rounded-lg shadow-lg mx-2 p-6 bg-white w-full">
              <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                      placeholder="Please Enter Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                      placeholder="Please Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                      placeholder="Please Enter Your Phone Number"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                      placeholder="Please Enter Your Message"
                      rows={4}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#023047] text-white py-2 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8 p-8 pt-20 flex justify-center lg:justify-start">
            <div className="bg-[#023047] p-4 pb-6 rounded-lg w-full lg:w-[20rem]">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Send Your Message
              </h2>
              <p className="text-gray-200 mb-4">
                Drop us a message for any query. Please feel free to get in
                touch using the form below. We'd love to hear your thoughts &
                answer any questions you may have!
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Location:</strong> 615 /702 Vrindavan Yojna <br />{" "}
                Lucknow
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+917459917582"
                  className="text-[#8ecae6] group relative"
                >
                  +91 74599 17582
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#8ecae6] transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
                </a>
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:email"
                  className="text-[#8ecae6] group relative"
                >
                  Email
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#8ecae6] transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col justify-between items-center lg:flex-row lg:space-x-8 bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8 lg:mb-0">
            <FaMapMarkerAlt className="text-4xl text-[#023047] mb-2" />
            <h2 className="text-lg font-bold text-[#023047] mb-2">LOCATION</h2>
            <p className="text-gray-800">
              615 /702 Vrindavan Yojna <br /> Lucknow
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8 lg:mb-0">
            <FaPhoneAlt className="text-4xl text-[#023047] mb-2" />
            <h2 className="text-lg font-bold text-[#023047] mb-2">
              QUICK CONTACT
            </h2>
            <p className="text-gray-800 mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917459917582"
                className="text-gray-800 group relative"
              >
                +91 74599 17582
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#8ecae6] transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
              </a>
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:email" className="text-gray-800 group relative">
                Email
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#8ecae6] transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <FaClock className="text-4xl text-[#023047] mb-2" />
            <h2 className="text-lg font-bold text-[#023047] mb-2">
              OFFICE HOURS
            </h2>
            <p className="text-gray-800 mb-2">Mon - Sat: 9:00 am to 7:00 pm</p>
            <p className="text-gray-800">Sunday Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
