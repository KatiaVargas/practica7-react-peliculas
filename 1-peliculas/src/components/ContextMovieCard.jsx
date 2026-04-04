//Nos dará el contenido de información de las películas

import { useEffect, useState } from "react"
import {get} from "../services/httpClient"
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"


export function ContextMovieCard(){
const [movies, SetMovies] =useState([])  //Busqueda de snippets

useEffect(()=>{//Carga de datos
    get("/discover/movie").then((data) => {
        SetMovies(data.results);
        console.log(data)
    }); 

}, []); 

    return(<ul className="container">
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </ul>);
}