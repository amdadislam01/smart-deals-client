import React from "react";
import { NavLink } from "react-router";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaTshirt,
  FaHome,
  FaAppleAlt,
} from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaThLarge, FaChartBar, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#07182E] text-gray-300 py-10">
      <div className="max-w-[1550px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
        <div className="md:col-span-2">
          <div>
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-r from-[#34699A] to-[#58A0C8] rounded-lg text-white">
                <MdOutlineSmartToy className="text-xl" />
              </div>
              <span className="font-extrabold text-xl text-white">
                Smart<span className="text-cyan-500">Deals</span>
              </span>
            </NavLink>
          </div>
          <p className="text-sm mt-3 leading-relaxed">
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/allproduct"
                className="flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaThLarge className="text-sky-400" /> All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaChartBar className="text-sky-400" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaSignInAlt className="text-sky-400" /> Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaUserPlus className="text-sky-400" /> Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-sky-400 transition">
              <FaBoxOpen className="text-sky-400" /> Electronics
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 transition">
              <FaTshirt className="text-sky-400" /> Fashion
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 transition">
              <FaHome className="text-sky-400" /> Home & Living
            </li>
            <li className="flex items-center gap-2 hover:text-sky-400 transition">
              <FaAppleAlt className="text-sky-400" /> Groceries
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact & Support
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-sky-400" /> support@smartdeals.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-sky-400" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-sky-400" /> 123 Commerce
              Street, Dhaka
            </li>
          </ul>

          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-sky-400 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 <span className="text-white font-semibold">SmartDeals</span>. All
        rights reserved.
        <p className="text-sm font-semibold">Developed By <a href="https://amdadislam-01.netlify.app/">MD Amdad Islam</a></p>
      </div>
    </footer>
  );
};

export default Footer;
