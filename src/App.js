import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import requests from "./requests";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
     isLargeRow={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documenterirs" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
