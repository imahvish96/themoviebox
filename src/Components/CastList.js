import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import CastCard from "../Components/CastCard";

export default class CastList extends Component {
  render() {
    return (
      <MovieConsumer>
        {(value) => {
          return value.cast.map((cast) => {
            return <CastCard {...cast} key={cast.id} />;
          });
        }}
      </MovieConsumer>
    );
  }
}
