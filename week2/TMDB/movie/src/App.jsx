import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchForm from "./components/SearchForm";

const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
  const [popularMoviesData, SetPopularMoviesData] = useState("");
  const [topMoviesData, SetTopMoviesData] = useState("");
  const [upcomingMoviesData, SetUpcomingMoviesData] = useState("");
  const [searchMovieName, setSearchMovieName] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchError, setSearchError] = useState(null);


  //**fetch popular movie from api
  //!important note fro ref
  //*?if added https://api.themoviedb.org/3/movie infront of popular, top_rated and upcoming then can get its data


  const fetchPopularMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetPopularMoviesData(data);
    return data;
  };
  //same

  const fetchTopMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetTopMoviesData(data);
    return data;
  };


  const fetchUpcomingMoviedata = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    SetUpcomingMoviesData(data);
    return data;
  };

  //search
  const handleSearchSubmit = async () => {
    if (!searchMovieName.trim()) {
      setSearchError("Please enter a movie name");
      return;
    }

    //null le error msg clear garxa, ani new search 
    try {
      setSearchError(null);
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchMovieName)}&api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data);
      console.log("Search results:", data);
    } catch (err) {
      console.error(err);
      setSearchError("Failed to search movies");
    }
  };


  //?at start when page load, api call garxa
  useEffect(() => {
    const loadMovies = async () => {
      await fetchPopularMoviedata();
      await fetchTopMoviedata();
      await fetchUpcomingMoviedata();
    };
    loadMovies();
  }, []);


  return (
    <>
      <header className="header">
        <h1>MovieDB</h1>
        <div className="links">
          <a href="#Hot">Hot Right Now</a>
          <a href="#high">Highly Rated Movies</a>
          <a href="#up">Upcoming Movies</a>
        </div>
      </header>

      //main section. contains search,hot,high etc
      <main>
        {/* search */}
        <div className="search-section">
          <SearchForm name={searchMovieName} setMovieName={setSearchMovieName} handleSubmit={handleSearchSubmit} />
          {searchError && <div className="error-message">{searchError}</div>}
        </div>
        {searchResults && searchResults.results && searchResults.results.length > 0 && (
          <div className="search-results">
            <h2>Search Results for "{searchMovieName}"</h2>
            <div className="movie-container">
              {searchResults.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
        {searchResults && searchResults.results && searchResults.results.length === 0 && (
          <div className="no-results">No movies found for "{searchMovieName}". Try searching for something else!</div>
        )}

        <div className="hot-movies">
          <h2 id="Hot">Hot Right Now</h2>
          <div className="movie-container">
            {popularMoviesData &&
              popularMoviesData.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
          </div>
        </div>

        
        <div className="high-movies">
          <h2 id="high">Highly Rated Movies</h2>
          <div className="movie-container">
            {topMoviesData &&
              topMoviesData.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
          </div>
        </div>

        
        <div className="upcoming-movies">
          <h2 id="up">Upcoming Movies</h2>
          <div className="movie-container ">
            {upcomingMoviesData &&
              upcomingMoviesData.results.map((item) => (
                <MovieCard MoviesData={item} key={item.id} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;