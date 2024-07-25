// import blk from "./blk.jpg";

import "./App.css";
import ProjectCarousel from "../src/components/Carousel";
import Carousel from "../src/components/Cards";
import Header from "../src/components/Header";
import Section1 from "../src/components/Section1";
import Section2 from "../src/components/Section2";
import Section3 from "../src/components/Section3";
import Section4 from "../src/components/Section4";

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-full max-sm:h-[1300px] max-md:h-[1200px] max-lg:h-[1400px] h-[850px] 2xl:h-[950px] custom-bg form-h">
        <Header />
        <Section1 />
      </div>

      <Section2 />
      <Section3 />

      <ProjectCarousel></ProjectCarousel>
      <Carousel></Carousel>

      <Section4 />
    </div>
  );
}

export default App;
