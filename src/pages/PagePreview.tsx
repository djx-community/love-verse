// PagePreview.tsx
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
import download from "../assets/download.svg";
import copy from "../assets/copy.svg";
import CarouselComponent from "../components/Carousel";
// import logoAndBrand from "../assets/main-logo.png";
import { Services } from "../services/Services";

const PagePreview: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const yourName = searchParams.get("yourName");
  const valentineName = searchParams.get("valentineName");
  const [poem, setPoem] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("");

  React.useEffect(() => {
    if (!yourName || !valentineName) {
      // Redirect the user to a different route if required parameters are missing
      navigate("/404", { replace: true });
    } else {
      Services.generatePoem({ valentineName, yourName })
        .then((response) => {
          if (response.status === 200) {
            setPoem(response.data.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [yourName, valentineName]);
  // const [index, setIndex] = React.useState(0);


  return (
    <div className="row h-100">
      <div className="col d-flex align-items-center">
        <CarouselComponent poem={poem}/>
      </div>
      <div className="col d-flex gap-1 align-items-center flex-column justify-content-center">
        <div>
          <h1>
            Make Your
            <span className="text-danger"> Favour</span>
          </h1>
          <div>
            <label htmlFor="color-pallet">Choose Your Theme</label>
            <div id="color-pallet" className="color-box-container pt-3 ">
              {colors.map((color) => {
                return (
                  <span
                    key={color}
                    className={"color-box"}
                    style={{
                      background: `rgb(${color})`,
                      borderColor: color === backgroundColor ? "red" : "white",
                    }}
                    onClick={() => setBackgroundColor(color)}
                  ></span>
                );
              })}
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-danger mt-3 rounded-pill d-flex gap-2 align-items-center justify-content-center px-3"
            >
              <img src={download} width="18px" height="18px" />
              Download
            </button>
            <button
              type="submit"
              className="btn btn-light border mt-3 rounded-pill d-flex gap-2 align-items-center justify-content-center px-3"
            >
              <img src={copy} width="18px" height="18px" />
              Copy link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePreview;

const colors = [
  "1,1,1", // black
  "255, 193, 7", // Gold
  "255, 99, 71", // Tomato
  "255, 215, 0", // Gold (variant)
  "255, 69, 0", // Red-Orange
  "255, 165, 0", // Orange
  "155, 175, 0", // Orange
];

// const images = [
//   "https://images.unsplash.com/photo-1546975490-e8b92a360b24",
//   "https://images.unsplash.com/photo-1568572933382-74d440642117",
//   "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
//   "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
//   "https://images.unsplash.com/photo-1567784177277-4f74e28914de",
// ];
