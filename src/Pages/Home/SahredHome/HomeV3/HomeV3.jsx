import bg from './../../../../assets/hallelluja.png';
import cat from './../../../../assets/cat.png';
import { motion } from "framer-motion";
import HandBags from './HandBags/HandBags';
import PopularBags from './PopularBags/PopularBags';
import Commend from './Commend/Commend';
import OurBrand from './OurBrand/OurBrand';

const HomeV3 = () => {
    return (
       <div>
         <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img
                src={bg}
                alt="Winter Shoe Collection"
                className="absolute inset-0 w-full h-full object-cover brightness-75"
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-start justify-center p-8 text-white lg:p-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg font-medium tracking-wide"
                >
                    NEW THIS WINTER
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                >
                    THE SHOE COLLECTION
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg">
                        PURCHASE NOW
                    </button>
                </motion.div>

                {/* Animated Cat */}
                <motion.div
                    className="absolute bottom-8 right-8 w-24 lg:w-32"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        x: { duration: 0.8 },
                        opacity: { duration: 0.8 },
                        y: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <img src={cat} alt="Decorative cat" className="drop-shadow-md w-96 lg:w-32" />
                </motion.div>
            </div>
        </div>
        <div>
        <HandBags></HandBags>
        <PopularBags></PopularBags>
        <Commend></Commend>
        <OurBrand></OurBrand>
        </div>
       </div>
    );
};

export default HomeV3;
