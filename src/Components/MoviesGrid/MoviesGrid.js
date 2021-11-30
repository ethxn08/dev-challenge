import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { Row, Col } from "react-bootstrap";
import { IMG_API, API_KEY } from "../../services/index";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}&page=1`;
function MoviesGrid(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movies-grid">
      <Row>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <Col xs={12} md={4} lg={3}>
                <MovieCard id={movie.id} data={movie} img={IMG_API} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default MoviesGrid;
