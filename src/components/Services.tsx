import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";

import aquariumImage from "../images/aquarium.jpg";
import floorImage from "../images/floor.jpg";
import carwashImage from "../images/carwash.png";
import watertankImage from "../images/watertank.jpg";
import sofaImage from "../images/sofa.jpg";
import sewageImage from "../images/sewage.jpg";
import septicImage from "../images/septic.jpg";
import pestcontrolImage from "../images/pestcontrol.jpg";
import officeImage from "../images/office.jpg";
import kitchenImage from "../images/kitchen.jpg";
import housekeepingImage from "../images/housekeeping.jpg";
import houseImage from "../images/house.jpg";
import bathroomImage from "../images/bathroom.png";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { image: aquariumImage, title: "Aquarium Cleaning" },
    { image: floorImage, title: "Floor Cleaning" },
    { image: carwashImage, title: "Car Wash" },
    { image: watertankImage, title: "Water Tank Cleaning" },
    { image: sofaImage, title: "Sofa Cleaning" },
    { image: sewageImage, title: "Sewage Tank Cleaning" },
    { image: septicImage, title: "Septic Tank Cleaning" },
    { image: pestcontrolImage, title: "Pest Control" },
    { image: officeImage, title: "Office Cleaning" },
    { image: kitchenImage, title: "Kitchen Cleaning" },
    { image: housekeepingImage, title: "Housekeeping" },
    { image: houseImage, title: "House Cleaning" },
    { image: bathroomImage, title: "Bathroom Cleaning" },
  ];

  return (
    <div className="bg-[#f8edeb]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-gray-700">
            Explore our wide range of professional cleaning services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
