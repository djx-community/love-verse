import React from "react";
import redQuill from "../../assets/red-quill.png"; // Import the red quill icon
import "./SplashScreen.css"; // Import the CSS file for styling
import { useSplashContext } from "../../utils/context/SplashScreenContext"; // Import the custom hook for accessing splash screen context

const SplashScreen: React.FC<{ open?: boolean }> = () => {
  // Access the splash screen context using the useSplashContext hook
  const { splashScreen } = useSplashContext();

  return (
    // Render the splash screen div with the appropriate styling and display property
    <div
      className="splash-screen" // Apply the splash-screen class
      style={{
        display: splashScreen.open ? "flex" : "none", // Conditional display based on the value of splashScreen.open
      }}
    >
      {/* Render the red quill icon */}
      <img
        src={redQuill} // Set the image source to the red quill icon
        width="150px"
        height="150px"
        className="loading-quill-icon" // Apply the loading-quill-icon class
      />
      {/* Render the loading caption */}
      <p className="loading-caption">Enchanting verses unfold...</p>
    </div>
  );
};

export default SplashScreen;
