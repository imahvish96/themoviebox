import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    const BannerImg = "https://images4.alphacoders.com/273/273554.jpg";
    return (
      <div className="BannerHolder">
        <div className="bannerImg">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    );
  }
}
