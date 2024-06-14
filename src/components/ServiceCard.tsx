import React from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/formpage");
  };
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-10 hover:shadow-1xl bg-[#fae1dd]"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex items-center justify-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
