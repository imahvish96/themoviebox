import React, { Component } from "react";
import SearchBar from "../Search";
import './style.css';
import {HeroContainer} from '../../../styles';


export default class Banner extends Component {
  render() {
    return (
      <>
      <div className="hero-container">
        <div className="hero">
          <HeroContainer>
              <h1>Unlimited Movies, TV Shows & much more!</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <SearchBar/>
          </HeroContainer>
        </div> 
      </div>
      </>
    );
  }
}
