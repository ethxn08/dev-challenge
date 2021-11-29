import React from "react";
import MoviesGrid from "../../Components/MoviesGrid";
import Navbar from "../../Components/Navbar";
function Movies() {
  return (
    <div className="movies">
      <Navbar />
      <MoviesGrid />
    </div>
  );
}

export default Movies;
