import "./SearchForm.css"
function SearchForm({ name, setMovieName, handleSubmit }) {
  return (
    <div className="searchbox">
      <input className="searchform" type="text" value={name} placeholder="Enter the movie name " onChange={(e) => setMovieName(e.target.value)} />
      <button className="search-button" onClick={handleSubmit}>Search</button>
    </div>

  )
}
export default SearchForm