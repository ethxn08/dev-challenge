import React from "react";
import { IMG_API } from "../../services/index";

function DetailsComponent(props) {
  console.log(props.data);
  return (
    <div className="details">
      <div className="details-image">
        <img
          src={IMG_API + props.data.poster_path}
          id={props.id}
          alt={props.data.id}
        />
      </div>
      <div className="details-title">
        <h1>
          <strong>Title: </strong>
          {props.data.title !== undefined ? props.data.title : props.data.name}
        </h1>

        <p>
          <strong>Overview: </strong>
          {props.data.overview}
        </p>

        <p>
          <strong>Puntuation: </strong>
          {props.data.vote_average}
        </p>

        <p>
          <strong>Release Date: </strong>
          {props.data.release_date}
        </p>

        <a
          href={props.data.homepage}
          target="_blank"
          rel="noreferrer"
          className="Link-button"
        >
          Go To !
        </a>
      </div>
    </div>
  );
}

export default DetailsComponent;
