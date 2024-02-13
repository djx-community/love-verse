import React from "react";
import Carousel from "react-spring-3d-carousel"; // Importing 3D carousel component
import { config } from "react-spring"; // Importing animation config
import { storyCardThemes, useCarousel } from "./Helper"; // Importing helper functions and data
import "./Carousel.css"; // Importing CSS file for styling

// CarouselComponent functional component declaration
const CarouselComponent: React.FC<{ poemName:string, poem: string }> = ({ poemName, poem }) => {
  // Destructuring values from the custom hook useCarousel
  const { getSlides, goToSlide, setGoToSlide } = useCarousel({ poemName, poem });

  // Rendering the component
  return (
    <div className="d-lg-flex">
      {/* Carousel container */}
      <div
        className="col"
        style={{ width: "80%", height: "600px", margin: "0 auto" }}
      >
        {/* React-spring-3d-carousel component */}
        <Carousel
          slides={getSlides()} // Slides for the carousel
          goToSlide={goToSlide} // Function to go to a specific slide
          offsetRadius={2} // Radius offset for the 3D carousel effect
          showNavigation={false} // Option to show navigation buttons
          animationConfig={config.slow} // Animation configuration
        />
      </div>
      {/* Color box container */}
      <div className="col d-flex gap-1 align-items-center flex-column justify-content-center">
        <div>
          <h1>
            Make Your
            <span className="text-danger"> Flavour</span>
          </h1>
          {/* Color boxes for story card themes */}
          <div style={{ display: "flex" }} className="">
            <div className="color-box-container d-flex pt-2 pb-3 px-1 overflow-auto">
              {/* Mapping over story card themes */}
              {storyCardThemes.map((theme, index) => {
                const mixLength = theme.mix.length; // Length of mix array
                const mixIn = theme.mix // Convert mix array to string
                  .map((color) => `rgb(${color})`)
                  .join(",");
                // Rendering color box for each theme
                return (
                  <div
                    key={theme.theme} // Unique key for each color box
                    className="d-flex flex-column align-items-center"
                  >
                    {/* Color box element */}
                    <span
                      className={`color-box ${
                        goToSlide === index ? "active" : ""
                      }`}
                      onClick={() => setGoToSlide(index || 0)}
                      style={{
                        background:
                          mixLength > 1
                            ? `linear-gradient(180deg, ${mixIn})`
                            : mixIn, // Background style for color box
                      }}
                    ></span>
                    {/* Theme name */}
                    <p className="theme-name mt-2">{theme.theme}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent; // Export the component
