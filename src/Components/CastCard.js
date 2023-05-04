import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import {CastName, CastChracter} from '../styles'
const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default class CastCard extends Component {
  render() {
    const { cast_id, id, profile_path, character, name } = this.props;
    return (
      <MovieConsumer>
        {(value) => {
          return (
            <div className="movie-new small-4">
              <img src={IMG_API + profile_path} alt={name} />
              <CastName> {name} </CastName>
              <CastChracter>{character}</CastChracter>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}
