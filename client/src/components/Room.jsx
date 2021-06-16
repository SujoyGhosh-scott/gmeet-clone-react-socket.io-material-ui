import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MicIcon from "@material-ui/icons/Mic";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import OpenInBrowserOutlinedIcon from "@material-ui/icons/OpenInBrowserOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CallEndIcon from "@material-ui/icons/CallEnd";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    padding: "1rem",
    background: "#202124",
  },
  videoSection: {
    height: "82%",
    marginBottom: "1rem",
  },
  videoContainer: {
    border: "1px solid gray",
    paddingRight: "1rem",
  },
  sidebar: {
    border: "1px solid red",
  },
  actionsContainer: {
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: "white",
    background: "#434649",
    margin: "0 10px",
  },
  classEndIcon: {
    background: "#EA5044",
    width: "60px",
    borderRadius: "20px",
  },
  actionTime: {
    color: "white",
    fontSize: "large",
    fontWeight: "bold",
  },
  roomId: {
    color: "#434649",
    fontSize: "small",
  },
}));

function Room({ match }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const classes = useStyles();

  return (
    <Grid contianer direction="column" className={classes.root}>
      <Grid container justify="center" className={classes.videoSection}>
        <Grid item sm={9} className={classes.videoContainer}>
          Video
        </Grid>
        <Grid
          item
          sm={3}
          className={classes.sidebar}
          style={{ display: `${!showSidebar && "none"}` }}
        >
          sidebar
        </Grid>
      </Grid>
      <Grid className={classes.actionsContainer}>
        <Grid className={classes.actionTime}>
          {Date().substr(16, 5)} |{" "}
          <span className={classes.roomId}>{match.params.roomId}</span>
        </Grid>
        <Grid>
          <IconButton className={classes.icon}>
            <MicIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <VideocamOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <OpenInBrowserOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
          <IconButton className={`${classes.icon} ${classes.classEndIcon}`}>
            <CallEndIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton className={classes.icon}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <GroupOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <ChatBubbleOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className={classes.icon}>
            <DashboardIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Room;
