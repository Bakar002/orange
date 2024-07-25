import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import logo1 from "../photos/log.svg";
import logo2 from "../photos/THE-HOURS-filled 2 1.png";
import logo3 from "../photos/Rectangle 24086.png";
import Noise from "../photos/noise2.svg";
import Left from "../photos/left.svg";
import Right from "../photos/right.svg";

const testimonials = [
  {
    id: 1,
    name: "Harshal Adarkar",
    title: "Founder & Director of Shellcode IT S...",
    companyLogo: logo1,
    text: "We were looking for Digital Marketing Services in Mumbai & we came across Digilligence. They're a team of young creative minds. Right from Logo Designing, Branding & Social Media Marketing, we found Digilligence to be one of Mumbai's Best Digital Marketing Agency.",
  },
  {
    id: 2,
    name: "Gaurav Randive",
    title: "Founder of TheHours",
    companyLogo: logo2,
    text: "Our Startup TheHours has had a wonderful relationship with Digilligence. We started with them by designing our app with Digi's UX/UI team working on the user experience & user interface. Soon after our app was live, we opted for their digital marketing services and it has given us great brand awareness till now.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "COO of NextGen",
    companyLogo: logo3,
    text: "Digilligence's expertise and coordination are truly impressive. They transformed our system into a sleek, user-friendly experience, which greatly enhanced our operations. Their team was always available to address concerns and provide support.",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "CEO of Alpha Inc.",
    companyLogo: "path/to/alpha-logo.png",
    text: "Working with Digilligence has been a fantastic experience. Their team is knowledgeable, efficient, and always ready to help. They have significantly improved our brand presence online.",
  },
  {
    id: 5,
    name: "Bob Smith",
    title: "Marketing Head of Beta Corp.",
    companyLogo: "path/to/beta-logo.png",
    text: "Digilligence has a team of professionals who deliver results. Their digital marketing strategies are top-notch, and we've seen a great increase in our online engagement.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getTransformValue = () => {
    if (window.innerWidth >= 768) {
      return `translateX(-${currentIndex * (100 / 3)}%)`;
    } else {
      return `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className="carousel-wrapper h-[555px] sm:h-[465px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Noise})` }}
      {...handlers}
    >
      <div className="max-w-6xl mx-auto pt-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-clash font-bold ml-0 max-xl:ml-[25px]">
            Hear it from our clients
          </h2>
          {!isMobile && (
            <div className="flex space-x-2 mr-0 max-xl:mr-[20px]">
              <button
                onClick={prevSlide}
                className="text-white p-2 rounded-full"
              >
                <img src={Left} alt="Previous" />
              </button>
              <button
                onClick={nextSlide}
                className="text-white p-2 rounded-full"
              >
                <img src={Right} alt="Next" />
              </button>
            </div>
          )}
        </div>
        <div className="">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: getTransformValue() }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full md:w-2/5 flex-shrink-0 px-4 font-aeonik"
              >
                <div
                  className={`h-full w-full p-4 ${
                    index === currentIndex
                      ? "bg-orange-500 text-white shadow-dark"
                      : "bg-white text-black shadow-md"
                  } rounded-lg`}
                >
                  <div className="flex items-center space-x-4 mb-4 font-aeonik">
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.name} logo`}
                      className="w-12 h-12 rounded-full bg-white p-2"
                    />
                    <div>
                      <h3
                        className={`${
                          index === currentIndex
                            ? "text-white"
                            : "text-orange-500"
                        } text-xl font-bold`}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-black">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="h-[180px] p-4 flex items-center justify-center">
                    <p className="text-black text-left text-base sm:text-md md:text-md overflow-hidden">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
