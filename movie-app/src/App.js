import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//  c1a99bc0
const API_URL = 'http://www.omdbapi.com?apikey=c1a99bc0';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('Spiderman');
    
    },[]);

    return(
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}

                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>

                </div>
            )}
           
        </div>
    );
}

export default App;