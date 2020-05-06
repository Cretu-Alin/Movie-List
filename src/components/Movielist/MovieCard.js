import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const MovieCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <Typography variant="h5">Movie title</Typography>
        <Typography variant="subtitle2">Movie description</Typography>
        <CardContent></CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
