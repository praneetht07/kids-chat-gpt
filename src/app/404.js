import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
