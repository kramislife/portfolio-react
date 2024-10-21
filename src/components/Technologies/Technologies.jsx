import { Technology } from "../constant/Index";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Technologies = () => {
  return (
    <>
      <section className="my-12 lg:my-24 space-y-10">
        <div>
          <h1 className="gradient text-3xl text-center pb-16 lg:pb-20">
            {" "}
            Technologies
          </h1>
          <TooltipProvider>
            <div className="flex flex-wrap justify-center lg:gap-x-20 gap-5 px-5 gap-y-10">
              {Technology.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger>
                    <div
                      className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110 lg:hover:scale-125 pt-3"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                      <p className="text-lg font-semibold pt-5">{item.name}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs m-2 text-stone-400">
                    <p> {item.description} </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>
    </>
  );
};

export default Technologies;
