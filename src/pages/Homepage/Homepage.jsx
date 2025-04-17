import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/popularMovieSlide/PopularMovieSlide'

//1. 배너만들기 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie 가져오기
//3. top rated movie
//4. upcoming moive
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>

    </div>
  )
}

export default Homepage
