import React from 'react'
import { usePopluarMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import { Spinner } from 'react-bootstrap';

const Banner = () => {

    const { data, isLoading, isError, error } = usePopluarMoviesQuery();
    console.log('ddd:,', data);
    if(isLoading){
        return (
            <div className='spinner-area'>
              <Spinner
                animation='border'
                variant='danger'
                style={{ width: "5rem", height: "5rem" }}
              />
            </div>
          );
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path})`,
        }}
        className='banner'>
            <div className='text-white banner-text-area'>
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    )
}

export default Banner;
