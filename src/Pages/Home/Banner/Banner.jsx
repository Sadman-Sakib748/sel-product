import { motion } from 'framer-motion'
import bg from "./../../../assets/bg-1-1.png";
import pamooxhi from "./../../../assets/pamooxhi.png";

const Banner = () => {
    return (
        <section className="relative flex min-h-screen md:mt-16 w-full items-center justify-center overflow-hidden bg-white">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="container relative z-10 flex flex-col-reverse items-center gap-12 px-6 py-12 md:flex-row md:gap-20 lg:px-12"
            >
                <div className="space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                        <p className="text-lg font-medium uppercase tracking-wider text-muted-foreground">We Represent</p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">LONDON STREET STYLE</h1>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            variant="default"
                            className="rounded-none bg-black px-8 py-6 text-base font-medium uppercase text-white hover:bg-black/90"
                        >
                            Shop Now
                        </button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex h-full w-full max-w-md md:max-w-lg lg:max-w-xl"
                >
                    {/* Corrected the image tag */}
                    <img
                        src={pamooxhi}
                        alt="Street style model"
                        width={800}
                        height={900}
                        className="h-auto w-full object-cover rounded-lg shadow-lg"
                        priority
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Banner;
