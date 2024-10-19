import profile from "@assets/profile.png";
import resume from "@assets/resume.pdf";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="container px-4 lg:mx-auto flex flex-col lg:flex-row items-center lg:space-x-10 lg:mt-0 mt-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-neutral-300 lg:space-y-8">
          <h1 className="text-4xl lg:text-7xl font-bold mb-2">
            Edmark Gariando
          </h1>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-lg lg:text-4xl">
            Front-end Web Developer | React Developer
          </span>
          <p className="text-md lg:text-lg lg:leading-relaxed mt-4">
            I'm a passionate Front-End Developer skilled in building responsive,
            dynamic web applications with ReactJS, HTML, and CSS (Tailwind).
            Experienced in creating clean code, user-friendly interfaces, and
            optimizing performance. Strong in state management and
            component-based architecture, with a focus on delivering seamless
            user experiences.
          </p>
          <Button variant="secondary" className="lg:mt-0 mt-5 lg:w-auto w-full">
            <a href={resume} target="_blank" className="text-lg">
              {" "}
              Download Resume
            </a>{" "}
          </Button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={profile}
            alt="Edmark Gariando"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
