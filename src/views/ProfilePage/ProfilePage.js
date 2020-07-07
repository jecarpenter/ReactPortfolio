import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
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
import Popover from "@material-ui/core/Popover";
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

const useStyles = makeStyles(styles);

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classes.imgRaised
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="Portfolio of Jude Carpenter"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/linkedinBackground.png")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jude Carpenter</h3>
                    <h6>Software Developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://www.linkedin.com/in/jude-carpenter-9b380a182/">
                        <i className={"fab fa-linkedin"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://github.com/jecarpenter">
                        <i className={"fab fa-github"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://www.facebook.com/judecarp">
                        <i className={"fab fa-facebook"} />
                      </a>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                "It's not what happens to you, but how you react to it that
                matters." -Epictetus{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer
                          className={classes.projectsContainer}
                          direction="row"
                          justify="flex-start"
                        >
                          <GridItem xs={3}>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Burger Database App
                                  </Typography>
                                  {
                                    "Project created to test MySQL and NodeJS Handlebars in a live environment."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://eattheburger2251.herokuapp.com/">
                                <img
                                  alt="Database Application Img"
                                  src={burger}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Crystal Clicker Game
                                  </Typography>
                                  {
                                    "Web application created using HTML, CSS, and Javascript."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://jecarpenter.github.io/unit-4-game/">
                                <img
                                  alt="..."
                                  src={crystal}
                                  className={navImageClasses}
                                />{" "}
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Destination Station
                                  </Typography>
                                  {
                                    "This web app provides you with a travel destination based on a built in questionnaire.  The technologies used in this project are HTML, CSS, Javascript, Bootstrap CSS library, and Google's travel API."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://1fungi99.github.io/Project-1/">
                                <img
                                  alt="..."
                                  src={destination}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                          </GridItem>
                          <GridItem xs={3}>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    DevHigher
                                  </Typography>
                                  {
                                    "DevHigher's purpose is make it quick and easy for developers to connect with their peers, ask questions, give answers, and keep up with the ever-changing world of technology.  Tech used in this application: Javascript, HTML, CSS, Express, Handlebars, MongoDB, and authentication using JSON Web Tokens."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://dev-higher.herokuapp.com/">
                                <img
                                  alt="..."
                                  src={devhigher}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Friend Finder
                                  </Typography>
                                  {
                                    "App created using Javascript, CSS, HTML, Bootstrap, Express, and MongoDB."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://safe-tor-69958.herokuapp.com/">
                                <img
                                  alt="..."
                                  src={friends}
                                  className={navImageClasses}
                                />{" "}
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Giphy Site
                                  </Typography>
                                  {
                                    "Web app created to test Giphy API for Bootcamp.  Tech:  Javascript, HTML, CSS, and Giphy API."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://jecarpenter.github.io/Giphy/">
                                <img
                                  alt="..."
                                  src={giphy}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                          </GridItem>
                          <GridItem xs={3}>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    NodeJS Hangman
                                  </Typography>
                                  {
                                    "NodeJS Hangman created using Javascript & NodeJS."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://github.com/jecarpenter/Node-Hangman">
                                <img
                                  alt="..."
                                  src={hangman}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Restaurant Table Reservation
                                  </Typography>
                                  {
                                    "Restaurant App created using HTML, CSS, Bootstrap, Javascript, NodeJS, and Express"
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://jecarpenter.github.io/RestaurantApp/">
                                <img
                                  alt="..."
                                  src={restaurant}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Liri-Node APP
                                  </Typography>
                                  {
                                    "Liri-Node was an app created using NodeJS, Javascript, Twitter API, and Spotify API."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://github.com/jecarpenter/Liri-Node-App">
                                <img
                                  alt="..."
                                  src={lyric}
                                  className={navImageClasses}
                                />{" "}
                              </a>
                            </HtmlTooltip>
                          </GridItem>
                          <GridItem xs={3}>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Trivia Game
                                  </Typography>
                                  {
                                    "Trivia Game uses Javascript, HTML, and CSS to provide a quick space themed trivia game that tracks your score."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://jecarpenter.github.io/TriviaGame/">
                                <img
                                  alt="..."
                                  src={trivia}
                                  className={navImageClasses}
                                />
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    Hangman(web application)
                                  </Typography>
                                  {
                                    "Hangman created using HTML, CSS, Bootstrap, and Javascript."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://jecarpenter.github.io/Word-Guess-Game/">
                                <img
                                  alt="..."
                                  src={word}
                                  className={navImageClasses}
                                />{" "}
                              </a>
                            </HtmlTooltip>
                            <HtmlTooltip
                              title={
                                <React.Fragment>
                                  <Typography color="inherit">
                                    League of Legends React Clicker
                                  </Typography>
                                  {
                                    "LoL Clicker created using ReactJS, Javascript, and ReactStrap."
                                  }
                                </React.Fragment>
                              }
                            >
                              <a href="https://league-of-legends-click-game.herokuapp.com/">
                                <img
                                  alt="..."
                                  src={clicker}
                                  className={navImageClasses}
                                />{" "}
                              </a>
                            </HtmlTooltip>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "About Me",
                      tabIcon: Face,
                      tabContent: (
                        <GridContainer
                          className={classes.aboutmeContainer}
                          spacing={6}
                        >
                          {/* <Grid item xs={12}></Grid> */}

                          <Grid item xs={12}>
                            <Typography variant="h4">About Me</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              Hi, My name is Jude Carpenter.
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                              I'm a hard working husband and father. I first
                              discovered I had a passion for coding a couple of
                              years ago when I was doing some graphic design as
                              a hobby, and wanted to see how to integrate my
                              work into an online setting.
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                              I did some research and found that Code Academy
                              was a nice place to get started. I learned the
                              fundamentals of HTML, CSS, and Javascript. After I
                              had spent a decent amount of hours wrapping my
                              brain around just what it was that involved web
                              development, I had come to the conclusion that is
                              what I wanted to do as a career!
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                              I started working as a technical recruiter for
                              Apex Systems in the meantime. I learned a lot
                              about different technologies, career paths, and
                              the overwhelming need for capable developers in
                              our market. I looked into a few different bootcamp
                              options to prove my skills and learn as much as
                              possible from capable mentors. Ultimately I found
                              Southern Methodist University had an in-depth and
                              challenging course on full-stack web development
                              and I signed up as soon as I could.
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                              Near the end of my bootcamp experience I signed up
                              with a couple of classmates to compete in a
                              professional artificial intelligence hackathon. We
                              were competing against groups of graduate students
                              and junior developers from various technical
                              universities such as UTD. Ultimately we had a
                              working application for tracking storage usage
                              data for large fortune 500 companies in under 1
                              week. The application was all server-side, easily
                              implemented into the pre-existing system, and with
                              just one command the application would scan every
                              companies data, calculate trends, and process an
                              email with detailed updates for each individual
                              client giving trend details and warnings. We used
                              BrainJS, HighCharts, and NodeJS for our main
                              technologies.
                            </Typography>
                          </Grid>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Contact Me",
                      tabIcon: Chat,
                      tabContent: (
                        <GridContainer
                          className={classes.projectsContainer}
                          spacing={6}
                        >
                          {/* <Grid item xs={12}></Grid> */}
                          <Grid item xs={12}>
                            <Typography variant="h4">Contact Me</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">Mobile:</Typography>
                            <Typography variant="body1">
                              214-784-5802
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">Email:</Typography>
                            <Typography variant="body1">
                              judecarpenter@ymail.com
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              You can also connect with me on LinkedIn!{" "}
                            </Typography>
                          </Grid>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
