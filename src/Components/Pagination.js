import React, { Component } from "react";
import { MovieConsumer } from "../Context";

export default class Pagination extends Component {
  render() {
    return (
      <div className="">
        <MovieConsumer>
          {(value) => {
            return (
              <button className="loadMore" onClick={value.loadMore}>
                Load More
              </button>
            );
          }}
        </MovieConsumer>
      </div>
    );
  }
}
