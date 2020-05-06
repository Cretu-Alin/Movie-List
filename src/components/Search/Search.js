import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";
import ResultList from "./ResultList";

const Search = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <div>
      <Container className={styles.container}>
        <TextField
          label="Please click here"
          placeholder="Type the name"
          variant="outlined"
          className={styles.newClass}
        />
        <Button
          variant="contained"
          color="default"
          onClick={() => setShowResults(!showResults)}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Container>
      {showResults && (
        <Container className={styles.results}>
          <ResultList />
        </Container>
      )}
    </div>
  );
};

export default Search;
