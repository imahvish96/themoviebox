import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import CastList from "../components/CastList";
import { MovieTitle, MovieInfo, MovieOverview, MovieCast } from "../styles";

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
              <div
                className="grid-container-two"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.9) 69%, rgba(0,0,0,0.7) 100%), url(${IMG_API + backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",

                }}
              >
                <div className="poster-float">
                  <img src={IMG_API + poster_path} alt="" />
                  {/* <span className="badge alert"> 1.6 </span> */}
                </div>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div>
                    <MovieTitle> {title} </MovieTitle>
                    <MovieInfo>
                      <span>Original Release :</span>{" "}
                      <span style={{ marginRight: "10px" }}>
                        {release_date}
                      </span>
                      |
                      <span style={{ marginLeft: "10px" }}>Running Time :</span>{" "}
                      160min
                    </MovieInfo>

                    <MovieOverview>
                      <h3>Overview</h3>
                      <p>{overview}</p>
                    </MovieOverview>
                  </div>

                  <MovieCast>
                    <h3>Cast</h3>
                    <div className="cast_container">
                      <CastList />
                    </div>
                  </MovieCast>
                </div>
              </div>
            </>
          );
        }}
      </MovieConsumer>
    );
  }
}
