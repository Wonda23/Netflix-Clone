const api_key = process.env.REACT_APP_TMDB_API_KEY;
// const api_key = "23bc521b2ec7d63929e5ae276340b050";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&languages=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,

  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=e-US `,
  // fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213 `,
  // fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28 `,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35 `,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27 `,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10748 `,
  // fetchDocumenteries: `/discover/movie?api_key=${API_KEY}&with_genres=99 `,
};
export default requests;
