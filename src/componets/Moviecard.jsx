import React from 'react'
import styles from './Moviecard.module.css';
import { Link } from 'react-router-dom';
import {getMovieImg} from "../utils/getMovieImg";


export function Moviecard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path , 300)
    return (
        <li className={styles.Moviecard}>
            <Link to={"/movie/" + movie.id}>
                <img
                    width={230}
                    height={345}
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.tittle} />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}

export default Moviecard
