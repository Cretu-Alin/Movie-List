import React from "react";
import Header from "./shared/Header/Header";
import { Container } from "@material-ui/core";
import "./App.css";
import MovieList from "./components/Movielist/MovieList";
import Search from "./components/Search/Search";
import Login from "./Login";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    savedMovies: [],
    user: null,
    userName: "",
  };

  componentDidMount() {
    const saved = localStorage.getItem("userData");
    if (saved) {
      const parsed = JSON.parse(saved);
      this.setState({
        savedMovies: parsed.savedMovies,
      });
    }
  }

  onMovieAdd = (movie) => {
    const movies = this.state.savedMovies;
    const movieAlreadyFav = movies.find(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (movieAlreadyFav) {
      Swal.fire({
        position: "center",
        width: "30rem",
        icon: "warning",
        title: "Your movie has already been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      movies.push(movie);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          savedMovies: movies,
        })
      );

      this.setState({
        savedMovies: movies,
      });
      Swal.fire({
        position: "center",
        width: "30rem",
        icon: "success",
        title: "Your movie has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  updateFavMovies = (newMovies) => {
    this.setState({
      savedMovies: newMovies,
    });
    localStorage.setItem(
      "userData",
      JSON.stringify({
        savedMovies: newMovies,
      })
    );
  };

  deleteFav = (movie) => {
    const result = this.state.savedMovies.filter(
      (item) => item.id !== movie.id
    );
    this.updateFavMovies(result);
  };

  changeRating = (rating, movieId) => {
    const foundIndex = this.state.savedMovies.findIndex(
      (item) => item.id === movieId
    );
    const { savedMovies } = this.state;
    const movie = savedMovies[foundIndex];
    savedMovies[foundIndex] = Object.assign({}, movie, { userRating: rating });
    this.setState({
      savedMovies: savedMovies,
    });
    localStorage.setItem(
      "userData",
      JSON.stringify({ savedMovies: savedMovies })
    );
  };

  handleAddUser = (event) => {
    if (this.state.userName === "" || this.state.userName === null) {
      Swal.fire(
        "Hello my friend",
        "Please enter your name! I cannot let you in otherwise!",
        "warning"
      );
      return;
    }
    localStorage.setItem(
      "userDetails",
      JSON.stringify({
        userName: this.state.userName,
      })
    );

    this.setState({
      user: {
        userName: this.state.userName,
      },
      userName: null,
    });
  };

  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem("userDetails");
  };

  onUserChange = (event) => {
    const { value } = event.target;
    this.setState({
      userName: value,
    });
  };

  render() {
    const { savedMovies, user } = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={user} onLogout={this.logout} />
          {user ? (
            <Switch>
              <React.Fragment>
                <Route path="/" exact>
                  <Container maxWidth="lg">
                    <Search onMovieAdd={this.onMovieAdd} />
                  </Container>
                </Route>
                <Route path="/favorites">
                  <Container maxWidth="sm">
                    <MovieList
                      savedMovies={this.state.savedMovies}
                      deleteFav={this.deleteFav}
                      changeRating={this.changeRating}
                    />
                  </Container>
                </Route>
              </React.Fragment>
            </Switch>
          ) : (
            <Login
              onInputChange={this.onUserChange}
              onSubmit={this.handleAddUser}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
