import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchSearchMovie = ({ keyword }) => {
    return keyword 
        ? api.get(`/search/movie?query=${keyword}`) 
        : api.get('/movie/popular');
};


export const useSearchMovieQuery = ({ keyword }) => {
    return useQuery({
        queryKey: ['moive-search', keyword],
        queryFn: () => fetchSearchMovie({ keyword }),
        select: results => results.data,
    });
};