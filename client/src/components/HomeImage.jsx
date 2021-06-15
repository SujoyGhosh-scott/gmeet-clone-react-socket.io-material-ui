import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import gmeet1 from "../images/gmeet.svg";
import gmeet2 from "../images/gmeet2.svg";
import gmeet3 from "../images/gmeet3.svg";
import gmeet4 from "../images/gmeet4.svg";

const imgUrl = [gmeet1, gmeet2, gmeet3, gmeet4];

const imgText = [
  {
    title: "Get a link that you can share",
    subtitle:
      "click New meeting to get a link that you can send to people that you want to meet with",
  },
  {
    title: "See everyone together",
    subtitle:
      "To see more people at the same time, go to Change layout in the More option menu",
  },
  {
    title: "Plan ahead",
    subtitle:
      "Click New meeting to schedule meetings in Google Calender and send invitations to participants",
  },
  {
    title: "Your meeting is safe",
    subtitle:
      "No one can join a meeting unless invited or admetted be the host",
  },
];

const useStyles = makeStyles(() => ({
  imageSection: {
    marginTop: "3rem",
  },
  imageText: {
    width: "24rem",
  },
}));

function HomeImage() {
  const [currImg, setCurrImg] = React.useState(0);
  const classes = useStyles();

  const changeImage = (type) => {
    if (type === "next") {
      if (currImg < 3) {
        setCurrImg(currImg + 1);
      }
    } else if (type === "prev") {
      if (currImg > 0) {
        setCurrImg(currImg - 1);
      }
    }
  };
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      item
      sm={6}
      xs={12}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.imageSection}
      >
        <IconButton
          disabled={currImg === 0 ? true : false}
          onClick={() => changeImage("prev")}
        >
          <ChevronLeftIcon />
        </IconButton>
        <img
          style={{ height: "350px", objectFit: "contain" }}
          src={imgUrl[currImg]}
          alt=""
        />
        <IconButton
          disabled={currImg === 3 ? true : false}
          onClick={() => changeImage("next")}
        >
          <ChevronRightIcon />
        </IconButton>
      </Grid>
      <Grid
        container
        direction="column"
        align="center"
        style={{ marginTop: "1rem" }}
        className={classes.imageText}
      >
        <Typography variant="h5" gutterBottom style={{ color: "#1f2121" }}>
          {imgText[currImg].title}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="p"
          style={{ color: "#272d36" }}
        >
          {imgText[currImg].subtitle}
        </Typography>
        <Grid></Grid>
      </Grid>
    </Grid>
  );
}

export default HomeImage;
