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
          <h1 className="gradient text-3xl text-center pb-10"> Technologies</h1>
          <TooltipProvider>
            <div className="flex flex-wrap justify-center gap-16">
              {Technology.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger>
                    <div
                      className="transition duration-300 ease-in-out hover:scale-125 pt-3"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> {item.name} </p>
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
