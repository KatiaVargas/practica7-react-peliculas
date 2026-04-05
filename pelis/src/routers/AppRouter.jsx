import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;