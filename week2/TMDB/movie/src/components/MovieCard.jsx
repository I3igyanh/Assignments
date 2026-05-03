import "./MovieCard.css"

function MovieCard({ MoviesData }) {
  if (!MoviesData) return null;

  const date = MoviesData.release_date ? MoviesData.release_date.split("-")[0] : "N/A";
  const imageurl = MoviesData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${MoviesData.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (

    // *card container
    <div className="card-container">
      <img src={imageurl} alt={MoviesData.title || "movie"} className="movie-image" />
      
      {/* below the image in card container */}
      
      <div className="card-info">
        <h2 className="card-title">{MoviesData.title}</h2>
        <span className="card-year">{date}</span>

      </div>
    </div>
  );
}

export default MovieCard
