import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";
import profile from "assets/img/faces/pic1.png";
import burger from "assets/img/projects/burger.jpg";
import crystal from "assets/img/projects/crystal.jpg";
import destination from "assets/img/projects/destination.jpg";
import devhigher from "assets/img/projects/devhigher.jpg";
import friends from "assets/img/projects/friends.jpg";
import giphy from "assets/img/projects/giphy.jpg";
import hangman from "assets/img/projects/hangman.jpg";
import lyric from "assets/img/projects/lyric.png";
import restaurant from "assets/img/projects/restaurant.jpg";
import trivia from "assets/img/projects/trivia.jpg";
import word from "assets/img/projects/word.jpg";
import clicker from "assets/img/projects/clicker.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Code, Face, Assignment, Chat } from "@material-ui/icons";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import ProfilePage from "views/ProfilePage/ProfilePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      {/* <Route path="/" component={ProfilePage} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
