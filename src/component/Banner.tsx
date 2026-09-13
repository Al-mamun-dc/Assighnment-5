import bannerImage from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row">

        <div className="w-full md:w-[50%]">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Build Your Ideal
          </h1>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-500">
            Explore frontend, backend, database, and tooling options.
            Compare and customize your perfect tech stack for your next project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-300 px-5 py-3 text-sm text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <img src={bannerImage}alt="Development Stack" className="w-full"/>
        </div>

          </div>
        </section>

    );
};

export default Banner;