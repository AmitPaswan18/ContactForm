import { BsWhatsapp, BsTelephoneInbound } from "react-icons/bs";
import Hamburger from "hamburger-react";

const NavBar = () => {
  return (
    <>
      <div
        id="NavBar"
        className="flex list-none justify-around items-center text-lg w-full font-semibold  bg-gradient-to-r from-blue-800 to-indigo-900 h-[75  px]  shadow-lg"
      >
        <h1 className="md:text-3xl text-white text-base my-5 font-serif">
          Contact Details{" "}
        </h1>
        <div id="hide" className="text-white ">
          <a href="#" className="px-4   hover:text-purple-600">
            Blog
          </a>
          <a href="#" className="px-4   hover:text-purple-600 ">
            Project Works
          </a>
          <a href="#" className="px-4   hover:text-purple-600">
            Services
          </a>
          <a href="#" className=" hover:text-purple-600 px-4">
            About
          </a>
          <a href="#" className="px-4 hover:text-purple-600  ">
            Contact Me
          </a>
        </div>
        <div className="lg:flex cursor-pointer flex-row space-x-10 mx-5 ">
          <button
            // className=" bg-purple-600 h-[40px] text-white hover:text-base text-sm p-2 rounded-lg"
            className="hover:scale-125 hover:text-purple-600 ease-in duration-150 w-fit bg-white p-1 rounded-md "
            type="button"
          >
            Login/ <span>Register</span>
          </button>
        </div>
        <div id="contactIcon" className="flex gap-6  text-white">
          <BsWhatsapp />
          <BsTelephoneInbound />
        </div>
        <div
          className=" flex  gap-4 
        
        "
        >
          <div className="sm:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
