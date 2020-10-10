import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MovieConsumer } from "../Context";

export default class Movies extends Component {
  render() {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    const { id, title, poster_path, overview, vote_average } = this.props;
    return (
      <MovieConsumer>
        {(value) => {
          return (
            <div className="container">
              <div className="cellphone-container">
                <div className="movie">
                  <Link to="/MovieDetails">
                    <div
                      className="movie-img"
                      onClick={() => {
                        return value.handelDetails(id);
                      }}
                    >
                      <img src={IMG_API + poster_path} alt={title} />
                    </div>
                  </Link>
                  <div className="text-movie-cont">
                    <div className="mr-grid">
                      <div className="col1">
                        <h1 className="title">{title}</h1>
                        <ul className="movie-gen">
                          <li>PG-13 /</li>
                          <li>2h 49min /</li>
                          <li>Adventure, Drama, Sci-Fi,</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mr-grid summary-row">
                      <div className="col2">
                        <h5>SUMMARY</h5>
                      </div>
                      <div className="col2">
                        <ul className="movie-likes">
                          <li>
                            <i className="material-icons">&#xE813;</i>
                            {vote_average}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mr-grid">
                      <div className="overViewHolder">
                        <p className="movie-description">{overview}</p>
                      </div>
                    </div>
                    <div className="mr-grid actors-row">
                      <div className="col1">
                        <p className="movie-actors">
                          Matthew McConaughey, Anne Hathaway, Jessica Chastain
                        </p>
                      </div>
                    </div>
                    <div className="mr-grid action-row">
                      <div className="col2">
                        <div className="watch-btn">
                          <h3>
                            <i className="material-icons">&#xE037;</i>WATCH
                            TRAILER
                          </h3>
                        </div>
                      </div>
                      <div className="col6 action-btn">
                        <i className="material-icons">&#xE161;</i>
                      </div>
                      <div className="col6 action-btn">
                        <i className="material-icons">&#xE866;</i>
                      </div>
                      <div className="col6 action-btn">
                        <i className="material-icons">&#xE80D;</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}
