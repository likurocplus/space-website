import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed right-0 top-0 flex w-full justify-around bg-black/10 px-4 py-4 shadow-lg shadow-cyan-400 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-12" src={Logo} alt="" />
            <span className="px-3 font-sans text-3xl font-bold tracking-tighter text-white overline">
              SPACE Y
            </span>
          </div>
          <div className="flex">
            <ul className="flex space-x-9 font-mono text-xl font-bold text-white sm:py-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="rounded-lg border-2 px-2 py-2 font-mono text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
