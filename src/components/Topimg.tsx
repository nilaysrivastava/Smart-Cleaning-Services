import React from "react";
import t1 from "../images/t1.jpeg";
import t2 from "../images/t2.jpeg";
import t3 from "../images/t3.jpeg";

const Topimg: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="relative image-container">
          <img
            src={t1}
            alt="Smart Cleaning Services - Example 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-lg"></div>
          <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                Professional Office Cleaning
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg leading-snug">
                Keep your office environment spotless and productive with our
                expert cleaning services.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative image-container">
          <img
            src={t2}
            alt="Smart Cleaning Services - Example 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-lg"></div>
          <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                Residential Deep Cleaning
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg leading-snug">
                Experience a clean home environment with our residential
                cleaning services.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative image-container">
          <img
            src={t3}
            alt="Smart Cleaning Services - Example 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-lg"></div>
          <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                Commercial Floor Care
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg leading-snug">
                Enhance the appearance and safety of your commercial space with
                our professional floor care solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4 text-lg sm:text-3xl font-bold ">
        And much more...
      </div>
    </div>
  );
};

export default Topimg;
