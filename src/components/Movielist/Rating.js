import React, { Component } from "react";
import styles from "./Rating.module.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Icon } from "@material-ui/core";
import { v4 as uuid } from "uuid";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0 || props.userRating,
      hover: null,
    };
  }

  onHover = (newValue) => {
    this.setState({ hover: newValue });
  };

  render() {
    const ratings = [...Array(5)].map((item, index) => index + 1);
    const { changeRating, userRating = 0, movieId } = this.props;

    return (
      <div>
        {ratings.map((item) => {
          return (
            <Icon
              onClick={() => changeRating(item, movieId)}
              className={styles.icon}
              key={uuid()}
            >
              <StarIcon
                className={
                  item <= (this.state.hover || userRating)
                    ? styles.filledStar
                    : styles.emptyStar
                }
                onMouseEnter={() => {
                  this.onHover(item);
                }}
                onMouseLeave={() => {
                  this.onHover(null);
                }}
              />
            </Icon>
          );
        })}
      </div>
    );
  }
}

export default Rating;
