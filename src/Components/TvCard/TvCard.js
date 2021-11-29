import React from "react";
import { useHistory } from "react-router-dom";

function TvCard(props) {
  let history = useHistory();
  const handlerDetails = (e) => {
    const id = e.target.id;
    const moviesOrTv = "tv";
    history.push("/details/" + moviesOrTv + "/" + id);
  };
  return (
    <div className="movie-card" id={props.id} onClick={handlerDetails}>
      <div className="rated-card">{props.data.vote_average}</div>
      <img
        src={props.img + props.data.poster_path}
        id={props.id}
        onClick={handlerDetails}
      />
      <div className="title" id={props.id} onClick={handlerDetails}>
        {props.data.name}
      </div>
    </div>
  );
}

export default TvCard;
