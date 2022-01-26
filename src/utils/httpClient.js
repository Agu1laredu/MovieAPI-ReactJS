const API = "https://api.themoviedb.org/3";

export function get(path) {
  return   fetch( API + path, {
        headers: {
           Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDViZmY5NDA1NzNkOTZhOTZkYzRlYjg2NmVlODc3MiIsInN1YiI6IjYxZDQ5YTgwN2I3YjRkMDA0MmVjNzI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._EbQAB4oVA4d_MO1x0YUKF4DqWeu0wSBjAN09KOHhD0",
           "Content-Type":  "application/json;charset=utf-8",
           
       }
    })
    .then((result) => result.json());
}