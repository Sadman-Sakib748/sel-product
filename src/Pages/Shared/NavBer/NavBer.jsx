import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import logo from './../../../assets/logo.png';
import { AuthContext } from "../../../Provider/AuthProviders";

const NavBer = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        setScrollingDown(true);
        setShrinkHeader(true);
      } else {
        setScrollingDown(false);
        setShrinkHeader(false);
      }
      setPrevScrollY(currentScrollY);
    };

    // Function to update date and time
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime(); // Set initial date and time
    const interval = setInterval(updateDateTime, 1000); // Update every second

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval); // Clean up interval on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Top Bar (Hidden on Mobile) */}
      <div className={`hidden md:block bg-zinc-900 text-zinc-400 text-sm transition-all duration-300 ${shrinkHeader ? "h-0" : "h-10"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-2">
              <Link to="/login" className="hover:text-white transition-colors">LOGIN</Link>
              <span>or</span>
              <Link to="/signup" className="hover:text-white transition-colors">REGISTER</Link>
              <span className="mx-2">|</span>
              <span>{currentDateTime}</span> {/* Displaying real-time date and time */}
            </div>
            <div className="flex items-center gap-4">
              <Link to="/wishlist" className="hover:text-white transition-colors">WISHLIST</Link>
              <Link to="/stores" className="hover:text-white transition-colors">STORES</Link>
              <Link to="/account" className="hover:text-white transition-colors">MY ACCOUNT</Link>
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <span>ENGLISH</span>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zDZ1X0JkovjLCQh6W2P6ch9C30f74x.png"
                  alt="English"
                  width={16}
                  height={12}
                  className="inline-block"
                />
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`border-b ${shrinkHeader ? "h-16" : "md:h-20"} transition-all duration-300 bg-white`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="AURUM" width={120} height={40} className="md:h-8 md:w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative">
                <button
                  className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  HOME
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48">
                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white">
                      Home V1
                      <span className="text-sm text-gray-500 block">Default</span>
                    </Link>
                    <Link to="/home2" className="block px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white">
                      Home V2
                      <span className="text-sm text-gray-500 block">Corporate  Edition</span>

                    </Link>
                    <span className="text-sm text-gray-500 block">Category Collection</span>
                    <Link to="/home3" className="block px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white">
                      Home V3

                    </Link>
                  </div>
                )}
              </div>
              <Link to="/shopAllData" className="text-gray-700 font-medium hover:text-purple-600 transition-colors">SHOP</Link>
              <Link to="/welcomePage" className="text-gray-700 font-medium hover:text-purple-600 transition-colors">PAGES</Link>
              <Link to="/Blogs" className="text-gray-700 font-medium hover:text-purple-600 transition-colors">BLOG</Link>
              <Link to="/buy-now" className="text-gray-700 font-medium hover:text-purple-600 transition-colors">BUY NOW</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-purple-600 transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-purple-600 transition-colors relative" aria-label="Shopping Cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Log Out Button (only visible when user is logged in) */}
              {user ? (
                <button
                  className="p-2 hover:text-purple-600 transition-colors"
                  onClick={handleLogOut}
                  aria-label="Log Out"
                >
                  Log Out
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/login" className="hover:text-purple-600 transition-colors">LOGIN</Link>
                  <Link to="/signup" className="hover:text-purple-600 transition-colors">REGISTER</Link>
                </div>
              )}

              {/* Mobile Menu Button (Visible Only on Mobile) */}
              <button
                className="md:hidden p-2 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Only Visible on Small Screens) */}
      <div
        className={`fixed inset-0 bg-gray-950 shadow-md transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-xl bg-red-600 text-gray-700 hover:text-purple-600"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col bg-gray-950 items-center mt-20 space-y-6">
          <Link to="/" className="text-lg text-purple-600 font-medium hover:text-purple-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <Link to="/shop" className="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>SHOP</Link>
          <Link to="/pages" className="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>PAGES</Link>
          <Link to="/blog" className="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
          <Link to="/shortcodes" className="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>SHORTCODES</Link>
          <Link to="/buy-now" className="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>BUY NOW</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBer;
