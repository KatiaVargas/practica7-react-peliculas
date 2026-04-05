import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails(){
    const {movieId} = useParams(); //Gancho de objetos claves - rescata parámetros
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        get(`/movie/${movieId}`)
            .then((data)=> setMovie(data))
            .catch((error)=> console.error(error));
    }, [movieId])

    if (!movie) return <p>Cargando información...</p>;
    const imageUrl = getMovieImg(movie.poster_path,500);

    return (
    <div className="contenedor-negro">   
        <div className="detailsContainer">
            <img src={imageUrl}
                alt={movie.title}
                className="col movieImage"/>

            <div className="col movieDetails">
            
                <p className="title">
                    <strong>Title: </strong>
                    {movie.title}
                </p>

                <p>
                <strong>Géneros: </strong> 
                {movie.genres?.map(g=>g.name).join(",")}
                </p>
                <hr/>
                <p>
                <strong>Descripción: </strong>
                {movie.overview}
                </p>
            </div>
        </div>
    </div>
    );
}

export default MovieDetails;