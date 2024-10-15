import React from "react";
import Moon from "../../assets/moon-surface-hd.png";
function Hero() {
  return (
    <div className="z-50 h-full bg-black/20">
      <div className="flex h-full items-center justify-center p-4 text-white">
        <div className="container">
          <div className="w-1/2 space-y-4">
            <h1 className="font-mono text-6xl font-extrabold uppercase">
              Orbite The Earth
            </h1>
            <p className="font-mono font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <button className="rounded-md bg-blue-600 px-4 py-2 font-mono hover:bg-blue-800">
              Learn More
            </button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
