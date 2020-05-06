import React from "react";
import MovieFilterSharpIcon from "@material-ui/icons/MovieFilterSharp";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MovieFilterSharpIcon fontSize="large" className={styles.logoIcon} />
        <Typography variant="h4">Movie List</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
