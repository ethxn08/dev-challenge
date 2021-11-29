import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import DetailsComponent from "../../Components/DetailsComponent";

function Details() {
  let params = useParams();
  const [ids, setId] = useState("");
  const [details, setDetails] = useState({});
  const [movieOrTv, setMovieOrTv] = useState("");

  useEffect(() => {
    setId(params.id);
    setMovieOrTv(params.moviesOrTv);
    if (ids !== "") {
      const DETAILS_API = `https://api.themoviedb.org/3/${movieOrTv}/${ids}?api_key=60431590bdfc3f044c46d9b42735282b`;
      fetch(DETAILS_API)
        .then((res) => res.json())
        .then((data) => {
          setDetails(data);
        });
    }
  }, [params.id, params.moviesOrTv]);

  return (
    <div>
      <Navbar />
      <DetailsComponent data={details} />
    </div>
  );
}

export default Details;
