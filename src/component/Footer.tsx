import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer
      id="about"
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <img
              src={logo}
              alt="DevStack"
              className="h-7"
            />

            <p className="mt-4 text-sm text-gray-500">
              Curated tools and technologies for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-sm text-gray-500">
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="">Home</a>
              <a href="">Technologies</a>
              <a href="">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;