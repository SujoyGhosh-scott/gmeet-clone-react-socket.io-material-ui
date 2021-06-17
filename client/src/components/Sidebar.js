import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

const useStyles = makeStyles(() => ({
  sidebar: {
    background: "white",
    borderRadius: 20,
    padding: "1.5rem",
    marginLeft: "1rem",
  },
  title: {
    marginBottom: "1.5rem",
    color: "#3a3a3a",
    display: "flex",
    justifyContent: "space-between",
  },
  lastItem: {
    marginBottom: "1rem",
    color: "#3facc1",
    fontWeight: "bold",
  },
  groupRow3: {
    fontSize: "smaller",
    color: "gray",
    fontWeight: "bold",
  },
  groupRow2: {
    display: "flex",
    color: "gray",
    alignItems: "center",
    marginBottom: "2rem",
  },
}));

const InfoSidebar = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid item sm={3} className={classes.sidebar}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Meeting Details
        <CloseIcon onClick={() => handleClick("info")} />
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Joining info
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "gray" }}>
        {window.location.href}
      </Typography>
      <Typography variant="subtitle2" gutterBottom className={classes.lastItem}>
        <FileCopyOutlinedIcon />
        &nbsp;&nbsp;Copy joining info
      </Typography>
      <hr />
    </Grid>
  );
};
const GroupSidebar = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid item sm={3} className={classes.sidebar}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        People
        <CloseIcon onClick={() => handleClick("group")} />
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.groupRow2}
      >
        <PersonAddOutlinedIcon fontSize="small" />
        &nbsp;&nbsp; Add people
      </Typography>
      <Typography variant="button" gutterBottom className={classes.groupRow3}>
        In call
      </Typography>
    </Grid>
  );
};

const ChatSidebar = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid item sm={3} className={classes.sidebar}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        In-call messages
        <CloseIcon onClick={() => handleClick("chat")} />
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        style={{
          display: "flex",
          background: "lightgray",
          padding: ".5rem",
          borderRadius: 10,
          color: "gray",
        }}
      >
        Messages can only seen by people in the call and are deleted when the
        call ends.
      </Typography>
    </Grid>
  );
};

const ActivitySidebar = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid item sm={3} className={classes.sidebar}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Activities
        <CloseIcon onClick={() => handleClick("activity")} />
      </Typography>
    </Grid>
  );
};

function Sidebar({ sidebarType, handleClick }) {
  if (sidebarType === "info") return <InfoSidebar handleClick={handleClick} />;
  else if (sidebarType === "group")
    return <GroupSidebar handleClick={handleClick} />;
  else if (sidebarType === "chat")
    return <ChatSidebar handleClick={handleClick} />;
  else if (sidebarType === "activity")
    return <ActivitySidebar handleClick={handleClick} />;
}

export default Sidebar;
