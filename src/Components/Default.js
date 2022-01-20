import React from "react";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <div>
      <div ClassName="message-box">
        <h1>404</h1>
        <p>Page not found</p>
        <div ClassName="buttons-con">
          <div ClassName="action-link-wrap">
            <Link
              onclick="history.back(-1)"
              ClassName="link-button link-back-button"
            >
              Go Back
            </Link>
            <Link to="/" ClassName="link-button">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
