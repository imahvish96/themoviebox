import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieList from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Default from './components/Default';
import Cast from './components/Cast';


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
            <Route path="/Default" component={Default} />
          </div>
        </div>
      </Switch>
    );
  }
}
