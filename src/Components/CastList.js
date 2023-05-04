import React, { Component } from "react";
import { MovieConsumer } from "../Context";
import CastCard from "../components/CastCard";

export default class CastList extends Component {
  render() {
    return (
      <MovieConsumer>
        {(value) => {
          return value.cast.map((cast) => {
            if(cast.profile_path){
              return <CastCard {...cast} key={cast.id} />;
            }
          });
        }}
      </MovieConsumer>
    );
  }
}
