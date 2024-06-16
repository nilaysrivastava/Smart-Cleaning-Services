import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FormPage: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  const [name, setName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`City: ${city}`);
    console.log(`Date: ${date}`);
    console.log(`Address: ${address}`);
  };

  const services = [
    "Aquarium Cleaning",
    "Bathroom Cleaning",
    "Car Wash",
    "Carpet Cleaning",
    "Floor Cleaning",
    "House Cleaning",
    "Housekeeping",
    "Kitchen Cleaning",
    "Office Cleaning",
    "Pest Control",
    "Septic Tank",
    "Sewage Tank",
    "Sofa Cleaning",
    "Water Tank",
  ];

  return (
    <div className="flex justify-center py-8 bg-[#f8edeb] px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row rounded-lg p-8 w-full">
          <div className="rounded-lg shadow-lg mx-2 p-6 bg-white w-full lg:w-[40rem]">
            <h1 className="text-3xl font-bold mb-8">Booking Form</h1>
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
                    placeholder="Please Enter Client Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Contact Number"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    required
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Lucknow">Lucknow</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Date for Booking
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-900"
                >
                  Select Service
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => console.log(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                  required
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {services.map((service: string) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                  placeholder="Please Enter Address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#023047] text-white py-2 rounded-md"
              >
                Book Now!
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
              Drop us a message for any query. Please feel free to get in touch
              using the form below. We'd love to hear your thoughts & answer any
              questions you may have!
            </p>
            <p className="text-gray-200 mb-4">
              <strong>Location:</strong> 615 /702 Vrindavan Yojna Lucknow
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
              <a href="mailto:email" className="text-[#8ecae6] group relative">
                Email
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#8ecae6] transition-all duration-150 group-hover:w-full group-hover:left-0 "></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
