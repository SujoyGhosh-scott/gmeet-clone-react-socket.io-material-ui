import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#546E7A",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  headerIcon: {
    border: "1px solid white",
    borderRadius: "12px",
  },
  light: {
    color: "#0fa3e2",
    cursor: "pointer",
    textTransform: "capitalize",
  },
  bottomText: {
    color: "gray",
    bottom: 0,
    position: "absolute",
  },
  textarea: {
    height: 400,
    marginBottom: "1rem",
    border: "none",
    fontSize: 18,
    fontFamily: "sans-serif",
    outlineWidth: 0,
    marginTop: 10,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SendFeedbackDialog({ open, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className={classes.headerIcon}
            style={{
              marginRight: "1rem",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Send feedback
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className={classes.headerIcon}
          >
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Grid container direction="column" style={{ height: "100%" }}>
          <textarea
            className={classes.textarea}
            placeholder="Have feedback? We'd love to hear it, but please don't share sensitive information. Have question? Try help or support."
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Include screenshot"
          />
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={classes.bottomText}
          >
            Go to the <span className={classes.light}>Legal Help Page</span> to
            request contact changes for legal reasons. Some Legal Help Page{" "}
            <span className={classes.light}>
              account and system information
            </span>{" "}
            may be sent to Google. we will use the information that you give us
            to help adress technical issues and to improve our services, subject
            to our <span className={classes.light}> privacy policy</span> and{" "}
            <span className={classes.light}>terms and service</span>.
          </Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default SendFeedbackDialog;
