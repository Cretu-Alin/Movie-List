import React, { Component } from "react";
import axios from "axios";
import { TextField, Button, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";
import ResultList from "./ResultList";

import Settings from "../../config/Settings";

class Search extends Component {
  state = {
    searchResults: [],
    searchTerm: "",
  };

  handleSearch = () => {
    const { API_URL, API_KEY } = Settings;
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`;
    console.log(url);
    axios.get(url).then((response) => {
      this.setState({
        searchResults: response.data.results,
      });
    });
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container className={styles.container}>
          <TextField
            label="Please click here"
            placeholder="Type the name"
            variant="outlined"
            className={styles.newClass}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="default"
            onClick={this.handleSearch}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Container>
        {this.state.searchResults.length > 0 && (
          <Container className={styles.results}>
            <ResultList movies={this.state.searchResults} />
          </Container>
        )}
      </div>
    );
  }
}
export default Search;
