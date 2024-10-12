import React from "react";
import bgVideo from "./assets/video-bg.mp4";
import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 z-[-1] h-[700px] w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
