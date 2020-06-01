import React, { useState, createContext } from 'react';

//MOVIE CONTEXT will go where you will access this data
export const MovieContext = createContext();

// MOVIE PROVIDER is where the data live
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Space Odissey',
      price: '$10',
      id: 12100,
    },
    {
      name: 'The Exorcist',
      price: '$5',
      id: 12100,
    },
    {
      name: 'Ghost',
      price: '$8',
      id: 12100,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};


