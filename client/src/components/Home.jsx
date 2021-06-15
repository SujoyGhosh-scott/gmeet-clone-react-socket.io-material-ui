import React from "react";
import Grid from "@material-ui/core/Grid";

import HomeHeader from "./HomeHeader";
import HomeText from "./HomeText";
import HomeImage from "./HomeImage";

function Home() {
  return (
    <Grid style={{ height: "100vh" }}>
      <HomeHeader />
      <Grid container>
        <HomeText />
        <HomeImage />
      </Grid>
    </Grid>
  );
}

export default Home;
