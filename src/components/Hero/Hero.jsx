import profile from "@assets/profile.png";
import resume from "@assets/resume.pdf";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-10 py-5">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={profile}
            alt="Edmark Gariando"
            className="lg:w-[80vh] lg:h-[80vh] rounded-lg shadow-lg my-5"
          />
        </div>
        {/* Text Content */}
        <div className="lg:w-1/2 text-neutral-300 lg:space-y-8">
          <div className="my-5">
            <h1 className="text-4xl lg:text-5xl font-bold lg:mb-2">
              Edmark Gariando
            </h1>
            <span className="gradient text-sm lg:text-xl">
              Front-end Web Developer | React Developer
            </span>
          </div>
          <p className="text-sm lg:text-md lg:leading-relaxed lg:mt-3">
            I'm a passionate Front-End Developer with expertise in building
            responsive and dynamic web applications using ReactJS, HTML, and
            Tailwind CSS. I specialize in writing clean, maintainable code,
            creating intuitive user interfaces, and optimizing performance. My
            strengths lie in state management and component-based architecture,
            with a strong focus on delivering smooth, seamless user experiences.
          </p>
          <Button
            variant="secondary"
            className="lg:my-0 my-5 lg:w-auto w-full rounded-full"
          >
            <a href={resume} target="_blank" className="text-sm">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// https://www.youtube.com/watch?v=wtGCTFXWV3Y
