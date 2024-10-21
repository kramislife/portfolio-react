import React from "react";
import { Project, brandColors } from "../constant/Index";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// Variants for project animation
const projectVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, // Keep the same duration for a smoother transition
      ease: "easeInOut", // Using a standard easing function for a smoother pace
    },
  },
};

const Projects = () => {
  return (
    <section className="my-12 lg:my-24 space-y-10">
      <div className="py-12">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut", // Smooth easing for heading transition
          }}
          className="gradient text-3xl text-center pb-10 lg:pb-12"
        >
          Projects
        </motion.h1>

        <div className="lg:space-y-20 lg:px-20">
          {Project.map((item) => (
            <motion.div
              key={item.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              className="px-6 transition-transform transform cursor-pointer lg:py-0 py-5"
            >
              <motion.div
                className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20"
                whileHover={{
                  scale: 1.03, // Slight scaling on hover
                  transition: {
                    duration: 0.6, // Smooth hover transition
                    ease: "easeInOut", // Consistent easing on hover
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="lg:w-[40vh] lg:h-[20vh] rounded-md shadow-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.name}{" "}
                    <span className="text-xs lg:text-sm font-light text-stone-400">
                      - {item.type}
                    </span>
                  </h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className="inline-block text-stone-400 hover:underline hover:text-stone-300 text-sm"
                  >
                    {item.link}
                  </a>
                  <p className="mt-5 text-sm leading-loose">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tool.map((tool, index) => (
                      <Button
                        key={index}
                        className="font-thin px-3 py-1 text-white rounded-md transition-colors duration-300"
                        style={{
                          backgroundColor: "transparent",
                          border: `1px solid ${brandColors[tool]}`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            brandColors[tool];
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {tool}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
