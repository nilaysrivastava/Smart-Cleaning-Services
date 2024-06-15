import React from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../images/logo.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicePartnerClick = () => {
    navigate("/service-partner");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  const handleBookNowClick = () => {
    navigate("/formpage");
  };

  return (
    <div className="bg-[#e29578] shadow-md sticky top-0 z-10 text-black">
      <nav className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center justify-center w-full sm:w-auto">
          <span
            className="text-white font-bold text-xl cursor-pointer"
            onClick={handleHomeClick}
          >
            LOGO HERE!
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 sm:mt-0 w-full sm:flex sm:justify-end sm:w-auto">
          <button
            className="group relative text-black font-bold"
            onClick={handleHomeClick}
          >
            <span>Home</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="group relative text-black font-bold"
            onClick={handleAboutClick}
          >
            <span>About</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="group relative text-black font-bold"
            onClick={handleServicesClick}
          >
            <span>Services</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="group relative text-black font-bold"
            onClick={handleContactClick}
          >
            <span>Contact</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="group relative text-black font-bold"
            onClick={handleServicePartnerClick}
          >
            <span>Service Partner</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="bg-[#023047] text-white rounded-lg p-2 cursor-pointer hover:text-gray-200"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
