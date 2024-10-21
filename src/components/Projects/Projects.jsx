import React from "react";
import { Project, brandColors } from "../constant/Index";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <section className="my-12 lg:my-24 space-y-10">
      <div className="py-12">
        <h1 className="gradient text-3xl text-center pb-10 lg:pb-12">
          Projects
        </h1>
        <div className="lg:space-y-20 lg:px-20">
          {Project.map((item) => (
            <div
              key={item.id}
              className="px-6 transition-transform transform hover:scale-105 cursor-pointer lg:py-0 py-5"
            >
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
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
                  <p className="mt-5 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tool.map((tool, index) => (
                      <Button
                        key={index}
                        className="font-thin px-3 py-1 text-white rounded-md transition-colors duration-300"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            brandColors[tool]; // Change background color on hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = ""; // Reset background color on mouse leave
                        }}
                      >
                        {tool}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
