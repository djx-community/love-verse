// Importing necessary dependencies and assets
import React from "react";
import Logo from "../assets/main-logo.png"; // Importing main logo image
import "./home.css"; // Importing CSS file for styling
import FormComponent from "../components/form/FormComponent"; // Importing FormComponent

// PageHome functional component declaration
const PageHome: React.FC = () => {
  // Rendering the component
  return (
    <div className="row vh-100">
      {/* Form container */}
      <div className="col-md-6 pb-5 order-2 order-md-0 d-flex align-items-md-start 
      justify-content-center flex-column form-container">
        {/* Title */}
        <h1 className="text-left text-md-start home-title">
          <span>
            Express Your <span className="text-danger">Feelings</span>
          </span>
          <br />
          <span>With Words</span>
        </h1>
        {/* Description */}
        <p
          style={{
            color: "GrayText",
          }}
        >
          In the symphony of love, let your words be the melody that resonates
          in the heartstrings of your beloved.
        </p>
        {/* Render the FormComponent */}
        <FormComponent />
      </div>
      {/* Logo container */}
      <div
        className="col-md-6 logo-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="home-logo" src={Logo} alt="Main logo" /> {/* Main logo */}
        <h1>Craft bespoke love poem</h1> {/* Heading */}
      </div>
    </div>
  );
};

export default PageHome; // Export the PageHome component
