import { motion } from 'framer-motion';
import corporate from './../../../../../assets/corporate-1.png';

const ResponsiveReady = () => {
  return (
    <section className="min-h-screen mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.img
              src={corporate}
              alt=""
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="order-1 md:order-2">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              RESPONSIVE READY
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-6 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              WORKS ON EVERY DEVICE
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-8 text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              New the her nor case that lady paid read. Invitation friendship travelling. Eat everything the out two.
              Shy you who scarcely expenses debating hastened resolved.
            </motion.p>

            <motion.button
              className="bg-[#8860D0] hover:bg-[#7750C0] text-white px-6 py-3 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Check it out
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveReady;
