import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../photos/sec/image 56.svg";
import image2 from "../photos/sec/Frame 1171275928 1.svg";
import image3 from "../photos/sec/image 57.svg";
import image4 from "../photos/sec/image 57 (1).svg";
import image5 from "../photos/sec/image.svg";
import image6 from "../photos/sec/last.svg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projects = [
  {
    image: image1,
    name: "Tapiz Carpets",
    detail: "Wide range of Curtains, Carpets & more",
  },
  {
    image: image2,
    name: "Delicious Delivery",
    detail: "Get Meat & seafood delivered in no time",
  },
  {
    image: image3,
    name: "MV Leds",
    detail: "Leaders in Consumable Electricals",
  },
  {
    image: image4,
    name: "DMW",
    detail: "A vibrant Pan-Asian cuisine Restaurant",
  },
  {
    image:image5,
    name: "Cleafab",
    detail: "Premium laundry services at you doorstep",
  },
  {
    image:image6,
    name: "Irya Wine yards",
    detail: "Cheers to exceptional taste",
  },
];

function ProjectCarousel() {
  return (
    <div className="bg-stars h-[800px] sm:h-[720px]">
      <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-clash pt-[80px] mb-8 sm:mb-[96px]">
        Take a look at the{" "}
        <span className="text-orange-500">latest projects</span> we’ve done.
      </h2>
      <div className="mx-auto w-full max-w-7xl mb-8 sm:mb-[113px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          arrows={true}
          renderButtonGroupOutside={false}
          className="carousel-wrapper"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={true}
          draggable={true}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative px-4 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-[617px] h-[372px] object-cover shadow-lg"
              />
              <div
                className="absolute bottom-0 left-0 w-full p-4 rounded-b-lg text-white text-left"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 10, 0.7), transparent)",
                }}
              >
                <h3 className="text-xl font-semibold pl-8 font-aeonik">{project.name}</h3>
                <p className="text-sm pl-8 font-aeonik">{project.detail}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCarousel;
