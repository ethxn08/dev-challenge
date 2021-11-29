import React from "react";
import { useHistory } from "react-router-dom";

function MovieCard(props) {
  let history = useHistory();
  const handlerDetails = (e) => {
    const id = e.target.id;
    const moviesOrTv = "movie";
    history.push("/details/" + moviesOrTv + "/" + id);
  };

  return (
    <div className="movie-card" id={props.id} onClick={handlerDetails}>
      <div className="rated-card" id={props.id}>
        {props.data.vote_average}
      </div>
      <img
        src={props.img + props.data.poster_path}
        id={props.id}
        onClick={handlerDetails}
        alt={props.data.title}
      />
      <div className="title" id={props.id} onClick={handlerDetails}>
        {props.data.title}
      </div>
    </div>
  );
}

export default MovieCard;
