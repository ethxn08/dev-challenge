import React, { useEffect, useState } from "react";
import TvCard from "../TvCard";
import { Row, Col } from "react-bootstrap";
import { IMG_API, API_KEY } from "../../services/index";
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&${API_KEY}&page=1`;
function TvGrid() {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setTv(data.results);
      });
  }, []);

  return (
    <div className="movies-grid">
      <Row>
        {tv.length > 0 &&
          tv.map((tvs) => {
            return (
              <Col xs={12} md={4} lg={3}>
                <TvCard id={tvs.id} data={tvs} img={IMG_API} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default TvGrid;
