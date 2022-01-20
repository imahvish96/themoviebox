import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieList from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Default from './components/Default';
import Cast from './components/Cast';
import Card from './components/ui/Card'
import Banner from './components/ui/Banner';
import PC from './components/ui/PercentageCricel'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <div className="posNone">
            <Header />
            <Banner />
            <Route path="/" exact={true} component={MovieList} />
            <Route path="/MovieDetails" component={MovieDetails} />
            <Route path="/Cast" component={Cast} />
            <Route path="/dvc" component={Default} />
          </div>
        </div>
        {/* <Card/> */}
      </Switch>
    );
  }
}
