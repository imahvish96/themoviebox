import React, { Component } from "react";
import CastCard from "../components/CastCard";

export default class Cast extends Component {
  render() {
    return (
      <div className="row movie-images">
        <div className="cloumns small-12 sliderHolder">
          <div className="images scroll-behavior">
            <CastCard />
          </div>
        </div>
      </div>
    );
  }
}
