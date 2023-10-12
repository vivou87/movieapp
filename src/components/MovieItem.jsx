import React from "react";
import "./style.css";
import ReactStars from "react-stars";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MovieItem(props) {
  return (
    <div className="movie-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      />
      <div className="movie-item-body">
        <h1>{props.title}</h1>
        <h2>Cast: {props.cast}</h2>
        {/* <h3>Rating : {props.rate}</h3> */}
        <ReactStars
          count={10}
          value={props.rate}
          edit={false}
          // onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        <p>{props.desc}</p>
        <Link to={`/movies/${props.id}`} style={{ all: "unset" }}>
          <Button variant="warning">See details</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default MovieItem;
