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
    <div className="bg-[#e29578] shadow-md sticky top-0 z-10">
      <nav className="flex justify-between p-4">
        {/* <img
          src={logo}
          alt="RaCleaning Logo"
          className="h-10 cursor-pointer"
          onClick={handleHomeClick}
        /> */}
        LOGO HERE!
        <div className="flex space-x-4">
          <button className="group relative" onClick={handleHomeClick}>
            <span className="">Home</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button className="group relative" onClick={handleAboutClick}>
            <span className="">About</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button className="group relative" onClick={handleServicesClick}>
            <span className="">Services</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button className="group relative" onClick={handleContactClick}>
            <span className="">Contact</span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button
            className="group relative"
            onClick={handleServicePartnerClick}
          >
            <span className="">Service Partner</span>
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
