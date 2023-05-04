import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MovieConsumer } from "../Context";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './ui/Card'
import { Container } from "../styles";
import Banner from '../components/ui/Banner';

export default class Movies extends Component {
  render() {
    return (
      <MovieConsumer>
        {(value) => {
          console.log(value.movies);
          return (
            <>
            <Banner/>
            <InfiniteScroll
              dataLength={value.movies.length}
              next={value.fetchOnLoad}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              style={{paddingTop: '50px', zIndex: 2, position: 'relative', top: '-125px'}}
            >
              <Container>
                {value.movies.map((movie, i) => {
                return (
                  <Card {...movie}/>
                )})}
              </Container>
            </InfiniteScroll>
            </>
          );
        }}
      </MovieConsumer>
    );
  }
}
