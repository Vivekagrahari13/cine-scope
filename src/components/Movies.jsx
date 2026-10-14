import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const imdbMovieApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=3345a58bc3623cdb1386a23d5f552e34&language=en-US&page=${pageNo}`;
  useEffect(() => {
    axios.get(imdbMovieApiUrl).then(function (res) {
      setMovies(res.data.results);
    });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-center text-2xl m-5 font-bold">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              movieTitle={movieObj.original_title}
            />
          );
        })}
      </div>
      <Pagination handlePrev ={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
