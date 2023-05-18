import React from "react";
import { useRouteError } from "react-router-dom";
import './ErrorPage.css'
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page text-center">
      <div>
      <h1  className="font-bold text-3xl">page not found!</h1>
      <p  className="font-bold text-2xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
};

export default ErrorPage;
