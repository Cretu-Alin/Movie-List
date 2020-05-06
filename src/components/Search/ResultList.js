import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w200${imageUri}`;

const ResultList = (props) => {
  return (
    <Grid container>
      {props.movies.map((item) => (
        <React.Fragment>
          <Grid item xs={3}>
            <img src={getPosterUrl(item.poster_path)} />
          </Grid>
          <Grid item xs={3}>
            {item.original_title}
          </Grid>
          <Grid item xs={2}>
            {item.release_date}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default ResultList;
