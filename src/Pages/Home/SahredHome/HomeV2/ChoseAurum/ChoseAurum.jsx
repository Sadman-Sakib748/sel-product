import { Truck, Shirt, Settings } from "lucide-react";
import { motion } from "framer-motion";

const ChoseAurum = () => {
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          WHY CHOOSE AURUM?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-muted-foreground mb-12 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          MANY REASONS TO CHOOSE OUR THEME
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Free Shipping Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">FREE SHIPPING</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </motion.div>

          {/* 100% Cotton Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Shirt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">100% COTTON</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </motion.div>

          {/* Customizable Card */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">CUSTOMIZABLE</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChoseAurum;
