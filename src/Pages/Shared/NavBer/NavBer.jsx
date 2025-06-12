import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Moon,
  Sun,
  User,
  Home,
  ShoppingBag,
  FileText,
  BookOpen,
  DollarSign,
} from "lucide-react";
import logo from "./../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";

const NavBer = () => {
  const { user, logOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchCartCount = () => {
      if (user?.email) {
        axios
          .get(`http://localhost:5000/carts?email=${user.email}`)
          .then((res) => setCartCount(res.data.length))
          .catch((err) => console.error("Error fetching cart data:", err));
      }
    };

    fetchCartCount();
    const intervalId = setInterval(fetchCartCount, 5000);
    return () => clearInterval(intervalId);
  }, [user?.email]);

  const handleLogOut = () => {
    logOut().catch(console.error);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-gray-700 dark:text-gray-300">
          <Link to="/" className="flex items-center gap-1 hover:text-purple-600 transition"><Home size={18} /> Home</Link>
          <Link to="/shopAllData" className="flex items-center gap-1 hover:text-purple-600 transition"><ShoppingBag size={18} /> Shop</Link>
          <Link to="/welcomePage" className="flex items-center gap-1 hover:text-purple-600 transition"><FileText size={18} /> Pages</Link>
          <Link to="/Blogs" className="flex items-center gap-1 hover:text-purple-600 transition"><BookOpen size={18} /> Blog</Link>
          <Link to="/byNow" className="flex items-center gap-1 hover:text-purple-600 transition"><DollarSign size={18} /> Buy Now</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="AURUM" className="h-10 w-auto" />
        </Link>

        {/* Right Nav */}
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition p-1">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
              >
                {user.photoURL ? (
                  <img src={user?.photoURL} alt={user?.displayName || "User"} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <User size={22} />
                )}
                <span className="hidden md:inline">{user?.displayName || "User"}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 z-50">
                  <Link to="/myAccount" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-purple-600 hover:text-white transition">My Account</Link>
                  <button onClick={handleLogOut} className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition">Log Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-4 text-purple-600 font-semibold">
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Register</Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 md:hidden z-40 ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <nav className="flex flex-col items-center justify-center space-y-8 text-white mt-20 text-lg font-semibold">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1 hover:text-purple-400 transition"><Home size={18} /> Home</Link>
          <Link to="/shopAllData" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1 hover:text-purple-400 transition"><ShoppingBag size={18} /> Shop</Link>
          <Link to="/welcomePage" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition"><FileText size={18} /> Pages</Link>
          <Link to="/Blogs" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition"><BookOpen size={18} /> Blog</Link>
          <Link to="/byNow" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition"><DollarSign size={18} /> Buy Now</Link>

          {user ? (
            <>
              <Link to="/myAccount" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition">My Account</Link>
              <button onClick={() => { handleLogOut(); setMobileMenuOpen(false); }} className="hover:text-red-500 transition">Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition">Login</Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition">Register</Link>
            </>
          )}

          <div className="mt-8 text-gray-400">{currentDateTime}</div>
        </nav>
      </div>

      {/* Fixed Button */}
      <div className="fixed right-0 top-[530px] p-2 rounded-l-md">
        <Link to="/benner" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">
          <Home size={20} />
        </Link>
      </div>
    </header>
  );
};

export default NavBer;
