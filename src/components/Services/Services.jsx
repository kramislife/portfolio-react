import React from "react";
import { Service } from "../constant/Index";
import { motion } from "framer-motion";

// Animation variants for fade-in and slide-up effect
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing function for smoother motion
    },
  }),
};

// Heading animation variant
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Services = () => {
  return (
    <section className="my-12 lg:my-24 space-y-10 lg:px-14 px-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h1
          variants={headingVariants}
          className="gradient text-3xl text-center pb-5 lg:pb-12"
        >
          Services
        </motion.h1>
        <motion.div className="flex flex-wrap justify-center">
          {Service.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <motion.div
                className="py-6 px-2 lg:px-6  rounded-lg shadow-lg transition-all duration-300 ease-in-out h-full"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "10px 20px 20px 20px rgba(0,0,0,0.5)",
                }}
              >
                <div className="text-4xl text-stone-400 mb-4">{item.icon}</div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
