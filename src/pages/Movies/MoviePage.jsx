import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Alert } from 'bootstrap';
import MovieCard from '../../common/movieCard/MovieCard';
import './MoviePage.style.css';
import ReactPaginate from 'react-paginate';

//경로 2가지
//navbar에서 클릭해서 온 경우 => popularMovie 보여주기
//키워드릴 입력해서 온 경우 => 키워드와 관련도니 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {

  const [query] = useSearchParams();
  const [page, setPage] = useState(1);


  const keyword = query.get('q');


  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  };

  useEffect(() => {
    setPage(1);
  }, [keyword]);


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

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {" "}
          필터{" "}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results?.length === 0
              ? <div className='No-result'>{" "}검색결과가 없습니다 ㅠㅠ{" "}</div>
              : data?.results?.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            <Col lg={8} xs={12}>
            </Col>
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data.total_pages} //전체 페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>

  )
};

export default MoviePage
