import React from "react";
import "./App.css";
import Header from "./shared/Header/Header";
import { Grid, Container } from "@material-ui/core";
import MovieList from "./components/Movielist/MovieList";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Grid container alignItems="center">
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Search></Search>
        </Grid>
      </Grid> */}

      <Container maxWidth="md">
        <Search />
      </Container>
    </div>
  );
}

export default App;
