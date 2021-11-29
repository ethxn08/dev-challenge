import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import MovieCard from "../../Components/MovieCard";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  CAROUSEL_API,
  IMG_API,
  MOVIE_API,
  TV_API,
  GENRES_API,
} from "../../services/index";

function Home() {
  const [carousel, setCarousel] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreActive, setGenreActive] = useState("");
  const [genreContent, setGenreContent] = useState([]);

  useEffect(() => {
    //Carousel
    fetch(CAROUSEL_API)
      .then((res) => res.json())
      .then((data) => {
        setCarousel(data.results);
      });
    //Genres list
    fetch(GENRES_API)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });

    //Movie Section
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

    //Tv Section
    fetch(TV_API)
      .then((res) => res.json())
      .then((data) => {
        setTv(data.results);
      });
  }, []);
  let history = useHistory();
  const handleGenre = (e) => {
    const genreSelect = e.target.id;
    setGenreActive("active");
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreSelect}&api_key=60431590bdfc3f044c46d9b42735282b&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenreContent(data.results);
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  const genresContent = genres.slice(0, 19).map((g, index) => {
    return (
      <li
        className="list-inline-item"
        key={index}
        id={g.id}
        onClick={handleGenre}
      >
        <button type="button" className="btn btn-outline-danger m-1" id={g.id}>
          {g.name}
        </button>
      </li>
    );
  });
  const handlerDetails = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    history.push("/details/movie/" + id);
  };
  const handlerDetailsTv = (e) => {
    console.log(e.target.id);
    const id = e.target.id;
    history.push("/details/tv/" + id);
  };
  const carouselContent = carousel.slice(0, 5).map((item, index) => {
    return (
      <div
        key={item.title}
        className="carousel"
        id={item.id}
        onClick={handlerDetails}
      >
        <div className="carousel-center" id={item.id} onClick={handlerDetails}>
          <img
            src={IMG_API + item.poster_path}
            alt={item.title}
            id={item.id}
            onClick={handlerDetails}
          />
        </div>
      </div>
    );
  });

  const contentMovie = movies.slice(0, 4).map((movie, index) => {
    return (
      <div
        key={movie.title}
        className="movie-cover"
        id={movie.id}
        onClick={handlerDetails}
      >
        <div className="img-center" id={movie.id} onClick={handlerDetails}>
          <img
            src={IMG_API + movie.poster_path}
            alt={movie.title}
            id={movie.id}
            onClick={handlerDetails}
          />
        </div>
      </div>
    );
  });

  const contentTv = tv.slice(0, 4).map((tv, index) => {
    return (
      <div
        key={tv.title}
        className="movie-cover"
        id={tv.id}
        onClick={handlerDetailsTv}
      >
        <div className="img-center" id={tv.id} onClick={handlerDetailsTv}>
          <img
            src={IMG_API + tv.poster_path}
            alt={tv.title}
            id={tv.id}
            onClick={handlerDetailsTv}
          />
        </div>
      </div>
    );
  });

  const MovieAndTvSections = () => {
    if (genreActive !== "active") {
      return (
        <div>
          {/*Movie Section*/}
          <div className="movies-section">
            <div className="movies-section-title">
              <h2>Movies Section</h2>
              <Link to="/movies" className="Link-button">
                <h2>Go to !</h2>
              </Link>
            </div>
            <br />
            <div className="movies-content">{contentMovie}</div>
          </div>

          {/*Tv Section*/}
          <div className="movies-section">
            <div className="movies-section-title">
              <h2>Tv Section</h2>
              <Link to="tv" className="Link-button">
                <h2>Go to !</h2>
              </Link>
            </div>
            <br />
            <div className="movies-content">{contentTv}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="movies-grid">
            <Row>
              {genreContent.length > 0 &&
                genreContent.map((movie) => {
                  return (
                    <Col xs={12} md={4} lg={3}>
                      <MovieCard id={movie.id} data={movie} img={IMG_API} />
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />

      {/*Slider Section*/}
      <Slider {...settings} className="mb-3">
        {carouselContent}
      </Slider>

      {/*Genre Section */}
      <div className="row genres">
        <div className="col">
          <ul className="list-inline">{genresContent}</ul>
        </div>
      </div>
      {MovieAndTvSections()}
    </div>
  );
}

export default Home;
