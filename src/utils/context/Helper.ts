import React from "react";

// Defining the shape of the splashScreen context state
export interface SplashScreenContextProps {
  splashScreen: SplashScreenProps; // State
  setSplashScreen: React.Dispatch<React.SetStateAction<SplashScreenProps>>; // Setter function
}

// Defining the properties of the splashScreen state
interface SplashScreenProps {
  open: boolean; // A boolean property indicating whether to trigger a reload
}

// Initial state for the splashScreen context
export const initialSplashScreenState: SplashScreenProps = {
  open: false, // Initial value for the reload property
};
