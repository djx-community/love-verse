import React from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import StoryImageCard from "./card/StoryImageCard";
// import { config } from "react-spring";

type Slide = {
  key: string;
  content: JSX.Element;
  onClick?: () => void;
};

// const getTouches = (evt: TouchEvent) => {
//   return evt.touches || evt.originalEvent?.touches;
// };

const CarouselComponent: React.FC<{ poem: string }> = ({ poem }) => {
  // const [goToSlide, setGoToSlide] = useState<number>(0);
  // const [offsetRadius, setOffsetRadius] = useState<number>(2);
  // const [showNavigation, setShowNavigation] = useState<boolean>(true);
  // const [enableSwipe, setEnableSwipe] = useState<boolean>(true);
  // const [carouselConfig, setCarouselConfig] = useState(config.gentle);
  // const [xDown, setXDown] = useState<number | null>(null);
  // const [yDown, setYDown] = useState<number | null>(null);

  const getSlides = (): Slide[] => {
    return imagesResources.map((img) => {
      return {
        key: uuidv4(),
        content: <StoryImageCard url={img} poem={poem}/>,
      };
    });
  };

  // [
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/800/801/?random" alt="1" />,
  //     onClick: () => setGoToSlide(0),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
  //     onClick: () => setGoToSlide(1),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
  //     onClick: () => setGoToSlide(2),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  //     onClick: () => setGoToSlide(3),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
  //     onClick: () => setGoToSlide(4),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
  //     onClick: () => setGoToSlide(5),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
  //     onClick: () => setGoToSlide(6),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <img src="https://picsum.photos/805/800/?random" alt="8" />,
  //     onClick: () => setGoToSlide(7),
  //   },
  // ];

  // const handleTouchStart = (evt: TouchEvent) => {
  //   if (!enableSwipe) {
  //     return;
  //   }

  //   const firstTouch = getTouches(evt)?.[0];
  //   if (firstTouch) {
  //     setXDown(firstTouch.clientX);
  //     setYDown(firstTouch.clientY);
  //   }
  // };

  // const handleTouchMove = (evt: TouchEvent) => {
  //   if (!enableSwipe || (!xDown && !yDown)) {
  //     return;
  //   }

  //   const xUp = evt.touches[0].clientX;
  //   const yUp = evt.touches[0].clientY;

  //   const xDiff = xDown ? xDown - xUp : 0;
  //   const yDiff = yDown ? yDown - yUp : 0;
  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //     if (xDiff > 0) {
  //       /* left swipe */
  //       setGoToSlide((prev) => prev + 1);
  //       setXDown(null);
  //       setYDown(null);
  //     } else {
  //       /* right swipe */
  //       setGoToSlide((prev) => prev - 1);
  //       setXDown(null);
  //       setYDown(null);
  //     }
  //   }
  // };

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={getSlides()}
        showNavigation
        // goToSlide={goToSlide}
        // offsetRadius={offsetRadius}
        // showNavigation={showNavigation}
        // animationConfig={carouselConfig}
      />
      {/* <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input
            name="goToSlide"
            value={goToSlide}
            onChange={(e) => setGoToSlide(parseInt(e.target.value, 10) || 0)}
          />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input
            name="offsetRadius"
            value={offsetRadius}
            onChange={(e) => setOffsetRadius(parseInt(e.target.value, 10) || 0)}
          />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type="checkbox"
            checked={showNavigation}
            name="showNavigation"
            onChange={(e) => setShowNavigation(e.target.checked)}
          />
        </div>
        <div>
          <label>Enable swipe: </label>
          <input
            type="checkbox"
            checked={enableSwipe}
            name="enableSwipe"
            onChange={(e) => setEnableSwipe(e.target.checked)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setCarouselConfig(config.gentle);
            }}
            disabled={carouselConfig === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCarouselConfig(config.slow);
            }}
            disabled={carouselConfig === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCarouselConfig(config.wobbly);
            }}
            disabled={carouselConfig === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCarouselConfig(config.stiff);
            }}
            disabled={carouselConfig === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselComponent;

const imagesResources = [
  "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwaW4lMjBsb3ZlfGVufDB8fDB8fHww",
  "https://e0.pxfuel.com/wallpapers/370/286/desktop-wallpaper-couple-love-heart-sunset-graphy-ss-love-couple.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/614/931/desktop-wallpaper-love-iove.jpg",
  "https://img.freepik.com/free-photo/two-red-hearts-against-red-background_1150-6930.jpg",
  "https://img.freepik.com/free-photo/love-letters-wildflower_23-2147730914.jpg?size=626&ext=jpg&ga=GA1.1.2010771668.1704267495&semt=ais",
  "https://img.freepik.com/free-photo/flat-lay-frame-with-heart-shapes-blue-background_23-2148357868.jpg?size=626&ext=jpg&ga=GA1.1.2010771668.1704267495&semt=ais",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UqTJFBZCwnjAM_ELw5aIDheJpmqNMct3F0FEtEA1eg&s",
  "https://wallpaper.dog/large/10709675.jpg",
  "https://img.freepik.com/free-photo/valentines-rsquo-hearts-border-plasticine-clay-diy-craft_53876-127092.jpg?size=626&ext=jpg&ga=GA1.1.2010771668.1704267495&semt=ais",
  "https://img.freepik.com/free-photo/design-made-with-heart-shape-candies-black-background_23-2147877694.jpg?size=626&ext=jpg&ga=GA1.1.2010771668.1704267495&semt=ais",
];
