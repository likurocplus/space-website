import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="flex h-full items-center justify-center p-4 text-white">
        <div className="container">
          <div className="min-h-[400px] font-mono">
            <h2 className="py-5 text-center text-5xl font-bold">LIST</h2>
            <div>
              <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {ServiceData.map((data, index) => {
                  return (
                    <div className="mx-auto flex min-h-[180px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-sky-900/60 px-3 py-8 text-center text-2xl text-white backdrop-blur-sm lg:w-[300px]">
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="relative z-[0] h-[200px] w-full -translate-y-24 object-cover mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
