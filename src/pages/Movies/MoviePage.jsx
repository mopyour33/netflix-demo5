import React from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Alert } from 'bootstrap';
import MovieCard from '../../common/movieCard/MovieCard';
import './MoviePage.style.css';


//경로 2가지
//navbar에서 클릭해서 온 경우 => popularMovie 보여주기
//키워드릴 입력해서 온 경우 => 키워드와 관련도니 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {

  const [query] = useSearchParams();
  const keyword = query.get('q');

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });

  if (isLoading) {
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
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  console.log("data:, ", data);

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {" "}
          필터{" "}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (

              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
            <Col lg={8} xs={12}>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default MoviePage
