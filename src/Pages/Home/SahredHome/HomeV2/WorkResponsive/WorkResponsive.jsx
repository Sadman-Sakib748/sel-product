import taablet from './../../../../../assets/taablet.png'
import { motion } from 'framer-motion';

const WorkResponsive = () => {
    return (
        <section className="py-16 min-h-screen px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-3">RESPONSIVE READY</h2>
                <div className="w-12 h-0.5 bg-black mb-6" />
                <p className="text-muted-foreground text-lg">WORKS ON EVERY DEVICE</p>
              </div>
  
              <p className="text-muted-foreground text-lg leading-relaxed">
                New the her nor case that lady paid read. Invitation friendship travelling. Eat everything the out two.
                Shy you who scarcely expenses debating hastened resolved.
              </p>
            </motion.div>
  
            {/* Right Tablet Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img src={taablet} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default WorkResponsive;