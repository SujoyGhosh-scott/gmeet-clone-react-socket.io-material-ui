import React, { useState } from "react";
import SendFeedbackDialog from "./SendFeedbackDialog";
import SettingsDialog from "./SettingsDialog";
import HelpMenu from "./HelpMenu";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";

const useStyles = makeStyles({
  root: {
    margin: "0 10px",
    padding: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "gray",
  },
  iconSection: {
    display: "flex",
  },
  logo: {
    width: 150,
    objectFit: "contain",
  },
  logoText: {
    fontSize: "28px",
    marginLeft: "10px",
    marginTop: "3px",
  },
  headerOptions: {
    display: "flex",
    alignItems: "center",
  },
});

function HomeHeader() {
  const [openSendFeedback, setOpenSendFeedback] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpMenuOpen, setHelpMenuOpen] = useState(null);
  const classes = useStyles();

  const handleSendFeedbackOpen = () => {
    setOpenSendFeedback(true);
  };

  const handleSendFeedbackClose = () => {
    setOpenSendFeedback(false);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleHelpMenu = (event) => {
    setHelpMenuOpen(event.currentTarget);
  };

  const handleHelpMenuClose = () => {
    setHelpMenuOpen(null);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.iconSection}>
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
          alt="gmeetlogo"
          className={classes.logo}
        />
        <p className={classes.logoText}>Meet</p>
      </Grid>
      <Grid className={classes.headerOptions}>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          style={{ marginTop: "10px" }}
        >
          {Date().substring(0, 25)}
        </Typography>
        <IconButton style={{ marginLeft: "1rem" }} onClick={handleHelpMenu}>
          <HelpOutlineIcon />
        </IconButton>
        <HelpMenu anchorEl={helpMenuOpen} handleClose={handleHelpMenuClose} />
        <IconButton onClick={handleSendFeedbackOpen}>
          <FeedbackOutlinedIcon />
        </IconButton>
        <SendFeedbackDialog
          open={openSendFeedback}
          handleClose={handleSendFeedbackClose}
        />
        <IconButton
          style={{ marginRight: "1rem" }}
          onClick={handleSettingsOpen}
        >
          <SettingsIcon />
        </IconButton>
        <SettingsDialog open={settingsOpen} handleClose={handleSettingsClose} />
        <IconButton style={{ marginRight: "10px" }}>
          <AppsRoundedIcon />
        </IconButton>
        <Avatar style={{ height: 50, width: 50 }} />
      </Grid>
    </Grid>
  );
}

export default HomeHeader;
