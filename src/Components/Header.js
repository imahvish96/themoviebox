import React, { Component } from "react";
import {
  Menu,
  LogoHolder,
  SignIn,
  Grid,
  Search,
} from "../StyleComponent/Style";
import { Link } from "react-router-dom";

import { MovieConsumer } from "../Context";

export default class Header extends Component {
  render() {
    return (
      <>
        <MovieConsumer>
          {(value) => {
            return (
              <Menu>
                <Grid>
                  <Link to="/">
                    <LogoHolder className="logo">
                      <strong>THEMOVIE</strong>BOX
                    </LogoHolder>
                  </Link>
                  <div></div>
                  <form onSubmit={value.handelSubmit}>
                    <Search
                      onChange={value.handelChange}
                      value={value.searchTerm}
                      placeholder="Search"
                    ></Search>
                  </form>
                  <SignIn>Log In</SignIn>
                </Grid>
              </Menu>
            );
          }}
        </MovieConsumer>
      </>
    );
  }
}
