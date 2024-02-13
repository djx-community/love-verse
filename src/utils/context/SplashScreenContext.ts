import { createContext, useContext } from "react";
import { SplashScreenContextProps, initialSplashScreenState } from "./Helper";

// Creating the splashScreenContext with default values
export const SplashScreenContext = createContext<SplashScreenContextProps>({
    splashScreen: initialSplashScreenState,
    setSplashScreen: () => { },
});

// Custom hook to consume the SplashScreenContext
export const useSplashContext = () => {
    const splashScreenContext = useContext(SplashScreenContext);

    // Throw an error if the hook is used outside of the context provider
    if (!splashScreenContext) {
        throw new Error("useSplashContext must be used within a FormProvider");
    }

    return splashScreenContext;
};
