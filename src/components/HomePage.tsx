import React from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";
import Topimg from "./Topimg";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./Hero";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#f8edeb]">
      <Hero />
      <Landing />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-gray-700">
            Are you looking for affordable and Best professional house cleaning
            service?
          </p>
        </div>
        <Topimg />
        <div className="flex flex-cols justify-center items-center mt-1">
          <Link
            to="/services"
            className="btn bg-[#023047] text-white hover:text-gray-200 px-4 py-2 rounded-lg mb-6 text-2xl"
          >
            <div className="flex flex-cols justify-center items-center font-bold">
              Explore
              <FaArrowRight className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
