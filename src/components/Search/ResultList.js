import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

const ResultList = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>Poster</ListItemAvatar>
        <ListItemText
          primary="Movie Title"
          secondary="Years,Cast"
        ></ListItemText>
      </ListItem>
    </List>
  );
};

export default ResultList;
