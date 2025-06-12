import { motion } from "framer-motion";

import bershka from './../../../assets/bershka.png';
import dkny from './../../../assets/dkny.png';
import hm from './../../../assets/hm.png';
import env from './../../../assets/env.png';
import mango from './../../../assets/mango-300x114.png';
import selected from './../../../assets/selected-300x106.png';

const images = [bershka, dkny, hm, env, mango, selected];

const Brands = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-200 text-center">
        Trusted Brands
      </h2>

      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg py-6 px-4">
        {/* Double image list to create seamless infinite scroll */}
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ width: "200%" }}
        >
          {[...images, ...images].map((image, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-40 h-20 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800
                relative border-2 border-transparent
                brand-glow"
            >
              <img
                src={image}
                alt={`Brand ${idx}`}
                className="max-h-12 object-contain filter dark:brightness-90"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Custom styles for glowing border animation */}
      <style jsx>{`
        .brand-glow {
          --glow-color: #4f46e5; /* Indigo-600 from Tailwind */
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            border-color: transparent;
            box-shadow: 0 0 6px 0 rgba(79, 70, 229, 0);
          }
          50% {
            border-color: var(--glow-color);
            box-shadow: 0 0 15px 4px rgba(79, 70, 229, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
