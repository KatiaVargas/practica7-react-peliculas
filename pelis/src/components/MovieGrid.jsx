import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import { MovieCard } from "./MovieCard";


export function MovieGrid(){
    const [movies, SetMovies] = useState([]);
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            SetMovies(data.results)
            console.log(data)
        })
    }, []);

    return (
        <ul>
        {movies.map(movie => (
            <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            movieId={movie.id}
            />
        ))}
        </ul>
    );
    }