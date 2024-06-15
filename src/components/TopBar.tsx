import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#023047] w-full text-white p-2 flex flex-col sm:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left mb-2 sm:mb-0">
        <span className="mb-1 sm:mb-0">
          For Enquiries: <FaPhoneAlt className="inline-block" /> +917459917582
        </span>
        {/* <span className="sm:inline-block mx-2">|</span> */}
        <span className="mb-1 sm:mb-0">&nbsp; Smart Cleaning Services </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
        <FaMapMarkerAlt className="mr-1 sm:mr-2" />
        <span>615 /702 Vrindavan Yojna Lucknow</span>
      </div>
    </div>
  );
};

export default TopBar;
