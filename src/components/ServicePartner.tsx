import React, { useState } from "react";

const ServicePartner: React.FC = () => {
  const [technicianName, setTechnicianName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [altContactNumber, setAltContactNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [teamMember, setTeamMember] = useState<string>("");
  const [workExperience, setWorkExperience] = useState<string>("");
  const [services, setServices] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Technician Name: ${technicianName}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Alternative Contact Number: ${altContactNumber}`);
    console.log(`Email: ${email}`);
    console.log(`City: ${city}`);
    console.log(`Business Name: ${businessName}`);
    console.log(`Team Member: ${teamMember}`);
    console.log(`Work Experience: ${workExperience}`);
    console.log(`Services: ${services}`);
    console.log(`Address: ${address}`);
  };

  return (
    <div className="flex justify-center py-8 bg-[#f8edeb] px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row rounded-lg p-8 w-full">
          <div className="rounded-lg shadow-lg mx-2 p-6 bg-white w-full lg:w-[40rem]">
            <h1 className="text-3xl font-bold mb-8">
              Become A Service Partner
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="technicianName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Technician Name
                  </label>
                  <input
                    type="text"
                    id="technicianName"
                    value={technicianName}
                    onChange={(e) => setTechnicianName(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Technician Name"
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
                    htmlFor="altContactNumber"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Alternative Contact Number
                  </label>
                  <input
                    type="tel"
                    id="altContactNumber"
                    value={altContactNumber}
                    onChange={(e) => setAltContactNumber(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Alternative Contact Number"
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
                    placeholder="Please Enter Email"
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
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Business Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="teamMember"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Team Member
                  </label>
                  <input
                    type="text"
                    id="teamMember"
                    value={teamMember}
                    onChange={(e) => setTeamMember(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Team Member"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="workExperience"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Work Experience
                  </label>
                  <input
                    type="text"
                    id="workExperience"
                    value={workExperience}
                    onChange={(e) => setWorkExperience(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                    placeholder="Please Enter Work Experience"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-900"
                >
                  Select Services
                </label>
                <input
                  type="text"
                  id="services"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-600 rounded-md"
                  placeholder="Please Enter Services"
                  required
                />
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
                  placeholder="Please Enter Local Address"
                  required
                />
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

export default ServicePartner;
