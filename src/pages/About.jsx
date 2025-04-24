import React from 'react';
import about from "/Group 4.png"
const About = () => {
  return (
    <section id='about' className="flex flex-col-reverse items-center justify-start gap-2 mt-0 bg-white sm:flex sm:flex-col md:flex-row">

      <div className="px-8 space-y-5 md:w-1/2 sm:px-24 ">
        <h2 className="pt-12 text-green-800 text-7xl font-lalezar">About Us</h2>
        <h3 className="text-2xl leading-loose text-green-900 font-poppins">
          Welcome to FreshFruitWala – Bringing Farm-Fresh Fruits to Your Doorstep!
        </h3>
        <p className="text-xl leading-loose text-gray-600">
          At FreshFruitWala, we believe in delivering the freshest, highest-quality fruits
          directly from our farms to your home. Our mission is to connect consumers with
          natural, pesticide-free, and organic fruits, ensuring health and freshness in every bite.
        </p>
        <button className="px-10 py-5 mt-5 text-2xl font-semibold text-green-900 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500">
          Download App
        </button>
      </div>
      
      
      <div className="relative md:w-1/2 mt- md:mt-0">
        <img
          src={about}
          alt="Fresh Fruits"
          className="object-cover w-full "
        />
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>
    </section>
  );
};

export default About;
