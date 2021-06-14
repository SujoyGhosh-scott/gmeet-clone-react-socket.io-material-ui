import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import HomeHeader from "./HomeHeader";

const useStyles = makeStyles((theme) => ({
  homeText: {
    //border: "1px solid ",
    padding: "5rem 4rem",
    paddingRight: "8rem",
  },
  subtitle: {
    color: "gray",
    marginTop: "1rem",
  },
  buttonSection: {
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  button: {
    background: "#0e63c4",
    color: "white",
    fontSize: "large",
    fontFamily: "sans-serif",
    marginRight: "2rem",
  },
  learnMore: {
    color: "gray",
    marginTop: "1.5rem",
  },
  light: {
    color: "#3d91ff",
  },
  input: {
    width: "300px",
    border: "1px solid #6e6e6e",
    color: "#6e6e6e",
    fontWeight: "larger",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid style={{ height: "100vh" }}>
      <HomeHeader />
      <Grid container>
        <Grid
          container
          direction="column"
          item
          sm={6}
          xs={12}
          className={classes.homeText}
        >
          <Typography variant="h3" gutterBottom>
            Primium video meetings.
            <br /> Now free for everyone.
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.subtitle}>
            We re-engineered service that we build for secure
            <br />
            business meetings, Google Meet, to make it free and
            <br /> available for all.
          </Typography>
          <Grid container className={classes.buttonSection}>
            <Button
              variant="contained"
              size="large"
              startIcon={<VideoCallOutlinedIcon fontSize="large" />}
              className={classes.button}
            >
              New meeting
            </Button>
            <OutlinedInput
              startAdornment={<KeyboardIcon />}
              label=""
              className={classes.input}
              placeholder="Enter code or link"
            />
          </Grid>
          <hr />
          <Typography variant="h6" gutterBottom className={classes.learnMore}>
            <span className={classes.light}>Learn more </span>about Google meet
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} style={{ border: "1px solid " }}></Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
