import { Technology } from "../constant/Index";

const Technologies = () => {
  return (
    <section className="px-5">
      <h1 className="gradient text-3xl text-center lg:pb-20 pb-10">
        {" "}
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center gap-20 lg:gap-10 text-white">
        {Technology.map((item) => (
          <div
            key={item.id}
            className="transition duration-300 ease-in-out hover:scale-125"
            style={{ color: item.color }} // Apply the color dynamically
          >
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
