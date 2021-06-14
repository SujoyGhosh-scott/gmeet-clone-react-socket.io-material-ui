import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function HelpMenu({ anchorEl, handleClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
}

export default HelpMenu;
