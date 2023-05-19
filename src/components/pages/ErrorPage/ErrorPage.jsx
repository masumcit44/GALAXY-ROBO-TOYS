import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import { FiArrowLeftCircle } from "react-icons/fi";
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <div className=" text-center">
        <h1 className="font-bold text-3xl">page not found!</h1>
        <p className="font-bold text-2xl">
          Sorry, an unexpected error has occurred.
        </p>
      </div>

      <Link className="back" to="/">
        <button className="btn btn-error">
          <FiArrowLeftCircle className="text-2xl mr-2"></FiArrowLeftCircle> 
        home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
