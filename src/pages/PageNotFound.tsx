import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <p>
        Please check the URL for any mistakes, or go back to the{" "}
        <Link to="/" className="text-primary">
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
