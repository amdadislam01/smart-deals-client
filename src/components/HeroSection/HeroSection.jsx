import React from "react";
import { FaSearch } from "react-icons/fa";
import bghero1 from '../../assets/bg-hero-left.png'
import bghero2 from '../../assets/bg-hero-right.png'
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-r from-sky-100 via-white to-[#E0F8F5]">
      <img
        src={bghero1}
        alt="left curve"
        className="absolute left-0 top-0 h-full w-auto object-contain opacity-90 pointer-events-none"
      />

      <img
        src={bghero2}
        alt="right curve"
        className="absolute right-0 top-0 h-full w-auto object-contain opacity-90 pointer-events-none"
      />

      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Deal Your <span className="text-[#34699A]">Products</span>
          <br /> In A <span className="text-[#34699A]">Smart Way!</span>
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          SmartDeals helps you sell, resell, and shop from trusted local sellers —
          all in one place!
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white shadow-lg rounded-full px-4 w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for Products, Categories..."
              className="flex-1 py-3 px-3 outline-none text-gray-700 rounded-full"
            />
            <button className="bg-[#34699A] text-white p-3 rounded-full hover:bg-[#34699A] transition">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link to={'/allproduct'} className="bg-[#34699A] text-white font-medium px-6 py-2 rounded-lg shadow hover:border hover:border-[#34699A] hover:bg-transparent hover:text-[#34699A] transition cursor-pointer">
            Watch All Products
          </Link>
          <Link to={'/create-product'} className="border border-[#34699A] text-[#34699A] font-medium px-6 py-2 rounded-lg hover:bg-[#34699A] hover:text-white transition cursor-pointer">
            Post an Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
