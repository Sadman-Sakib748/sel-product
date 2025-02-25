import { motion } from "framer-motion";
import touchicon from "./../../../../../assets/touchicon.png";
import tablet from "./../../../../../assets/taablet.png";
import envBg from "./../../../../../assets/env.png";

const PhoneTablet = () => {
    return (
        <section 
            className="relative min-h-screen overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: `url(${envBg})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", // Parallax Effect ✅
            }}
        >
            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
                >
                    PHONE & TABLET APP
                </motion.h2>

                {/* Tablet Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <img
                            src={tablet}
                            alt="Tablet app interface"
                            className="w-full max-w-[500px] md:max-w-[700px] h-auto mx-auto"
                        />
                    </motion.div>

                    {/* Interactive Hand Cursor */}
                    <motion.div
                        className="absolute left-[10%] md:left-[15%] md:top-[26%] top-[17%]"
                        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src={touchicon}
                            alt="Interactive hand cursor"
                            className="w-[150px] md:w-[200px] lg:w-[250px] h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhoneTablet;
