// Importing necessary dependencies and assets
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import CarouselComponent from "../components/carousel/Carousel"; // Importing the CarouselComponent
import { Services } from "../services/Services"; // Importing the Services
import { useSplashContext } from "../utils/context/SplashScreenContext"; // Importing the context hook

// PagePreview functional component declaration
const PagePreview: React.FC = () => {
  const navigate: NavigateFunction = useNavigate(); // Initialize the navigate function from react-router-dom
  const searchParams = new URLSearchParams(location.search); // Get URL search parameters
  const yourName = searchParams.get("yourName"); // Get 'yourName' parameter from URL
  const valentineName = searchParams.get("valentineName"); // Get 'valentineName' parameter from URL
  const [poem, setPoem] = React.useState(""); // State for storing the generated poem
  const { splashScreen, setSplashScreen } = useSplashContext(); // Access the splash screen context

  React.useEffect(() => {
    // Check if 'yourName' or 'valentineName' parameters are missing
    if (!yourName || !valentineName) {
      // Redirect the user to a different route if required parameters are missing
      navigate("/404", { replace: true });
    } else {
      // Display splash screen while poem is being generated
      if (!splashScreen.open) {
        setSplashScreen({ open: true });
      }
      
      // Call the generatePoem function from Services to fetch the poem
      if(yourName.toString().length > 15 || valentineName.toString().length > 15) {
        alert('Name should be less than 15 characters');
        return navigate("/", { replace: true });
      }
      Services.generatePoem({ valentineName, yourName })
        .then((response) => {
          if (response.status === 200) {
            // If response is successful, set the poem state with the fetched data
            setPoem(response.data.data);
          }
        })
        .catch((error) => {
          console.error(error); // Log any errors that occur during the fetch request
        });
      // Set the poem state with a sample poem
      // setPoem("I love you more than words can express. You mean everything to me. I hope you have a wonderful day.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yourName, valentineName]); // Dependency array for the useEffect hook

  React.useEffect(() => {
    // Hide splash screen once poem is generated
    if (poem !== "") {
      setSplashScreen({ open: false });
    }
  }, [poem, setSplashScreen]);

  // Rendering the component
  return (
    <div className="row d-flex h-100 align-items-center justify-content-center">
        <CarouselComponent poemName={yourName + ' & ' + valentineName} poem={poem} /> {/* Render the CarouselComponent with the generated poem */}
    </div>
  );
};

export default PagePreview; // Export the PagePreview component
