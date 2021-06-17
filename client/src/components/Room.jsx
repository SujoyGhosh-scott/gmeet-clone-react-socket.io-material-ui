import React from "react";
import RoomFooter from "./RoomFooter";
import Sidebar from "./Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
    background: "orange",
  },
  sidebar: {
    border: "1px solid red",
  },
}));

function Room({ match }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [sidebarType, setSidebarType] = React.useState("");
  const classes = useStyles();

  const handleClick = (type) => {
    if (showSidebar === false && sidebarType === "") {
      setShowSidebar(true);
      setSidebarType(type);
    } else if (showSidebar === true && sidebarType === type) {
      setShowSidebar(false);
      setSidebarType("");
    } else {
      setSidebarType(type);
    }
  };

  return (
    <Grid contianer direction="column" className={classes.root}>
      <Grid container justify="center" className={classes.videoSection}>
        <Grid item sm={8} className={classes.videoContainer}>
          Video
        </Grid>
        {showSidebar && (
          <Sidebar sidebarType={sidebarType} handleClick={handleClick} />
        )}
      </Grid>
      <RoomFooter
        roomId={match.params.roomId}
        sidebarType={sidebarType}
        handleClick={handleClick}
      />
    </Grid>
  );
}

export default Room;
