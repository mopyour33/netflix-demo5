import React from 'react'
import { Badge } from 'react-bootstrap'
import './movieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMoiveGenre';

const MovieCard = ({ movie, index }) => {

  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) =>{
    if(!genreData) return [];
    const genreNameList = genreIdList.map((id)=>{
      const genreOjb = genreData.find((genre)=>genre.id===id);
      return genreOjb?.name || "Unkonwn";
    });

    return genreNameList

  }

  const vote_average = Math.round(movie.vote_average * 10) / 10
  const popularity = Math.round(movie.popularity * 10) / 10

  return (
    <div style={{
      backgroundImage:
        "url(" +
        `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
    }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge bg="danger" key={index}>{id}</Badge>
        ))}
        <div>평점 : {vote_average}</div>
        <div>인기도 : {popularity}</div>
        <div>{movie.adult ? "over 18" : "under 18"}</div>
      </div>
    </div>
  )
}

export default MovieCard
