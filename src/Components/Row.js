import React, { useEffect, useState } from "react";
import "../Components/Row.css";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: "1" },
  };

  const handleClick = (movie) => {
    if (videoId) {
      setVideoId("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setVideoId(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  
  

  // console.log(movies);
  return (
    <div className="row">
      <h1 className="row__title">{title} </h1>

      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

// function Row({ title, fetchURL, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchURL);
//       // console.log(request);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchURL]);

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies?.map((movie) => {
//           return (
//             <img
//               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//               src={`${base_url}${
//                 isLargeRow ? movie.poster_path : movie.backdrop_path
//               }`}
//               alt={movie.name}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Row;

// http://api.themoviedb.org/3/discover/tv?api_key=23bc521b2ec7d63929e5ae276340b050&with_networks=213
