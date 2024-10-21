import cover from "@assets/cover.png";
import resume from "@assets/resume.pdf";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariable = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section className="my-12 lg:my-0 space-y-10">
      <div className="px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-10">
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center my-5">
          <motion.img
            src={cover}
            alt="Edmark Gariando"
            className="lg:w-[90vh] lg:h-[80vh] object-cover"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariable}
          className="lg:w-1/2 lg:space-y-8"
        >
          <div className="my-5">
            <motion.h1
              variants={childVariants}
              className="text-4xl lg:text-5xl font-bold lg:mb-2"
            >
              Edmark Gariando
            </motion.h1>
            <motion.span
              variants={childVariants}
              className="gradient text-sm lg:text-xl"
            >
              Front-end Web Developer | React Developer
            </motion.span>
          </div>
          <motion.p
            variants={childVariants}
            className="text-sm lg:text-md lg:leading-relaxed lg:mt-3"
          >
            I'm a passionate Front-End Developer with expertise in building
            responsive and dynamic web applications using ReactJS, HTML, and
            Tailwind CSS. I specialize in writing clean, maintainable code,
            creating intuitive user interfaces, and optimizing performance. My
            strengths lie in state management and component-based architecture,
            with a strong focus on delivering smooth, seamless user experiences.
          </motion.p>
          <motion.div variants={childVariants}>
            <Button
              variant="secondary"
              className="lg:my-0 my-5 lg:w-auto w-full rounded-full"
            >
              <a href={resume} target="_blank" className="text-sm">
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// https://www.youtube.com/watch?v=wtGCTFXWV3Y
