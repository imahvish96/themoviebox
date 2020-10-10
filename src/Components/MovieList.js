import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import Movies from "../Components/Movies";

export default class MovieList extends Component {
  render() {
    return (
      <>
        <div className="movieList">
          <MovieConsumer>
            {(value) => {
              return value.movies.map((item) => {
                return <Movies {...item} key={item.id} />;
              });
            }}
          </MovieConsumer>
        </div>
      </>
    );
  }
}
