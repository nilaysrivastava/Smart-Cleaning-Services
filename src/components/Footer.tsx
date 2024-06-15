import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#023047] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
        <div className="pl-4 md:pl-10 flex justify-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">About Company</h3>
            <p className="text-sm">
              Smart Cleaning Services, the leading home cleaning market network,
              connects homeowners with quality home improvement, cleaning
              professionals to take care of all your home cleaning needs.
            </p>
            <div className="mt-4">
              <div className="flex items-center mb-2 py-1">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+917459917582" className="text-sm">
                  +91 74599 17582
                </a>
              </div>
              <div className="flex items-center mb-2 py-1">
                <MdEmail className="mr-2" />
                <a href="mailto:email@example.com" className="text-sm">
                  Email
                </a>
              </div>
              <div className="flex items-center mb-2 py-1">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-sm">
                  615 /702 Vrindavan Yojna Lucknow
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-4 md:pl-10 flex justify-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-2">
              <li>
                <button onClick={() => (window.location.href = "/home")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/about")}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/contact")}>
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "/service-partner")}
                >
                  Service Partner
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-4 md:pl-10 flex justify-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <ul className="text-sm space-y-2">
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Aquarium Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Bathroom Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Car Wash
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Carpet Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Floor Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  House Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Housekeeping
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Kitchen Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Water Tank Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Sofa Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Sewage Tank Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Septic Tank Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Pest Control
                </button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "/services")}>
                  Office Cleaning
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-4 md:pl-10 flex justify-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-row space-x-6 mt-2 md:mt-8 text-3xl">
              <a href="#" className="text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 md:mt-12" />

      <div className="text-center text-sm mt-4">
        © 2024 By Smart Cleaning, Designed and Developed by DMD Solutions
      </div>
    </footer>
  );
};

export default Footer;
