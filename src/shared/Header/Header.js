import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import TheatersSharpIcon from "@material-ui/icons/TheatersSharp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar className={styles.header}>
        <Typography variant="h4">
          <TheatersSharpIcon />{" "}
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Movie List
          </Link>
        </Typography>

        {props.user && (
          <div className={styles.container}>
            <span>Welcome, {props.user.userName.toUpperCase()}!</span>
            <Link to="/">
              <Tooltip title="Home">
                <HomeOutlinedIcon style={{ color: "#fff" }} />
              </Tooltip>
            </Link>

            <Link
              to="/favorites"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Tooltip title="Favorite">
                <FavoriteBorderIcon />
              </Tooltip>
            </Link>
            <Button
              color="inherit"
              className={styles.login}
              onClick={props.onLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
