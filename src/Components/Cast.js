import React, { Component } from "react";
import CastCard from "../Components/CastCard";

export default class Cast extends Component {
  render() {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
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
