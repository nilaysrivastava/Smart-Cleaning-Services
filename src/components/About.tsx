// src/components/About.tsx

import React from "react";
import Slider from "react-slick";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaSyncAlt,
  FaClock,
  FaHandHoldingUsd,
} from "react-icons/fa";
import a1 from "../images/a1.jpeg";
import a2 from "../images/a2.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-[#f8edeb]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold m-4 text-center">Our Company</h1>
        <div className="mb-8 rounded-lg shadow-lg p-8 mt-4 bg-[#fae1dd]">
          <p className="text-black mb-4">
            Like all good things, the idea of Smart Cleaning Services was born
            out of necessity. When you need help with small but important
            household chores, isn’t it practically impossible to find trusted
            providers, who deliver consistently impeccable service, on time?
            Yes, that happened with us too. All the time. After trying dozens of
            other services which were just glorified directories, we decided to
            build Smart Cleaning Services. Smart Cleaning Services is the most
            convenient and hassle free way to get your household work done. We
            aim to aid in solving all your household problems with efficiency,
            ease and most importantly, a personal touch.
          </p>
          <p className="text-black mb-4">
            As our name suggests, we are here to help. We are here to build the
            best on-demand services company in the world.
          </p>
          <p className="text-black mb-4">
            And now, we simply can’t wait to be of help to you.{" "}
            <p className="text-black mb-4 pt-2">
              <FaPhoneAlt className="inline-block mr-2" />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917459917582"
                className="text-[#023047] group relative"
              >
                +91 74599 17582
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#023047] transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
              </a>
            </p>
          </p>
        </div>
        <div className="flex justify-center mb-8 h-96 rounded-lg">
          <img src={a1} alt="" className="w-1/2 h-auto mx-2 rounded-lg" />
          <img src={a2} alt="" className="w-1/2 h-auto mx-2 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="mr-4 text-[#023047]">
              <FaCheckCircle className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Consistency</h2>
              <p className="text-gray-900">
                We constantly strive to deliver a consistent level of quality in
                our service to ensure a seamless experience for our customers.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="mr-4 text-[#023047]">
              <FaSyncAlt className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Adaptability</h2>
              <p className="text-gray-900">
                Customers are our forefront and with our divergent approach we
                experiment and arrive at potential solutions to cater their
                needs.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="mr-4 text-[#023047]">
              <FaClock className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Timeliness</h2>
              <p className="text-gray-900">
                We perceive our clients' expectations and attempt to boost each
                side of timeliness to urge for a powerful customer relationship.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="mr-4 text-[#023047]">
              <FaHandHoldingUsd className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Nimble & Flexible</h2>
              <p className="text-gray-900">
                We adapt to versatile and proceduralized workflows to deliver
                end-to-end client service and to satisfy their expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fae1dd] rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl">Testimonials</h2>
            <h2 className="text-4xl font-bold mb-2">
              Words From Our Customers
            </h2>
          </div>
          <div className="mb-8">
            <Slider {...settings}>
              <div className="text-center p-6">
                <p className="text-gray-900 mb-4">
                  “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tristique.”
                </p>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Maria Jones"
                  className="mx-auto rounded-full mb-2"
                />
                <p className="text-gray-900">
                  <strong>Maria Jones</strong>
                  <br />
                  CEO, Co-Founder, XYZ Inc.
                </p>
              </div>
              <div className="text-center p-6">
                <p className="text-gray-900 mb-4">
                  “Another testimonial goes here. Donec facilisis quam ut purus
                  rutrum lobortis. Donec vitae odio quis nisl dapibus
                  malesuada.”
                </p>
                <img
                  src="https://via.placeholder.com/100"
                  alt="John Doe"
                  className="mx-auto rounded-full mb-2"
                />
                <p className="text-gray-900">
                  <strong>John Doe</strong>
                  <br />
                  CTO, Co-Founder, ABC Inc.
                </p>
              </div>
              <div className="text-center p-6">
                <p className="text-gray-900 mb-4">
                  “More testimonials can be added here. Donec facilisis quam ut
                  purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                  malesuada.”
                </p>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Jane Smith"
                  className="mx-auto rounded-full mb-2"
                />
                <p className="text-gray-900">
                  <strong>Jane Smith</strong>
                  <br />
                  COO, Co-Founder, DEF Inc.
                </p>
              </div>
              {/* Add more testimonials as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
