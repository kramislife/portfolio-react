import React from "react";
import { Project, brandColors } from "../constant/Index";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <section>
      <div className="py-10">
        <h1 className="gradient text-3xl text-center pb-24">Projects</h1>
        <div className="space-y-5 lg:px-20">
          {Project.map((item) => (
            <div
              key={item.id}
              className="p-6 shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="lg:w-[40vh] lg:h-[20vh] rounded-md shadow-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.name} {" - "}
                    <span className="text-xs lg:text-sm font-light text-stone-400">
                      {item.type}
                    </span>
                  </h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className="mt-2 inline-block text-stone-400 hover:underline text-sm"
                  >
                    {item.link}
                  </a>
                  <p className="mt-2">{item.description}</p>
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
