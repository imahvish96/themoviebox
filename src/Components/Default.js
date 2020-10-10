import React from "react";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <div>
      <div class="message-box">
        <h1>404</h1>
        <p>Page not found</p>
        <div class="buttons-con">
          <div class="action-link-wrap">
            <Link
              onclick="history.back(-1)"
              class="link-button link-back-button"
            >
              Go Back
            </Link>
            <Link to="/" class="link-button">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
