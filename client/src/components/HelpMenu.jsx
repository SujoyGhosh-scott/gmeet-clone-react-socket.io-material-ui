import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    fontSize: "large",
    padding: "10px 30px",
    width: "220px",
  },
}));

function HelpMenu({ anchorEl, handleClose }) {
  const classes = useStyles();
  return (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem
        className={classes.menuItem}
        style={{ marginTop: "1rem" }}
        onClick={handleClose}
      >
        Help
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleClose}>
        Terms of Service
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={handleClose}>
        Privacy Policy
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        style={{ marginBottom: "1rem" }}
        onClick={handleClose}
      >
        Terms Summary
      </MenuItem>
    </Menu>
  );
}

export default HelpMenu;
