import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

//홈페이지 /
//영화전체 보여주는 페이지(서치) /moives?q=xxxxxx
//영화 디테일 페이지 /moives/:id
//추천영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews
function App() {
  //1. AppLayout 만들기

  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />} >
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />


        {  // Route path ="movie" 라고 하고 하위 레벨로 /movie/:id, /movie/:id/review 등 다 부모 자식 관계로 넣을 수 있음.
          /* <Route path="/movies" element={<MoviePage/>}/>
          <Route path="/movies/:id" element={<MovieDetailPage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
