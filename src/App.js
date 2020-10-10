import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import { Route, Switch } from "react-router-dom";
import Default from "./Components/Default";
import Cast from "./Components/Cast";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <div className="posNone">
            <Header />
            <Route path="/" exact={true} component={MovieList} />
            <Route path="/MovieDetails" component={MovieDetails} />
            <Route path="/Cast" component={Cast} />
            <Route path="/dvc" component={Default} />
          </div>
        </div>
      </Switch>
    );
  }
}
