import React from "react";
import { Typography } from "@material-ui/core";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "35px" }}>
        <Typography variant="h5">Your favorite movies</Typography>
        {this.props.savedMovies.length > 0
          ? this.props.savedMovies.map((item) => (
              <MovieCard
                movie={item}
                changeRating={this.props.changeRating}
                deleteFav={this.props.deleteFav}
                key={item.id}
              />
            ))
          : "Search for a movie and add it to your list."}
      </div>
    );
  }
}

export default MovieList;
