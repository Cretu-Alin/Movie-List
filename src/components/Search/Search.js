import React, { Component } from "react";
import axios from "axios";
import {
  TextField,
  Container,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import ResultsList from "./ResultsList";

import Settings from "../../config/Settings";

import styles from "./Search.module.css";

class Search extends Component {
  state = {
    searchResults: [],
    searchTerm: "",
    searchTermError: "",
  };

  inputValidate = () => {
    let isError = false;
    const errors = {
      searchTermError: "",
    };
    if (this.state.searchTerm.length < 1) {
      isError = true;
      errors.searchTermError = "Input field is empty. Please try again!";
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  handleSearch = () => {
    const errorSearch = this.inputValidate();
    if (!errorSearch) {
      const { API_URL, API_KEY } = Settings;

      const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`;

      axios.get(url).then((response) => {
        if (response.data.results.length < 1) {
          this.setState({
            searchTermError: "Movie not found. Please try again!",
          });
        }
        this.setState({
          searchResults: response.data.results,
        });
      });
      this.setState({
        searchTerm: "",
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  handleAdd = (movie) => {
    this.setState({
      searchResults: [],
      searchTerm: "",
    });
    this.props.onMovieAdd(movie);
  };

  render() {
    return (
      <React.Fragment>
        <Container className={styles.container}>
          <TextField
            placeholder="Type the name of a movie..."
            label="Search"
            variant="outlined"
            className={styles.search}
            value={this.state.searchTerm}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            error={this.state.searchTermError ? this.inputValidate : false}
            helperText={this.state.searchTermError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton variant="outlined" onClick={this.handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Container>
        {this.state.searchResults.length > 0 && (
          <Container className={styles.results}>
            <ResultsList
              movies={this.state.searchResults}
              onAdd={this.handleAdd}
            />
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
