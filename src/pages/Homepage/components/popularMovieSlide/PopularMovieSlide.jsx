import React from 'react'
import { usePopluarMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/movieSlider/MovieSlider';
import { responsive } from '../../../../constant/responsive';


const PopularMovieSlide = () => {

  const { data, isLoading, isError, error } = usePopluarMoviesQuery();

  if (isLoading) {
    return <h1>Loading..</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>

  }

  return (
    <div>
      <MovieSlider title="Top popular Movies" movies={data.results} responsive={responsive} />
      <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive} />
      <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive} />
    </div>
  )
}

export default PopularMovieSlide
