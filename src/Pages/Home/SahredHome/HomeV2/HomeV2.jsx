import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ChoseAurum from "./ChoseAurum/ChoseAurum";
import ResponsiveReady from "./ResponsiveReady/ResponsiveReady";
import WorkResponsive from "./WorkResponsive/WorkResponsive";
import TouchOptimized from "./TouchOptimized/TouchOptimized";
import PhoneTablet from "./Phone&Tablet/PhoneTablet";
import OurCustomers from "./OurCustomers/OurCustomers";

const HomeV2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Bouncing animation for the title
  const bounce = {
    animate: {
      y: ["0", "-10px", "0"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
        <div className="min-h-screen mt-16 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-4 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Stationery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Letterhead with Items */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <div className="w-6 h-6 bg-black rounded-sm" />
              </div>
              <div className="h-[300px] bg-white relative">
                {/* Paper Clips */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="w-6 h-1 bg-gray-300 transform rotate-45" />
                  <div className="w-6 h-1 bg-gray-300 transform rotate-45" />
                  <div className="w-6 h-1 bg-gray-300 transform rotate-45" />
                </div>
                {/* Pencils */}
                <div className="absolute bottom-4 right-4 space-x-2 flex">
                  <div className="w-1 h-20 bg-gray-400" />
                  <div className="w-1 h-20 bg-gray-400" />
                </div>
              </div>
            </motion.div>
            {/* Add Title to Left Column */}
            <motion.h2
              {...bounce}
              className="text-2xl font-bold text-white text-center"
            >
              Stationery
            </motion.h2>
          </motion.div>

          {/* Center Column - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-32 h-32 relative"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  d="M50 10 L90 90 L50 60 L10 90 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-widest"
            >
              AURUM
            </motion.h1>
          </motion.div>

          {/* Right Column - Purple Documents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Purple Folders */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-[#5D4E6D] rounded-lg shadow-lg p-4 h-[400px] relative"
            >
              {/* Folder Details */}
              <div className="absolute right-6 top-6 space-y-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-12 bg-white rounded-full opacity-50" />
              </div>

              {/* Small Icons */}
              <div className="absolute bottom-6 right-6 space-y-2">
                <div className="w-8 h-8 bg-white rounded-full opacity-80" />
                <div className="w-8 h-8 bg-white rounded-full opacity-60" />
              </div>
            </motion.div>
            {/* Add Title to Right Column */}
            <motion.h2
              {...bounce}
              className="text-2xl font-bold text-white text-center"
            >
              Documents
            </motion.h2>
          </motion.div>
        </div>

        {/* Business Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {["Men", "Women", "Kids"].map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 ? 2 : -2 }}
              className="bg-white rounded-sm shadow-lg aspect-[1.618/1] p-4"
            >
              <div className="w-8 h-8 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 10 L90 90 L50 60 L10 90 Z" fill="#5D4E6D" />
                </svg>
              </div>
              {/* Title for Business Card */}
              <motion.h3
                {...bounce}
                className="text-xl font-semibold text-center text-gray-700"
              >
                {category}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <div className="min-h-screen">
        <ChoseAurum></ChoseAurum>
        <div className="max-w-7xl">
        <ResponsiveReady></ResponsiveReady>
        <WorkResponsive></WorkResponsive>
        <TouchOptimized></TouchOptimized>
        </div>
        <PhoneTablet></PhoneTablet>
        <OurCustomers></OurCustomers>
    </div>
    </div>
  );
};

export default HomeV2;
