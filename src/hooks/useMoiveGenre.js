import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre=()=>{
    return api.get('/genre/movie/list');
}

export const useMovieGenreQuery=()=>{
    return useQuery({
        queryKey:['moive-genre'],
        queryFn: fetchMovieGenre,
        select:((results) => results.data.genres),
        staleTime:300000 //5분
    });
};