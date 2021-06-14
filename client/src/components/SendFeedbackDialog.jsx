import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
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
    background: "#62809e",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  headerIcon: {
    border: "1px solid white",
    borderRadius: "12px",
  },
  dialogContent: {},
  textarea: {
    marginTop: "1rem",
    height: "450px",
    outlineWidth: 0,
    width: "100%",
    fontSize: "1.3rem",
    fontFamily: "sans-serif",
    border: "none",
  },
  checkbox: {
    marginTop: "1rem",
    marginLeft: "10px",
    marginBottom: "1rem",
  },
  terms: {
    bottom: "0",
    position: "absolute",
    marginBottom: "1rem",
    marginRight: "1rem",
  },
  light: {
    color: "#3d91ff",
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
      <DialogContent className={classes.dialogContent}>
        <textarea
          className={classes.textarea}
          placeholder="Have feedback? We'd love to hear it, but please don't share sensitive information. Have question? Try help or support."
        />
        <FormControlLabel
          className={classes.checkbox}
          control={<Checkbox name="checkedB" color="primary" />}
          label="Include screenshot"
        />
        <Typography variant="body1" gutterBottom className={classes.terms}>
          Go to the <span className={classes.light}>Legal Help page</span> to
          request content changes for legal reasons. Some
          <span className={classes.light}>
            {" "}
            account and system information{" "}
          </span>
          may be sent to Google. We will use the information that you give us to
          help address technical issues and to improve our services, subject to
          our <span className={classes.light}>Privacy Policy</span> and
          <span className={classes.light}> Terms of Service</span>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default SendFeedbackDialog;
