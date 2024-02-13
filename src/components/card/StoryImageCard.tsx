import React from "react";
import "./StoryImageCard.css";
import download from "../../assets/download.svg";
import copy from "../../assets/copy.svg";
import { toPng } from "html-to-image";

const StoryImageCard: React.FC<{ url: string; poem: string }> = ({
  url,
  poem,
}) => {
  const containerRef = React.useRef(null);
  const handleDownload = () => {
    const element = containerRef.current;
    if (element) {
      toPng(element)
        .then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "Loverse.png";
          // document.body.appendChild(img);
          link.click();
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        className="story-card"
        style={{
          backgroundImage: `url(${url})`,
          color: "white",
          paddingInline: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          fontFamily: "-moz-initial",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div>
          <img src={url} style={{width: 100, height: 100}}/>
        </div>
        <h1>Me&You</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: poem,
          }}
        />
      </div>
      <div className="cardAction">
        <button
          type="submit"
          className="btn btn-danger rounded-pill align-items-center justify-content-center"
          onClick={handleDownload}
        >
          <img src={download} width="18px" height="18px" />
        </button>
        <button
          type="submit"
          className="btn btn-light border mt-2 rounded-pill align-items-center justify-content-center"
        >
          <img src={copy} width="18px" height="18px" />
        </button>
      </div>
    </div>
  );
};

export default StoryImageCard;
