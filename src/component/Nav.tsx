import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
    <nav className=" sticky top-0 z-50 w-full  bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt=""/>
      </div>

      <div className=" flex items-center gap-4">
         <a href="" className="text-sm text-pink-500">Home</a>
      <a href="" className="text-sm text-gray-600">Technologies</a>
      <a href="" className="text-sm text-gray-600">Projects</a>
      <a href="" className="text-sm text-gray-600">About</a>
      <a href="" className="text-sm text-gray-600">contact</a>
       </div>
       <div className="flex gap-4">
        <button className="text-sm text-gray-700">Sign In</button>
        <button className="rounded-full bg-pink-500 px-5 py-2 text-sm text-white"> Sign Up</button>
       </div>
      </div>
    </nav>
    );
};

export default Nav;