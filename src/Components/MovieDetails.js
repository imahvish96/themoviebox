import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import CastList from "../Components/CastList";

//this is git comment

export default class MovieDetails extends Component {
  render() {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return (
      <MovieConsumer>
        {(value) => {
          const {
            backdrop_path,
            id,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            vote_count,
          } = value.detailsMovie;
          return (
            <>
              <div className="grid-container-two mt-35">
                <div className="poster-float">
                  <img src={IMG_API + poster_path} alt="" />
                  <span className="badge alert"> 1.6 </span>
                </div>
                <div className="column">
                  <h1 className="title"> {title} </h1>
                  <h5 className="tag-line">
                    This will be the best picture in imdb for longest time.
                  </h5>
                  <div className="row details">
                    <div className="column small-6">
                      <b>Original Release:</b>
                      {release_date}
                    </div>
                    <div className="column small-6">
                      <b>Running Time:</b>
                      160 min
                    </div>
                  </div>
                  <div className="row overView">
                    <div className="column">
                      <h2>Overview</h2>
                      <p>{overview}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container-one">
                <div className="row storyline">
                  <div className="column">
                    <h2>Cast</h2>
                  </div>
                </div>
                <div className="row movie-images">
                  <div className="cloumns small-12 sliderHolder">
                    <div className="images scroll-behavior">
                      <CastList />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </MovieConsumer>
    );
  }
}
