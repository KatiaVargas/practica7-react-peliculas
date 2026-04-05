import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "../components/MovieCard.css";

export function MovieCard({title, posterPath, movieId}){
    const imageUrl = getMovieImg(posterPath, 500);

    return(<li className="movieCard">
        <Link to={`/movies/${movieId}`} className="link-no-underline">
            <img src={imageUrl} 
                 alt={title}
                 className="movieImage"/>
            <h2>{title}</h2>
        </Link>
    </li>)
}

export default MovieCard;
