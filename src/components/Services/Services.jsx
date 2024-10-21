import { Service } from "../constant/Index";

const Services = () => {
  return (
    <section className="my-12 lg:my-24 space-y-10 lg:px-14 px-5">
      <div>
        <h1 className="gradient text-3xl text-center pb-5 lg:pb-12">
          Services
        </h1>
        <div className="flex flex-wrap justify-center">
          {Service.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-5 lg:px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="text-4xl text-stone-400 mb-4">{item.icon}</div>
              <h2 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
