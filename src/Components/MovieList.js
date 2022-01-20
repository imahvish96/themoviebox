import React, { useContext } from "react";
import Movies from "../components/Movies";
import { MovieContext } from '../Context'


const MovieList = () => {
  const {movies} = useContext(MovieContext);
  return (
    <>
    {movies.map(item => (
        <Movies {...item} key={item.id} />
    ))}
    </>
  )
}

export default MovieList;
