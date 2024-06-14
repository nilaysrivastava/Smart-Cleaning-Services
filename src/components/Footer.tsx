import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#023047] text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h2 className="text-xl font-bold">About Company</h2>
          <p>
            Smart Cleaning Services, the leading home Cleaning market network...
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Company</h2>
          <ul>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Service Partner
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Services</h2>
          <ul>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Aquarium Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Bathroom Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Car Wash
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Carpet Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Floor Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                House Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Housekeeping
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Kitchen Cleaning
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Services</h2>
          <ul>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Office Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Pest Control
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Septic Tank
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Sewage Tank
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Sofa Cleaning
              </button>
            </li>
            <li>
              <button
                className=" "
                onClick={() => (window.location.href = "/services")}
              >
                Water Tank
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
