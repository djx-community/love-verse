import { useState } from "react";
import { SplashScreenContext } from "./SplashScreenContext";
import { SplashScreenContextProps, initialSplashScreenState } from "./Helper";

export const SplashContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State hook to manage the manage splash screen state
  const [splashScreen, setSplashScreen] =
    useState<SplashScreenContextProps["splashScreen"]>(initialSplashScreenState);

  // Provide the splashScreenContext with the current refresh state and the function to update it
  return (
    <SplashScreenContext.Provider value={{ setSplashScreen, splashScreen }}>
      {children}
    </SplashScreenContext.Provider>
  );
};
