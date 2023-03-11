import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"


export default function App() {

    const [movies, setmovies] = useState([])
    const [moviePoster, setMoviePoster] = useState("https://imgs.search.brave.com/kK-qPkBwDxw2Eo0GXNTFDUD5XdXsemJ7umiqGVK1yks/rs:fit:820:981:1/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/OC85LzE4L3Bob3Rv/Z3JhcGhpYy1maWxt/LW1vdmllLWljb25z/LWNpbmVtYS1jbGFw/cGVyYm9hcmQtcG5n/LWZhdnBuZy1hUjBC/YWhFekVqQ0tlZ0JB/NUxuMllXMUZlLmpw/Zw");
    const [title, setTitle] = useState('CARREGANDO')
    const [days, setDays] = useState([])

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

        const promise = axios.get(url)
        promise.then((answer) => {
            setmovies(answer.data)
        })
        promise.catch((answer) =>{
            alert('ERROR',answer.response.data)
        })
    }, [])

    return (
        <BrowserRouter>

            <NavContainer>CINEFLEX</NavContainer>
                <Routes>

                    <Route path="/" element={<HomePage movies={movies}/>} />
                    <Route path="/sessoes/:movieId" element={
                        <SessionsPage

                            movies={movies}
                            moviePoster={moviePoster}
                            title={title}
                            days={days}
                            
                            setMoviePoster={setMoviePoster}
                            setTitle={setTitle}
                            setDays={setDays}

                        />} />
                    <Route path="/assentos/:idSessao" element={
                        <SeatsPage 
                            moviePoster={moviePoster}
                            title={title}
                            days={days}

                        />
                        } />
                    <Route path="/" element={<SuccessPage />} />

                </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
