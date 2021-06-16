import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import { AppList } from "../AppList";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "290px",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    width: "80px",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: 5,
    "&:hover": {
      background: "rgba(160, 215, 236, 0.459)",
    },
  },
  name: {
    marginTop: 5,
  },
}));

function AppMenu({ anchorEl, handleClose }) {
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
      <Grid item spacing={2} className={classes.container}>
        {AppList.map((item) => (
          <Grid item className={classes.card}>
            <img
              src={item.icon}
              style={{ height: 40, objectFit: "contain" }}
              alt=""
            />
            <p className={classes.name}>{item.name}</p>
          </Grid>
        ))}
      </Grid>
    </Menu>
  );
}

export default AppMenu;
