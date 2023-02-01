import React from "react";

import "./error.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={"error__page"}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link className={"error__page__link"} to={"/"}>
        You can click this link and return to home page of our product
      </Link>
    </div>
  );
};

export default ErrorPage;
