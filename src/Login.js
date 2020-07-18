import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import styles from "./Login.module.css";
import { TextField, Button } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <div className={styles.color} style={{ minWidth: "350px" }}>
        <Paper className={styles.container}>
          <h2>Hello stranger!</h2>
          <h4>What is your name ?</h4>
          <TextField label="Name" onChange={this.props.onInputChange} />
          <div className={styles.space}>
            <Button variant="contained" onClick={this.props.onSubmit}>
              Login
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Login;
