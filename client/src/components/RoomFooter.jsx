import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
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
  selected: {
    background: "#3facc1",
  },
}));

const IconWithoutFunc = ({ Icon, title }) => {
  const classes = useStyles();
  return (
    <Tooltip title={title} placement="top">
      <IconButton className={classes.icon}>
        <Icon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

const IconWithFunc = ({ Icon, handleClick, type, sidebarType }) => {
  const classes = useStyles();
  return (
    <Tooltip title={type} placement="top">
      <IconButton
        className={`${classes.icon} ${
          sidebarType === type && classes.selected
        }`}
        onClick={() => handleClick(type)}
      >
        <Icon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

function RoomFooter({ roomId, handleClick, sidebarType }) {
  const classes = useStyles();
  return (
    <Grid className={classes.actionsContainer}>
      <Grid className={classes.actionTime}>
        {Date().substr(16, 5)} |{" "}
        <span className={classes.roomId}>{roomId}</span>
      </Grid>
      <Grid>
        <IconWithoutFunc Icon={MicIcon} title="Turn off microphone" />
        <IconWithoutFunc Icon={MoreVertIcon} title="Turn off camera" />
        <IconWithoutFunc Icon={VideocamOutlinedIcon} title="Present now" />
        <IconWithoutFunc
          Icon={OpenInBrowserOutlinedIcon}
          title="More options"
        />
        <Tooltip title="Leave call" placement="top">
          <IconButton className={`${classes.icon} ${classes.classEndIcon}`}>
            <CallEndIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        <IconWithFunc
          type="info"
          Icon={InfoOutlinedIcon}
          handleClick={handleClick}
          sidebarType={sidebarType}
        />
        <IconWithFunc
          Icon={GroupOutlinedIcon}
          handleClick={handleClick}
          type="group"
          sidebarType={sidebarType}
        />
        <IconWithFunc
          Icon={ChatBubbleOutlinedIcon}
          handleClick={handleClick}
          type="chat"
          sidebarType={sidebarType}
        />
        <IconWithFunc
          Icon={DashboardIcon}
          handleClick={handleClick}
          type="activity"
          sidebarType={sidebarType}
        />
      </Grid>
    </Grid>
  );
}

export default RoomFooter;
