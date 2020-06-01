import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <p>MovieList App</p>
      <p>num of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
