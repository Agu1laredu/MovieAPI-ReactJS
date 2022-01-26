import React from 'react'
import { useParams } from 'react-router-dom';
import style from './Moviedetails.module.css'
import { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import {Spinner} from "../componets/Spinner"
import { getMovieImg } from '../utils/getMovieImg';

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

 
  

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false); 
    })
  }, [movieId])

  if (isLoading) {
    return <Spinner />
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500) ;

  return (
    <div className={style.detailsContainer}>

      <img className={`${style.col} ${style.movieImage} `}
        src={imageUrl}
        alt={movie.title}
      />

      <div className={`${style.col}  ${style.movieDetails}`}>

        <p className={style.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>

        <p>
          <strong>Genres</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(",  ")}
        </p>

        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  )
};


export default MovieDetails
