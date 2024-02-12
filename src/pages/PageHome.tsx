// PageHome.tsx
import React from "react";
import Logo from "../assets/main-logo.png";
import "./home.css";
import FormComponent from "../components/FormComponent";

const PageHome: React.FC = () => {
  return (
    <div className="row vh-100">
      <div className="col-md-6 pb-5 order-2 order-md-0 d-flex align-items-md-start 
      justify-content-center flex-column form-container">
        <h1 className="text-left text-md-start home-title">
          <span>
            Express Your <span className="text-danger">Feelings</span>
          </span>
          <br />
          <span>With Words</span>
        </h1>
        <p
          style={{
            color: "GrayText",
          }}
        >
          In the symphony of love, let your words be the melody that resonates
          in the heartstrings of your beloved.
        </p>
        <FormComponent />
      </div>
      <div
        className="col-md-6 logo-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="home-logo" src={Logo} />
        <h1>Craft bespoke love poem</h1>
      </div>
    </div>
  );
};

export default PageHome;
