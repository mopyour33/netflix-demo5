import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../movieCard/MovieCard';




const MovieSlider = ({ title, movies, responsive }) => {

    let moiveSorted=[];

    // moiveSorted = title==="Top popular Movies" ?
    //     [...movies].sort((a, b) => b.popularity - a.popularity)
    //     : title==="Top Rated Movies" ?
    //             [...movies].sort((a, b) => b.vote_average - a.vote_average)
    //             : [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));


    if (title==="Top popular Movies") {
        moiveSorted = [...movies].sort((a, b) => b.popularity - a.popularity);
    } else if (title==="Top Rated Movies") {
        moiveSorted = [...movies].sort((a, b) => b.vote_average - a.vote_average);
    } else if (title==="Upcoming Movies") {
        moiveSorted = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }


    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {moiveSorted?.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </Carousel>
        </div>
    )
}

export default MovieSlider
