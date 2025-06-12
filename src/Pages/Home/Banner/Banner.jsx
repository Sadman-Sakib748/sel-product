import { motion } from 'framer-motion';
import bg from "./../../../assets/bg-1-1.png";
import pamooxhi from "./../../../assets/pamooxhi.png";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-center text-white md:flex-row md:text-left"
      >
        {/* Text content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">We Represent</p>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            London Street Style
          </h1>
          <p className="max-w-md text-lg font-light text-amber-200/90">
            Discover the latest trends and exclusive collections that bring London's streets right to your wardrobe.
          </p>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link to="/shopAllData">
              <button className="rounded-lg bg-amber-500 px-10 py-4 text-lg font-semibold uppercase tracking-wide text-black shadow-lg shadow-amber-600/50 transition-colors hover:bg-amber-400">
                Shop Now
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image with floating animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md md:w-1/2"
          style={{ perspective: 1000 }}
        >
          <motion.img
            src={pamooxhi}
            alt="Street style model"
            className="rounded-3xl shadow-2xl"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            animate={{
              y: [0, -15, 0], // floating effect
              rotate: [0, 2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
