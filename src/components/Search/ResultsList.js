import React from "react";
import BookmarkBorderTwoToneIcon from "@material-ui/icons/BookmarkBorderTwoTone";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import style from "./ResultsList.module.css";

import NoImage from "../../../src/img1.png";
import { formatDate } from "../../utils/dateUtils";
import Tooltip from "@material-ui/core/Tooltip";
// import styles from "./ResultsList.module.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Swal from "sweetalert2";

const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w400${imageUri}`;

const ResultsList = (props) => {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 3;
    }

    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }

    if (isWidthUp("sm", props.width)) {
      return 2;
    }

    return 1;
  };
  return (
    <div>
      <GridList cellHeight="auto" cols={getGridListCols()}>
        {props.movies.map((item) => (
          <GridListTile key={item.id}>
            <img
              src={
                item.poster_path === null
                  ? NoImage
                  : getPosterUrl(item.poster_path)
              }
            />
            <GridListTileBar
              title={item.original_title}
              subtitle={
                <span>Release Year: {formatDate(item.release_date)}</span>
              }
              actionIcon={
                <Tooltip title="Add to Favorite">
                  <IconButton onClick={() => props.onAdd(item)}>
                    <BookmarkBorderTwoToneIcon className={style.book} />
                  </IconButton>
                </Tooltip>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(ResultsList);
