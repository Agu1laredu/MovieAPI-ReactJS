import React from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './Moviecard';
import style from './Moviegrid.module.css'
import { useEffect, useState } from 'react';
import { Spinner } from "../componets/Spinner";
import { useQuery } from "../Hooks/useQuery";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';





export function Moviesgrid({search}) {
  const [movies, sestMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

 



  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      sestMovies((prevMovies) => prevMovies.concat( data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll dataLength={movies.length}
     hasMore={hasMore} 
     next={() => setPage((prevPage) => prevPage + 1 )}
       loader={<Spinner/>}>

      <ul className={style.moviegrid}>
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default Moviesgrid
