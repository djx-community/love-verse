import React from "react";
import "./StoryImageCard.css"; // Importing CSS file for styling
import download from "../../assets/download.svg"; // Importing download icon
// import copy from "../../assets/copy.svg"; // Importing copy icon (commented out)
import { toPng } from "html-to-image"; // Importing function to convert HTML to image
import { StoryCardThemeInterface } from "../carousel/Helper"; // Importing interface for story card theme

const StoryImageCard: React.FC<{
  theme: StoryCardThemeInterface; // Props interface: Theme for the story card
  poem: string; // Props interface: Poem content for the story card
  active: boolean; // Props interface: Indicates if the card is active
}> = ({ theme, poem, active }) => {
  const containerRef = React.useRef(null); // Reference to the container element

  // Function to handle the download action
  const handleDownload = () => {
    const element = containerRef.current; // Get the container element
    if (element) {
      toPng(element) // Convert the content of the container to PNG image
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "Loverse.png"; // Set the filename for download
          link.click(); // Trigger the download
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  const mixIn = theme.mix // Convert mix array to string
    .map((color) => `rgba(${color}, 0.6)`)
    .join(",");
  // Rendering the component
  return (
    <div style={{ position: "absolute" }}>
      {/* Story card container */}
      <div
        ref={containerRef}
        className="story-card"
        style={{
          backgroundImage: `${
            theme.mix.length > 1
              ? `linear-gradient(180deg, ${mixIn})`
              : `linear-gradient(180deg, ${mixIn}, rgba(1, 1, 1, 0.5))`
          },url(${theme.url})`, // Background image from the theme
          paddingInline: 20, // Horizontal padding
          display: "flex", // Flex display
          alignItems: "center", // Center align items
          justifyContent: "center", // Center justify content
          fontSize: "1.1rem", // Font size
          color: `${theme.fontColor ? theme.fontColor : "White"}`, // Text color
          fontFamily: `${theme.font ? theme.font : "-moz-initial"}`, // Font family
          flexDirection: "column", // Column flex direction
          // textAlign: "center", // Center text alignment
        }}
      >
        {/* Title */}
        <h1 style={{ zIndex: 2 }}>Me&You</h1>
        {/* Poem content */}
        <div
          style={{ zIndex: 2 }}
          dangerouslySetInnerHTML={{
            __html: poem, // Set poem content as HTML
          }}
        />
      </div>
      {/* Action buttons */}
      <div className="cardAction">
        {/* Download button */}
        <button
          type="submit"
          style={{ zIndex: 2 }}
          className="btn btn-danger rounded-pill align-items-center justify-content-center"
          onClick={handleDownload} // Call handleDownload function on click
          disabled={!active} // Disable button if not active
        >
          <img src={download} width="18px" height="18px" />{" "}
          {/* Download icon */}
        </button>
        {/* Copy button (commented out) */}
        {/* <button
          type="submit"
          className="btn btn-light border mt-2 rounded-pill align-items-center justify-content-center"
          disabled={!active}
        >
          <img src={copy} width="18px" height="18px" /> {/* Copy icon */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default StoryImageCard; // Export the component
