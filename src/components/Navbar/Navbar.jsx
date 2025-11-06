import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaProductHunt,
  FaBitcoin,
} from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/allproduct", label: "All Products", icon: <AiFillProduct /> },
    ...(user ? [{ to: "/myproduct", label: "My Products", icon: <FaProductHunt /> }] : []),
     ...(user ? [{ to: "/mybids", label: "My Bids", icon: <FaBitcoin /> }] : []),
     ...(user ? [{ to: "/create-product", label: "Create Product", icon: <IoCreate /> }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-[#58A0C8]/30">
      <nav className="max-w-[1550px] mx-auto flex items-center justify-between h-16 px-6">
        <div>
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-r from-[#34699A] to-[#58A0C8] rounded-lg text-white">
              <MdOutlineSmartToy className="text-xl" />
            </div>
           <span className="font-extrabold text-xl text-gray-800 group-hover:text-[#34699A] transition">
              Smart<span className="text-[#34699A]">Deals</span>
            </span>
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <div key={link.to} className="hover:scale-105 transition-transform duration-150">
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#34699A] to-[#58A0C8] text-white shadow-sm"
                      : "text-gray-700 hover:text-[#34699A] hover:bg-[#58A0C8]/10"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {loading ? (
            <div className="w-10 h-10 border-4 border-[#58A0C8] border-t-transparent rounded-full animate-spin" />
          ) : !user ? (
            <>
              <NavLink
                to="/login"
                className="px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#34699A] to-[#58A0C8] hover:opacity-90 transition"
              >
                <FaSignInAlt className="inline mr-2" /> Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-5 py-2 rounded-md font-medium border border-[#58A0C8] text-[#34699A] hover:bg-[#58A0C8]/10 transition"
              >
                <FaUserPlus className="inline mr-2" /> Signup
              </NavLink>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <img
                  src={user?.photoURL || user.reloadUserInfo.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#58A0C8]"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-xl p-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 text-center z-50">
                  <p className="text-sm font-semibold text-gray-800">
                    {user.displayName || user.reloadUserInfo.displayName}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <button
                onClick={logoutUser}
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#34699A] to-[#58A0C8] hover:opacity-90 transition cursor-pointer"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#34699A] text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-[#58A0C8]/30 overflow-hidden">
          <div className="flex flex-col gap-2 px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.to} className="hover:scale-105 transition-transform duration-150">
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#34699A] to-[#58A0C8] text-white shadow-sm"
                        : "text-gray-700 hover:text-[#34699A] hover:bg-[#58A0C8]/10"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              </div>
            ))}

            {loading ? (
              <div className="w-10 h-10 border-4 border-[#58A0C8] border-t-transparent rounded-full animate-spin mx-auto my-2" />
            ) : !user ? (
              <>
                <NavLink
                  to="/login"
                  className="flex items-center justify-center px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#34699A] to-[#58A0C8] hover:opacity-90 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <FaSignInAlt className="inline mr-2" /> Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="flex items-center justify-center px-5 py-2 rounded-md font-medium border border-[#58A0C8] text-[#34699A] hover:bg-[#58A0C8]/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUserPlus className="inline mr-2" /> Signup
                </NavLink>
              </>
            ) : (
              <button
                onClick={() => {
                  logoutUser();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#34699A] to-[#58A0C8] hover:opacity-90 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
