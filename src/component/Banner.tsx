import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home"className="border-x-2 border-blue-500 bg-white px-6 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          
          <div className="flex w-full flex-col md:w-1/2">

            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
              Build Your Ideal{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-7 flex items-center gap-4">

            
              <a href="" className="rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105" >
                Explore Technologies
              </a>

              <a href="" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-violet-500 hover:text-violet-600" >
                Learn More
              </a>

            </div>
          </div>

          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
            <img src={bannerStack} alt="Development Stack" className="w-64 md:w-80" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;