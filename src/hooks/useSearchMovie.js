import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page }) => {
    return keyword
        // ? api.get(`/search/movie?query=${keyword}`)
        // : api.get(`/movie/popular`);

        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/movie/popular?page=${page}`);
};


export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ['moive-search', keyword, page],
        queryFn: () => fetchSearchMovie({ keyword, page }),
        select: results => results.data,
    });
};