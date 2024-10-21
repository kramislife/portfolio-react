import { Technology } from "../constant/Index";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section className="my-12 lg:my-24 space-y-10">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="gradient text-3xl text-center pb-16 lg:pb-20"
        >
          Technologies
        </motion.h1>

        <TooltipProvider>
          <motion.div
            className="flex flex-wrap justify-center lg:gap-x-20 gap-10 px-5 gap-y-10"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
          >
            {Technology.map((item) => (
              <Tooltip key={item.id}>
                <TooltipTrigger>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    whileHover={{ scale: 1.2 }} // Apply scaling effect on hover
                    transition={{ type: "spring", stiffness: 300 }} // Smoother scaling effect
                    className="flex flex-col items-center pt-3"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                    <p className="text-lg font-semibold pt-5">{item.name}</p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  align="center"
                  className="text-stone-300 p-2 rounded-lg shadow-md max-w-xs text-sm"
                >
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Technologies;
