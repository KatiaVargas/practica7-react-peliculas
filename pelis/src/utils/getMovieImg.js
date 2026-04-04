import placeholder from "../img/placeholder.png";
export function getMovieImg(path, width = 500) {
    return path
        ? `https://image.tmdb.org/t/p/w${width}${path}`: placeholder;
}