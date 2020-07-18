import React from "react";
import style from "./MovieList.module.css";
import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";
import { Paper, Grid, ButtonBase, Typography } from "@material-ui/core";
import Rating from "./Rating";
import { formatDate } from "../../utils/dateUtils";
import Tooltip from "@material-ui/core/Tooltip";

const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w200${imageUri}`;

const MovieCard = (props) => {
  const { movie, deleteFav, changeRating } = props;
  return (
    <div>
      <Paper className={style.paper}>
        <Grid className={style.secondContainer} container spacing={2}>
          <Grid item>
            <ButtonBase>
              <img
                className={style.grid}
                alt="complex"
                src={getPosterUrl(movie.poster_path)}
              />
            </ButtonBase>
          </Grid>
          <Grid
            className={style.grid}
            item
            xs={12}
            sm
            container
            alignContent="space-between"
          >
            <Grid
              className={style.details}
              item
              xs
              container
              direction="column"
              spacing={2}
            >
              <Grid item xs>
                <Typography gutterBottom variant="h5" className={style.color}>
                  {movie.original_title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={style.color}
                >
                  Release Year: {formatDate(movie.release_date)}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rating:
                </Typography>
                <div>
                  <Rating
                    changeRating={changeRating}
                    userRating={props.movie.userRating}
                    movieId={movie.id}
                  />
                </div>
              </Grid>
              <Grid item>
                <Tooltip title="Delete">
                  <DeleteOutlineSharpIcon
                    style={{ fontSize: 30 }}
                    className={style.remove}
                    onClick={() => deleteFav(movie)}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MovieCard;
