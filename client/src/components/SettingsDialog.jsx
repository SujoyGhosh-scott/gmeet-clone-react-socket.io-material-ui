import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SpeakerIcon from "@material-ui/icons/Speaker";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
    height: "600px",
    display: "flex",
  },
  sidebar: {
    width: "300px",
    borderRight: "1px solid lightgray",
    paddingTop: "1.5rem",
  },
  listItem: {},
}));

function SettingsDialog({ open, handleClose }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Grid className={classes.root}>
        <Grid className={classes.sidebar}>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "gray",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            Settings
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <SpeakerIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" component="p">
                  Audio
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <VideocamOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" component="p">
                  Video
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsRoundedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" component="p">
                  General
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid>
          <h1>hello</h1>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default SettingsDialog;
