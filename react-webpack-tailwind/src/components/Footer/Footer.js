import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-black/10 px-4 py-4 backdrop-blur-md flex justify-center">
      <div className="container">
        <section className="mx-auto max-w-[1200px] text-white">
          <div className="grid py-5 md:grid-cols-3">
            {/* first column */}
            <div className="">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
                Be Ready To Grow
              </h1>
              <p className="text-gray-400">
                Get exclusive{" "}
                <span className="font-bold text-white"> best update</span>{" "}
                straight to your inbox.{" "}
              </p>
              <br />
              <div className="flex h-10 items-center">
                <input
                  className="inline-block h-[100%] w-full rounded-md border-2 border-gray-200 bg-gray-800 px-3 py-1 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="text"
                  placeholder="Email"
                />
                <button className="inline-block h-full rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-500/75">
                  Enter
                </button>
              </div>
            </div>
            {/* Second column */}

            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="">
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                    Important Links
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Login</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Login</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                    Contact Us
                  </h1>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <HiLocationMarker />
                      <p>Ho Chi Minh City</p>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <MdMessage />
                      <p>likuroquoc@gmail.com</p>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <MdCall />
                      <p>+84123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center justify-between border-t-2 border-gray-300/40 py-6 text-center">
              <span className="text-sm text-gray-400">
                @copyright by Souta KQ
              </span>
              <div className="mb-4 flex items-center justify-center gap-4">
                <a href="#">
                  <FaInstagram className="text-4xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-4xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-4xl" />
                </a>
              </div>

              <span className="text-sm text-gray-400">
                <ul className="flex gap-3">
                  <li className="hover:text-white">Privacy Policy</li>
                  <li className="hover:text-white">Terms & Conditions</li>
                </ul>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
