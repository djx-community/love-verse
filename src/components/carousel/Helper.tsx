import React from "react";
import { v4 as uuidv4 } from "uuid";
import StoryImageCard from "../card/StoryImageCard";
import blueBlack from "../../assets/backgrounds/dark-blue-black.jpg";
import blackRed from "../../assets/backgrounds/black-red.jpg";
import darkRed from "../../assets/backgrounds/dark-read-heart.jpg";
import lightRed from "../../assets/backgrounds/light-red-heart.jpg";
import lightBlack from "../../assets/backgrounds/light-black.jpg";
import orangeBlack from "../../assets/backgrounds/orange-black.jpeg";
import whiteRed from "../../assets/backgrounds/white-red.jpg";
import skyBlue from "../../assets/backgrounds/sky-blue-pink.jpg";

// Define the Slide type
type Slide = {
  key: string;
  content: JSX.Element;
  onClick: () => void;
};

// Define the interface for story card themes
export interface StoryCardThemeInterface {
  theme:
    | "Passion"
    | "Midnight"
    | "Crimson"
    | "Blush"
    | "Ember"
    | "Noir"
    | "Romance"
    | "Serenity";
  mix: string[];
  url: string;
  font: "" | "" | "";
  fontColor: string;
}

// Define the array of story card themes
export const storyCardThemes: StoryCardThemeInterface[] = [
  {
    theme: "Passion",
    mix: ["255, 69, 0", "1,1,1"], //red,black
    url: blackRed,
    font: "",
    fontColor: "",
  },
  {
    theme: "Midnight",
    mix: ["1,1,1", "4, 90, 99", "255, 69, 0"], //black,blue,red
    url: blueBlack,
    font: "",
    fontColor: "",
  },
  {
    theme: "Crimson",
    mix: ["184, 6, 8"], //red
    url: darkRed,
    font: "",
    fontColor: "",
  },
  {
    theme: "Blush",
    mix: ["150, 16, 5"], //red
    url: lightRed,
    font: "",
    fontColor: "",
  },
  {
    theme: "Ember",
    mix: ["61, 60, 59", "252, 113, 0"], //grey,orange
    url: orangeBlack,
    font: "",
    fontColor: "",
  },
  {
    theme: "Noir",
    mix: ["64, 62, 62", "1,1,1"], //red,black
    url: lightBlack,
    font: "",
    fontColor: "",
  },
  {
    theme: "Romance",
    mix: ["252, 252, 252"], //red,black
    url: whiteRed,
    font: "",
    fontColor: "",
  },
  {
    theme: "Serenity",
    mix: ["135, 235, 255", "247, 171, 255"], //red,black
    url: skyBlue,
    font: "",
    fontColor: "",
  },
];

// Custom hook to manage carousel state
export const useCarousel = ({ poemName, poem }: { poemName: string, poem: string }) => {
  const [goToSlide, setGoToSlide] = React.useState<number>(0);

  // Function to generate slides based on story card themes
  const getSlides = (): Slide[] => {
    return storyCardThemes.map((theme, index) => {
      return {
        key: uuidv4(), // Generate a unique key for each slide
        // Render a StoryImageCard component for each slide
        content: (
          <StoryImageCard
            poemName={poemName}
            theme={theme}
            poem={poem}
            active={index === goToSlide} // Determine if the card is active
          />
        ),
        onClick: () => setGoToSlide(index), // Set the active slide on click
      };
    });
  };

  // Return carousel state and functions
  return { goToSlide, getSlides, setGoToSlide };
};
