import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import KeyboardIcon from "@material-ui/icons/Keyboard";

const useStyles = makeStyles(() => ({
  homeText: {
    paddingTop: "5rem",
    paddingLeft: "4rem",
  },
  subtitle: {
    color: "gray",
    marginTop: ".8rem",
    fontSize: "1.2rem",
  },
  buttonSection: {
    marginTop: "3rem",
    borderBottom: "1px solid lightgray",
    paddingBottom: "2rem",
  },
  button: {
    background: "#0e63c4",
    color: "white",
    fontFamily: "sans-serif",
    marginRight: "2rem",
  },
  learnMore: {
    color: "gray",
    marginTop: "1.5rem",
  },
  light: {
    color: "#3d91ff",
    cursor: "pointer",
  },
  input: {
    height: "3rem",
    width: "200px",
    flex: 1,
    marginRight: "10rem",
    border: "1px solid #727e82",
    color: "gray",
    fontWeight: "larger",
  },
}));

function HomeText() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      item
      sm={6}
      xs={12}
      className={classes.homeText}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#1f2121", fontSize: "48px" }}
      >
        Primium video meetings.
        <br /> Now free for everyone.
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        We re-engineered service that we build for secure
        <br />
        business meetings, Google Meet, to make it free and
        <br /> available for all.
      </Typography>
      <Grid container className={classes.buttonSection}>
        <Button
          variant="contained"
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
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.learnMore}
      >
        <span className={classes.light}>Learn more </span>about Google meet
      </Typography>
    </Grid>
  );
}

export default HomeText;
