import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import covidImage from "../../images/SARS-CoV-2.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <AppBar className={styles.appbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={styles.title}>
            C
            <span>
              <img className={styles.image} alt="covid19" src={covidImage} />
            </span>
            VID-19 Tracker
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
