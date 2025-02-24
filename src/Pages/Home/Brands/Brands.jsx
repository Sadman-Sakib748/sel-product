import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3",
];

const Brands = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 sec
    return () => clearInterval(interval); // Cleanup to prevent multiple intervals
  }, []);

  return (
    <div className="max-w-7xl flex flex-col items-center gap-6 p-6 mt-12">
      {/* Marquee */}
      <div className="overflow-hidden w-full bg-gray-200 py-3 px-4 rounded-lg shadow-md">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span className="text-lg font-bold">🔥 Special Offers - Limited Time Only!</span>
          <span className="text-lg font-bold">🆕 New Arrivals - Check Now!</span>
          <span className="text-lg font-bold">💰 Discounts Up to 50% Off!</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
