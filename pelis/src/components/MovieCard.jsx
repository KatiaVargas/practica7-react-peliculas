import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({title, posterPath, movieId}){
    const imageUrl = getMovieImg(posterPath, 500);

    return(<li>
        <Link to={`/movies/${movieId}`} className="link-no-underline">
            <img src={imageUrl} 
                 alt={title}
                 className="movie-img"/>
            <h2>{title}</h2>
        </Link>
    </li>)
}

export default MovieCard;