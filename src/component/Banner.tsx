import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="border-x-2 border-blue-500 bg-white"
    >
      {/* Top Stripe */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "repeating-linear-gradient(135deg, #dbeafe 0px, #dbeafe 2px, transparent 2px, transparent 7px)",
        }}
      />

      <div className="container mx-auto px-6 py-8 md:px-10 md:py-10">
        <div className="flex min-h-[250px] items-center justify-between gap-8">

          {/* LEFT SIDE */}
          <div className="w-1/2">

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Build Your Ideal
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(to right, #ff4b2b, #c026d3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Development Stack
              </span>
            </h1>

            <p className="mt-4 max-w-[480px] text-sm leading-5 text-gray-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-7 flex items-center gap-2">

              {/* Explore Technologies */}
              <a
                href="#technologies"
                style={{
                  background:
                    "linear-gradient(to right, #ff6a00, #f6339a)",
                }}
                className="rounded-md px-3 py-2 text-[10px] font-medium text-white"
              >
                Explore Technologies
              </a>

              {/* Learn More */}
              <a
                href="#about"
                className="rounded-md border border-gray-200 bg-white px-7 py-2 text-[10px] text-gray-600"
              >
                Learn More
              </a>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="flex w-1/2 items-center justify-end">

            <img
              src={bannerStack}
              alt="Development Stack"
              className="w-64 md:w-80"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;