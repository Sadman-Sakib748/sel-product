import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import images
import bershka from './../../../assets/bershka.png';
import dkny from './../../../assets/dkny.png';
import hm from './../../../assets/hm.png';
import env from './../../../assets/env.png';
import mango from './../../../assets/mango-300x114.png';
import selected from './../../../assets/selected-300x106.png';

const images = [bershka, dkny, hm, env, mango, selected]; // Use imported images

const Brands = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev + 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Auto-slide every 5 sec
    return () => clearInterval(interval); // Cleanup to prevent multiple intervals
  }, []);

  return (
    <div className="max-w-7xl flex flex-col items-center gap-6 p-6 mt-12">
      {/* Marquee with Images */}
      <div className="overflow-hidden w-full bg-gray-200 py-3 px-4 rounded-lg shadow-md">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Brand ${idx}`}
              className="w-32 h-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
